import React, { useEffect, useState } from "react";
import "./BarChart.css";
import { Bar } from "react-chartjs-2";

const BarChart = ({ turkcell, vodafone, tt, city }) => {
    return (
        <div>
            <Bar
                className="barcharts"
                data={{
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
                            // backgroundColor: [
                            //     "rgba(255, 99, 132, 0.2)",
                            //     "rgba(255, 159, 64, 0.2)",
                            //     "rgba(255, 205, 86, 0.2)",
                            //     "rgba(75, 192, 192, 0.2)",
                            //     "rgba(54, 162, 235, 0.2)",
                            //     "rgba(153, 102, 255, 0.2)",
                            //     "rgba(201, 203, 207, 0.2)",
                            // ],
                            // borderColor: [
                            //     "rgb(255, 99, 132)",
                            //     "rgb(255, 159, 64)",
                            //     "rgb(255, 205, 86)",
                            //     "rgb(75, 192, 192)",
                            //     "rgb(54, 162, 235)",
                            //     "rgb(153, 102, 255)",
                            //     "rgb(201, 203, 207)",
                            // ],
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
                }}
                height={300}
                width={400}
                options={{
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
                }}
            />
        </div>
    );
};

export default BarChart;
