import { useEffect, useRef } from "react";

/**
 *
 * @param any Value that need to be tracked
 * @returns Returns the previous value before update.
 */
function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

export default usePrevious;
