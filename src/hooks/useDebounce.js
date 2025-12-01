import { useEffect, useState } from "react"

export const useDebounce = (value, time) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(()=>{
        const timeout = setTimeout(() => {
            setDebouncedValue(value)
        }, time);

        return () => {
            clearTimeout(timeout);
        };
    }, [value, time]);

    return debouncedValue;
}