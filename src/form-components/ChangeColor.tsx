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
    "black",
];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(COLORS[0]);

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((choice: string) => (
                <Form.Check
                    inline
                    key={choice}
                    type="radio"
                    name="colors"
                    id={`color-${choice}`}
                    label={choice}
                    value={choice}
                    checked={color === choice}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setColor(event.target.value);
                    }}
                />
            ))}
            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                {color}
            </div>
        </div>
    );
}
