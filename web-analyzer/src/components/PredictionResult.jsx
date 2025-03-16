import { Card } from "react-bootstrap";
import PredictionChart from "./PredictionChart";

const PredictionResult = ({ result }) => {
  return (
    <Card className="mt-4 p-3 shadow">
      <h3>Predicted Class: <span className="text-success">{result.predicted_class}</span></h3>
      <h5>Confidence: {(result.max_probability * 100).toFixed(2)}%</h5>
      <PredictionChart probabilities={result.probabilities} />
    </Card>
  );
};

export default PredictionResult;
