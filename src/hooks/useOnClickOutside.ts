import { useEffect, type RefObject } from "react";

type Handler = (event: MouseEvent) => void;

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
  mouseEvent: "mousedown" | "mouseup" = "mousedown"
): void => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const el = ref?.current;
      // Do nothing if clicking ref's element or descendent elements
      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }

      // Call the handler only if the click is outside of the element passed.
      handler(event);
    };

    document.addEventListener(mouseEvent, listener);

    return () => {
      document.removeEventListener(mouseEvent, listener);
    };
  }, [ref, handler, mouseEvent]);
};
