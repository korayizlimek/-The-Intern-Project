import React from "react";
import { Line } from "react-chartjs-2";
import "./LineChart.css";

const LineChart = ({ turkcell, vodafone, tt, city }) => {
    const state = {
        labels: ["3G", "LTE", "Dual", "Bip"],
        datasets: [
            {
                label: "Turkcell",
                data: [
                    turkcell?.data3g,
                    turkcell?.lte,
                    turkcell?.dual,
                    turkcell?.bip,
                ],
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgb(75, 192, 192)",
                borderWidth: 1,
            },
            {
                label: "Vodafone",
                data: [
                    vodafone?.data3g,
                    vodafone?.lte,
                    vodafone?.dual,
                    vodafone?.bip,
                ],
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgb(255, 99, 132)",
                borderWidth: 1,
            },
            {
                label: "TurkTelekom",
                data: [tt?.data3g, tt?.lte, tt?.dual, tt?.bip],
                backgroundColor: "rgba(153, 102, 255, 0.2)",
                borderColor: "rgb(153, 102, 255)",
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
                text: city,
                display: true,
                fontSize: 20,
            },
        },
    };

    return (
        <div className="linechart">
            <Line data={state} options={options} />
        </div>
    );
};

export default LineChart;
