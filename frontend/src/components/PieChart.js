import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ turkcell, vodafone, tt, city, name }) => {
    const state = {
        labels: ["Turkcell", "Vodafone", "TurkTelekom"],
        datasets: [
            {
                data: [turkcell, vodafone, tt],
                backgroundColor: [
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                ],
                borderColor: [
                    "rgb(75, 192, 192)",
                    "rgb(255, 99, 132)",
                    "rgb(153, 102, 255)",
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: true,
                position: "bottom",
            },
            title: {
                text: name + city,
                display: true,
                fontSize: 20,
            },
        },
    };

    return (
        <div className="piechart">
            <Pie data={state} options={options} />
        </div>
    );
};

export default PieChart;
