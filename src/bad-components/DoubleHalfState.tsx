import { useState, Dispatch, SetStateAction } from "react";

export function useDhState(): {
    dhValue: number;
    setDhValue: Dispatch<SetStateAction<number>>;
} {
    const [dhValue, setDhValue] = useState<number>(10);
    return { dhValue, setDhValue };
}
