import { RefObject, useEffect } from "react";

export default function useOnClickOutside(
  isActive: boolean,
  refs: RefObject<Element | null>[],
  handler: (event: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    if (!isActive) return;

    const listener = (event: MouseEvent | TouchEvent) => {
      // Do nothing if clicking ref's element or descendent elements
      if (
        refs.some((v) => !v.current || v.current.contains(event.target as Node))
      ) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [isActive, refs, handler]);
}
