import { useState } from "react";
import { Container, Card, Button, Form, Image, Spinner, Alert, Row, Col } from "react-bootstrap";
import { predictFlower } from "../services/api";
import PredictionResult from "./PredictionResult";

const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file));
      setPrediction(null);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError("Please select an image.");
      return;
    }
    setLoading(true);
    setError("");

    const result = await predictFlower(selectedFile);

    if (result) {
      setPrediction(result);
    } else {
      setError("Failed to predict. Try again.");
    }
    setLoading(false);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <Card className="shadow-lg p-4" style={{ width: "900px" }}>
        <Card.Title className="mb-3 fs-3 text-center">🌸 Upload Image for Prediction 🌼</Card.Title>

        <Form.Group controlId="formFile" className="mb-3 text-center">
          <Form.Control type="file" accept="image/*" onChange={handleFileChange} className="fs-5 p-2" />
        </Form.Group>

        {error && <Alert variant="danger" className="mt-3 fs-5 text-center">{error}</Alert>}

        <Row>
          <Col md={5} className="text-center">
            {imagePreview && (
              <Image src={imagePreview} alt="Preview" fluid className="mb-3" style={{ borderRadius: "10px", maxHeight: "300px" }} />
            )}

            <Button variant="primary" size="lg" onClick={handleUpload} disabled={loading} className="px-4">
              {loading ? <Spinner animation="border" size="sm" /> : "Predict"}
            </Button>
          </Col>

          <Col md={7}>
            {prediction && <PredictionResult result={prediction} />}
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default UploadImage;
