import axios from "axios";
import React, { useEffect, useState } from "react";
import Signal from "../components/Signal";
import "./SignalsScreen.css";

const SignalsScreen = () => {
    const [signals, setSignals] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/signals")
            .then((response) => {
                // console.log(response);
                setSignals(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="signalsscreen">
            <div className="signals">
                {/* Basliklar */}
                <div className="header">
                    <div className="header__info">
                        <p className="signal__company">Operatör</p>
                        <p className="signal__name">Tür</p>
                        <p className="signal__city">İl</p>
                        <p className="signal__district">İlçe</p>
                        <p className="signal__data">Sinyal</p>
                    </div>
                </div>
                {/* Singyaller */}
                {signals.map((signal) => {
                    console.log(signal);
                    return (
                        <Signal
                            city={signal.city}
                            data={signal.data}
                            district={signal.district}
                            name={signal.name}
                            company={signal.company}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default SignalsScreen;
