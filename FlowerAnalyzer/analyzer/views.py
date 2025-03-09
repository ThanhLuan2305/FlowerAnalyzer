from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import os
import numpy as np
from tensorflow import keras
from tensorflow.keras.preprocessing import image
from PIL import Image
import json
from .models import DataTrained

# Tắt thông báo oneDNN nếu không cần
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'

# Đường dẫn tới model đã huấn luyện
current_dir = os.path.dirname(os.path.abspath(__file__))
loaded_best_model = keras.models.load_model(os.path.join(current_dir, 'best.keras'))

@csrf_exempt
def predict_flower(request):
    if request.method == 'POST':
        try:
            # Lấy file ảnh từ request
            img_file = request.FILES.get('image')
            if not img_file:
                return JsonResponse({'error': 'No image provided'}, status=400)

            # Đọc và xử lý ảnh
            img = Image.open(img_file)
            img = img.resize((300, 300))  # Resize ảnh
            img_array = image.img_to_array(img, dtype=np.uint8)
            img_array = np.array(img_array) / 255.0

            # Dự đoán bằng model
            p = loaded_best_model.predict(img_array[np.newaxis, ...])
            labels = {0: 'daisy', 1: 'dandelion', 2: 'rose', 3: 'sunflower', 4: 'tulip'}
            max_prob = np.max(p[0], axis=-1)
            predicted_class = labels[np.argmax(p[0], axis=-1)]

            # Tính xác suất cho từng lớp
            classes = []
            prob = []
            for i, j in enumerate(p[0], 0):
                classes.append(labels[i])
                prob.append(round(j * 100, 2))

            # Lưu kết quả vào database
            DataTrained.objects.create(
                file_path=img_file.name,
                daisy=prob[0],
                dandelion=prob[1],
                rose=prob[2],
                sunflower=prob[3],
                tulip=prob[4],
                result=predicted_class
            )

            # Trả về kết quả dưới dạng JSON
            response = {
                'predicted_class': predicted_class,
                'max_probability': float(max_prob),
                'probabilities': dict(zip(classes, prob))
            }
            return JsonResponse(response)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    return JsonResponse({'error': 'Invalid request method'}, status=405)