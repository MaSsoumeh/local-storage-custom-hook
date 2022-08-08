import { useEffect, useState } from "react";

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
      return initialValue;
    }
  });
  useEffect(() => {
    window.localStorage.setItem(key, serialize(state));
  }, [state, key, serialize]);
  return [state, setState];
};
