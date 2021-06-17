import "./NewScreen.css";
import sehir from "../data/sehirler";
import { useState } from "react";
import axios from "axios";

const NewScreen = (e) => {
    const [pladeCode, setPladeCode] = useState(0);
    const handleChange = (e) => {
        setPladeCode(e[0] - 1);
        setCity(e[1]);
    };

    const [company, setCompany] = useState("Turkcell");
    const [name, setName] = useState("3G");
    const [city, setCity] = useState("Adana");
    const [district, setDistrict] = useState("Aladağ");
    const [data, setData] = useState();

    const onFormSubmit = (e) => {
        console.log("calisti");
        console.log(company, name, city, district, data);
        // console.log(e);
        e.preventDefault();
        axios
            .post("http://localhost:5000/api/signals", {
                company,
                name,
                city,
                district,
                data,
            })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });

        setData("");
    };

    return (
        <div className="newscreen">
            <div className="new__container">
                <form>
                    <h1>Hızlı Veri Ekle</h1>
                    <div className="form__item">
                        <p>Operatör:</p>
                        <select
                            onChange={(e) => setCompany(e.target.value)}
                        >
                            <option selected value="Turkcell">
                                Turkcell
                            </option>
                            <option value="Vodafone">Vodafone</option>
                            <option value="Türk Telekom">
                                Türk Telekom
                            </option>
                        </select>
                    </div>
                    <div className="form__item">
                        <p>Veri Türü:</p>
                        <select
                            onChange={(e) => setDistrict(e.target.value)}
                        >
                            <option selected value="3G">
                                3G
                            </option>
                            <option value="LTE">LTE</option>
                            <option value="Dual">Dual</option>
                            <option value="Bip">Bip</option>
                        </select>
                    </div>
                    <div className="form__item">
                        <p>İl:</p>
                        <select
                            onChange={(e) =>
                                handleChange(e.target.value.split(","))
                            }
                        >
                            {sehir.map((sehir) => {
                                return (
                                    <option
                                        value={[sehir.plaka, sehir.il]}
                                        key={sehir.plaka}
                                    >
                                        {sehir.il}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="form__item">
                        <p>İlçe:</p>
                        <select
                            onChange={(e) => setDistrict(e.target.value)}
                        >
                            {sehir[pladeCode].ilceleri.map((ilce) => {
                                return <option>{ilce}</option>;
                            })}
                        </select>
                    </div>
                    <div className="form__item">
                        <p>Sinyal:</p>
                        <input
                            type="text"
                            value={data}
                            onChange={(e) => setData(e.target.value)}
                        />
                    </div>
                    <div className="form__item">
                        {data >= 0 && data <= 100 && data !== "" ? (
                            <button
                                type="button"
                                className="active"
                                onClick={(e) => {
                                    onFormSubmit(e);
                                }}
                            >
                                Gönder
                            </button>
                        ) : (
                            <button className="passive" disabled>
                                Gönder
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewScreen;
