import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import Animated, { FadeIn, FadeInUp, BounceIn } from "react-native-reanimated";
import PredictionChart from "./PredictionChart";

const PredictionResult = ({ result }) => {
  return (
    <Animated.View
      entering={FadeInUp.duration(500).springify()}
      whileHover={{ scale: 1.02 }}
    >
      <Card style={styles.card}>
        <Text style={styles.predictedText}>
          Lớp dự đoán:{" "}
          <Text style={styles.highlight}>{result.predicted_class}</Text>
        </Text>

        <Text style={styles.confidenceText}>
          Mức độ tin cậy:{" "}
          <Text style={styles.confidenceHighlight}>
            {(result.max_probability * 100).toFixed(2)}%
          </Text>
        </Text>

        <View style={styles.chartContainer}>
          <PredictionChart probabilities={result.probabilities} />
        </View>
      </Card>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1e3c72",
    borderRadius: 15,
    padding: 20,
    marginTop: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
    position: "relative",
  },
  predictedText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  highlight: {
    color: "#ffeb3b",
  },
  confidenceText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    marginTop: 8,
  },
  confidenceHighlight: {
    fontWeight: "bold",
    color: "#ffeb3b",
  },
  chartContainer: {
    marginTop: 16,
  },
});

export default PredictionResult;
