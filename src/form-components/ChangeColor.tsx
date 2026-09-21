import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
    "pink",
    "brown",
];

export function ChangeColor(): React.JSX.Element {
    const [chosenColor, setChosenColor] = useState<string>(COLORS[0]);

    return (
        <div>
            <h3>Change Color</h3>

            {COLORS.map((color: string) => (
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    id={`color-${color}`}
                    label={color}
                    value={color}
                    checked={chosenColor === color}
                    onChange={(event) => {
                        setChosenColor(event.target.value);
                    }}
                    key={color}
                />
            ))}

            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: chosenColor,
                }}
            >
                {chosenColor}
            </div>
        </div>
    );
}
