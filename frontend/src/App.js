import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Screens
import HomeScreen from "./screens/HomeScreen";
import NewScreen from "./screens/NewScreen";
import SignalsScreen from "./screens/SignalsScreen";

//Conponents
import Navbar from "./components/Navbar";

function App() {
    return (
        <Router>
            {/* Navbar */}
            <Navbar />
            <main>
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route
                        exact
                        path="/signals"
                        component={SignalsScreen}
                    />
                    <Route exact path="/new" component={NewScreen} />
                </Switch>
            </main>

            {/* HomeScreen */}
            {/* RecentlyScreen */}
            {/* DataScreen */}
        </Router>
    );
}

export default App;
