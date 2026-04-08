//required custom hook

import { useEffect, useState } from "react";
import { z } from "zod";

export function useLocalStorage<T>(
  key: string,
  schema: z.ZodSchema<T>,
  defaultValue: T,
) {
    const [data, setData] = useState<T>(() => {
        try {
            const saved = localStorage.getItem(key);
            if (saved === null) return defaultValue;

            const parsed = JSON.parse(saved);
            return schema.parse(parsed);
        } catch (error) {
            console.error(`Error parsing localStorage key "${key}":`, error);
            return defaultValue;
        }
    });
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(data));
    }, [key, data]);

    return [data, setData] as const;
};
