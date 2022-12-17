import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function TypedText() {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["programs", "websites", "Discord bots"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 0,
      typeSpeed: 100,
      backSpeed: 30,
      backDelay: 2000,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      
      {/* Element to display typing strings */}
      
      <span ref={el} className="typed-text"></span>
    </div>
  );
}