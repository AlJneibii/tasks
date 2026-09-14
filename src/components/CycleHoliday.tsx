import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "newYear" | "Valentines" | "Eid" | "Halloween" | "Christmas";

const HOLIDAY_EMOJI: Record<Holiday, string> = {
    newYear: "🎆",
    Valentines: "🌹",
    Eid: "🌙",
    Halloween: "🎃",
    Christmas: "🎄",
};

const ALPHABET_ORDER: Record<Holiday, Holiday> = {
    Christmas: "Eid",
    Eid: "Halloween",
    Halloween: "newYear",
    newYear: "Valentines",
    Valentines: "Christmas",
};

const YEAR_ORDER: Record<Holiday, Holiday> = {
    newYear: "Valentines",
    Valentines: "Eid",
    Eid: "Halloween",
    Halloween: "Christmas",
    Christmas: "newYear",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("newYear");

    return (
        <div>
            <span>Holiday: {HOLIDAY_EMOJI[holiday]}</span>

            <Button
                onClick={() => {
                    setHoliday(ALPHABET_ORDER[holiday]);
                }}
            >
                Advance by Alphabet
            </Button>

            <Button
                onClick={() => {
                    setHoliday(YEAR_ORDER[holiday]);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
