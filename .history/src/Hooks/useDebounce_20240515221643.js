import { useEffect, useState } from "react";

export default function useDebounce(initializeValue = "", delay = 1000) {
  const [queryDebounce, setQueryDebounce] = useState(initializeValue);
  useEffect(() => {
    setTimeout(() => {
      setQueryDebounce(initializeValue);
    }, delay);
  }, [delay, initializeValue]);
  return queryDebounce;
}
