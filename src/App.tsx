import React from "react";
import type { JSX } from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

export function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>CISC275</h1>
            </header>
            <hr />
            <Counter />
            <hr />
            <RevealAnswer />
            <hr />
            <ChangeType />
            <hr />
            <StartAttempt />
            <hr />
            <TwoDice />
            <hr />
            <CycleHoliday />
        </div>
    );
}

export default App;
