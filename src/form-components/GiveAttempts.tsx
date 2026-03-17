import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    function gainAttempts(): void {
        const amount = parseInt(requestedAttempts);
        if (!isNaN(amount)) {
            setAttemptsLeft(attemptsLeft + amount);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts Left: {attemptsLeft}</div>
            <Form.Group controlId="requested-attempts">
                <Form.Label>Requested Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setRequestedAttempts(event.target.value);
                    }}
                />
            </Form.Group>
            <button
                onClick={() => {
                    setAttemptsLeft(attemptsLeft - 1);
                }}
                disabled={attemptsLeft <= 0}
            >
                use
            </button>
            <button onClick={gainAttempts}>gain</button>
        </div>
    );
}
