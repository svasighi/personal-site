import { RefObject } from "react";

export const handleWheelScroll = (
  event: WheelEvent,
  scrollableRef: RefObject<HTMLDivElement>,
) => {
  scrollableRef &&
    scrollableRef.current &&
    (scrollableRef.current.scrollTop += event.deltaY / 7);
};
export const handleKeyboardScroll = (
  event: KeyboardEvent,
  scrollableRef: RefObject<HTMLDivElement>,
) => {
  switch (event.keyCode) {
    case 38:
      // pressed up arrow
      scrollableRef &&
        scrollableRef.current &&
        (scrollableRef.current.scrollTop -= 20);
      break;
    case 40:
      // pressed down arrow
      scrollableRef &&
        scrollableRef.current &&
        (scrollableRef.current.scrollTop += 20);
      break;
  }
};
