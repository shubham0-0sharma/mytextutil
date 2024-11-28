import "./App.css";
import AboutUs from "./Components/AboutUs";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    const [mode, setMode] = useState("light");
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type,
        });
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    };
    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            showAlert("dark mode has been enabled", "success");
            document.body.style.backgroundColor = "rgb(6 41 82)";
            document.title = "TextUtils - DarkMode";
            // setInterval(() => {
            //     document.title = "You have been Hacked";
            // }, 2000);
            // setInterval(() => {
            //     document.title = "Download to fix";
            // }, 1500);
        } else {
            setMode("light");
            document.body.style.backgroundColor = "white";
            showAlert("light mode has been enabled", "success");
            document.title = "TextUtils - LightMode";
        }
    };

    return (
        <>
            {/* <Navbar /> */}
            <Router>
                <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert} />
                <div className="container my-3">
                    <Switch>
                        <Route exact path="/">
                            <TextForm
                                showAlert={showAlert}
                                heading="Enter the text to analyze below"
                                mode={mode}
                            />
                        </Route>
                        <Route exact path="/about">
                            <AboutUs />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    );
}

export default App;
