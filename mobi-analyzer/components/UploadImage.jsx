import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Animated, { FadeInUp, FadeInDown } from "react-native-reanimated";
import PredictionResult from "./PredictionResult";
import { predictFlower } from "../service/api";

const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  console.log("🚀 ~ UploadImage ~ prediction:", prediction);
  const [loading, setLoading] = useState(false);

  const requestPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("⚠️ Bạn cần cấp quyền để chọn ảnh!");
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    const hasPermission = await requestPermission();
    if (!hasPermission) return;
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedFile(result.assets[0].uri);
      setPrediction(null);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      Alert.alert("🚨 Vui lòng chọn ảnh trước!");
      return;
    }

    setLoading(true);

    const result = await predictFlower(selectedFile);

    if (result) {
      setPrediction(result);
    } else {
      Alert.alert("❌ Dự đoán thất bại. Vui lòng thử lại.");
    }

    setLoading(false);
  };

  const handleImageError = () => {
    Alert.alert("⚠️ Không thể hiển thị ảnh!");
    setSelectedFile(null);
  };

  return (
    <View style={styles.container}>
      <Animated.View entering={FadeInUp.duration(500)} style={styles.card}>
        <Text style={styles.title}>🌸 Tải ảnh lên để dự đoán 🌼</Text>

        <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
          <Text style={styles.uploadText}>Chọn ảnh từ thư viện</Text>
        </TouchableOpacity>

        {selectedFile ? (
          <Animated.View
            entering={FadeInDown.duration(500)}
            style={styles.imageContainer}
          >
            <Image
              source={{ uri: selectedFile }}
              style={styles.image}
              onError={handleImageError}
            />
          </Animated.View>
        ) : null}

        <TouchableOpacity
          style={[styles.predictButton, !selectedFile && styles.disabledButton]}
          onPress={handleUpload}
          disabled={!selectedFile || loading}
        >
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.predictText}>🌟 Dự đoán</Text>
          )}
        </TouchableOpacity>
      </Animated.View>
      {prediction ? (
        <Animated.View
          entering={FadeInUp.delay(300).duration(500)}
          style={styles.resultContainer}
        >
          <PredictionResult result={prediction} />
        </Animated.View>
      ) : null}
    </View>
  );
};

export default UploadImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
    backgroundColor: "#F5F5F5",
  },
  card: {
    width: "90%",
    backgroundColor: "#E1BEE7",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  uploadButton: {
    backgroundColor: "#BA68C8",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  uploadText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  imageContainer: {
    marginVertical: 15,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
  predictButton: {
    backgroundColor: "#FFB300",
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  predictText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  resultContainer: {
    marginTop: 20,
    width: "90%",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  resultText: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
});
