import React, { useEffect, useState } from "react";
import "./HomeScreen.css";

import sehir from "../data/sehirler";

import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";
import axios from "axios";

const HomeScreen = () => {
    const [signals, setSignals] = useState([]);
    const [turkey, setTurkey] = useState([]);
    const [select, setSelect] = useState();
    const [turkcell, setTurkcell] = useState({
        lte: "50",
        dual: "50",
        bip: "50",
        data3g: "50",
    });
    const [vodafone, setVodafone] = useState({
        lte: "50",
        dual: "50",
        bip: "50",
        data3g: "50",
    });
    const [tt, setTT] = useState({
        lte: "50",
        dual: "50",
        bip: "50",
        data3g: "50",
    });
    const [turkeyTurkcell, setTurkeyTurkcell] = useState({
        lte: "50",
        dual: "50",
        bip: "50",
        data3g: "50",
    });
    const [turkeyVodafone, setTurkeyVodafone] = useState({
        lte: "50",
        dual: "50",
        bip: "50",
        data3g: "50",
    });
    const [TurkeyTT, setTurkeyTT] = useState({
        lte: "50",
        dual: "50",
        bip: "50",
        data3g: "50",
    });

    const sum = (filter) => {
        const res = filter.reduce(
            (toplam, value) => (toplam = toplam + value.data),
            0
        );
        // console.log(Math.floor(res / filter.length));
        return Math.floor(res / filter.length);
    };

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/signals")
            .then((response) => {
                const filtre = response.data.filter(
                    (city) => city.city === select
                );

                const allData = response.data;

                return [filtre, allData];
            })
            .then((res) => {
                setSignals(res[0]);
                setTurkey(res[1]);

                return res;
            })
            .catch((error) => {
                console.log(error);
            });
    }, [select]);

    useEffect(() => {
        getCity(signals);
        getTurkey(turkey);
    }, [signals]);

    const getTurkey = (signals) => {
        const filterG = signals.filter((city) => city.name === "3G");
        const tfilterG = filterG.filter(
            (city) => city.company === "Turkcell"
        );
        const vfilterG = filterG.filter(
            (city) => city.company === "Vodafone"
        );
        const ttfilterG = filterG.filter(
            (city) => city.company === "Türk Telekom"
        );

        const filterLTE = signals.filter((city) => city.name === "LTE");
        const tfilterLTE = filterLTE.filter(
            (city) => city.company === "Turkcell"
        );
        const vfilterLTE = filterLTE.filter(
            (city) => city.company === "Vodafone"
        );
        const ttfilterLTE = filterLTE.filter(
            (city) => city.company === "Türk Telekom"
        );

        const filterDual = signals.filter((city) => city.name === "Dual");
        const tfilterDual = filterDual.filter(
            (city) => city.company === "Turkcell"
        );
        const vfilterDual = filterDual.filter(
            (city) => city.company === "Vodafone"
        );
        const ttfilterDual = filterDual.filter(
            (city) => city.company === "Türk Telekom"
        );

        const filterBip = signals.filter((city) => city.name === "Bip");
        const tfilterBip = filterBip.filter(
            (city) => city.company === "Turkcell"
        );
        const vfilterBip = filterBip.filter(
            (city) => city.company === "Vodafone"
        );
        const ttfilterBip = filterBip.filter(
            (city) => city.company === "Türk Telekom"
        );

        const resg = sum(filterG);
        const tresg = sum(tfilterG);
        const vresg = sum(vfilterG);
        const ttresg = sum(ttfilterG);

        const resl = sum(filterLTE);
        const tresl = sum(tfilterLTE);
        const vresl = sum(vfilterLTE);
        const ttresl = sum(ttfilterLTE);

        const resd = sum(filterDual);
        const tresd = sum(tfilterDual);
        const vresd = sum(vfilterDual);
        const ttresd = sum(ttfilterDual);

        const resb = sum(filterBip);
        const tresb = sum(tfilterBip);
        const vresb = sum(vfilterBip);
        const ttresb = sum(ttfilterBip);

        setTurkeyTurkcell({
            lte: tresl,
            dual: tresd,
            bip: tresb,
            data3g: tresg,
        });
        setTurkeyVodafone({
            lte: vresl,
            dual: vresd,
            bip: vresb,
            data3g: vresg,
        });
        setTurkeyTT({
            lte: ttresl,
            dual: ttresd,
            bip: ttresb,
            data3g: ttresg,
        });
    };

    const getCity = (signals) => {
        const filterG = signals.filter((city) => city.name === "3G");
        const tfilterG = filterG.filter(
            (city) => city.company === "Turkcell"
        );
        const vfilterG = filterG.filter(
            (city) => city.company === "Vodafone"
        );
        const ttfilterG = filterG.filter(
            (city) => city.company === "Türk Telekom"
        );

        const filterLTE = signals.filter((city) => city.name === "LTE");
        const tfilterLTE = filterLTE.filter(
            (city) => city.company === "Turkcell"
        );
        const vfilterLTE = filterLTE.filter(
            (city) => city.company === "Vodafone"
        );
        const ttfilterLTE = filterLTE.filter(
            (city) => city.company === "Türk Telekom"
        );

        const filterDual = signals.filter((city) => city.name === "Dual");
        const tfilterDual = filterDual.filter(
            (city) => city.company === "Turkcell"
        );
        const vfilterDual = filterDual.filter(
            (city) => city.company === "Vodafone"
        );
        const ttfilterDual = filterDual.filter(
            (city) => city.company === "Türk Telekom"
        );

        const filterBip = signals.filter((city) => city.name === "Bip");
        const tfilterBip = filterBip.filter(
            (city) => city.company === "Turkcell"
        );
        const vfilterBip = filterBip.filter(
            (city) => city.company === "Vodafone"
        );
        const ttfilterBip = filterBip.filter(
            (city) => city.company === "Türk Telekom"
        );

        const resg = sum(filterG);
        const tresg = sum(tfilterG);
        const vresg = sum(vfilterG);
        const ttresg = sum(ttfilterG);

        const resl = sum(filterLTE);
        const tresl = sum(tfilterLTE);
        const vresl = sum(vfilterLTE);
        const ttresl = sum(ttfilterLTE);

        const resd = sum(filterDual);
        const tresd = sum(tfilterDual);
        const vresd = sum(vfilterDual);
        const ttresd = sum(ttfilterDual);

        const resb = sum(filterBip);
        const tresb = sum(tfilterBip);
        const vresb = sum(vfilterBip);
        const ttresb = sum(ttfilterBip);

        setTurkcell({
            lte: tresl,
            dual: tresd,
            bip: tresb,
            data3g: tresg,
        });
        setVodafone({
            lte: vresl,
            dual: vresd,
            bip: vresb,
            data3g: vresg,
        });
        setTT({
            lte: ttresl,
            dual: ttresd,
            bip: ttresb,
            data3g: ttresg,
        });
    };

    return (
        <div className="homescreen">
            <div>
                <h2 className="homescreen__title">{select}</h2>
                <div className="form__item">
                    <p>İl:</p>
                    <select onChange={(e) => setSelect(e.target.value)}>
                        <option selected></option>
                        {sehir.map((sehir) => {
                            return (
                                <option value={sehir.il} key={sehir.plaka}>
                                    {sehir.il}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </div>
            <div className="homescreen__charts">
                <div className="homescreen__chart">
                    <BarChart
                        city="Türkiye Geneli"
                        turkcell={turkeyTurkcell}
                        vodafone={turkeyVodafone}
                        tt={TurkeyTT}
                    />
                </div>
                <div className="homescreen__chart">
                    <BarChart
                        turkcell={turkcell}
                        vodafone={vodafone}
                        tt={tt}
                        city={select}
                    />
                </div>
                <div className="homescreen__chart">
                    <LineChart
                        turkcell={turkcell}
                        vodafone={vodafone}
                        tt={tt}
                        city={select}
                    />
                </div>
                <div className="homescreen__chart">
                    <PieChart
                        turkcell={turkcell.data3g}
                        vodafone={vodafone.data3g}
                        tt={tt.data3g}
                        city={select}
                        name="3G "
                    />
                </div>
                <div className="homescreen__chart">
                    <PieChart
                        turkcell={turkcell.lte}
                        vodafone={vodafone.lte}
                        tt={tt.lte}
                        city={select}
                        name="LTE "
                    />
                </div>
                <div className="homescreen__chart">
                    <PieChart
                        turkcell={turkcell.dual}
                        vodafone={vodafone.dual}
                        tt={tt.dual}
                        city={select}
                        name="Dual "
                    />
                </div>
            </div>
        </div>
    );
};

export default HomeScreen;
