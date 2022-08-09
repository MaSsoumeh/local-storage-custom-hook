import { useEffect, useRef, useState } from "react";

export const useLocalStorage = (
  key,
  initialValue = "",
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) => {
  const [state, setState] = useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      return deserialize(valueInLocalStorage);
    } else {
      return typeof initialValue === "function" ? initialValue() : initialValue;
    }
  });
  const prevKeyRef = useRef(key);
  useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    window.localStorage.setItem(key, serialize(state));
  }, [state, key, serialize]);
  return [state, setState];
};
