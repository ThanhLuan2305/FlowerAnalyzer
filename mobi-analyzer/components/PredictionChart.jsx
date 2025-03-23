import React from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;
const chartWidth = Math.min(screenWidth - 40, 350);

const PredictionChart = ({ probabilities }) => {
  const labels = Object.keys(probabilities);
  const dataValues = Object.values(probabilities);

  const data = {
    labels,
    datasets: [
      {
        data: dataValues,
      },
    ],
  };

  return (
    <View
      style={{
        backgroundColor: "#1e3c72",
        borderRadius: 12,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 6,
        overflow: "hidden",
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 16,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        Xác suất dự đoán (%)
      </Text>
      <ScrollView horizontal>
        <BarChart
          data={data}
          width={chartWidth}
          height={320}
          yAxisLabel=""
          yAxisSuffix="%"
          chartConfig={{
            backgroundGradientFrom: "#1e3c72",
            backgroundGradientTo: "#2a5298",
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            strokeWidth: 2,
            barPercentage: 0.6,
            decimalPlaces: 0,
          }}
          style={{
            borderRadius: 12,
          }}
          verticalLabelRotation={30}
        />
      </ScrollView>
    </View>
  );
};

export default PredictionChart;
