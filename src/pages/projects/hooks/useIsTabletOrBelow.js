import { useEffect, useState } from "react";

export const useIsTabletOrBelow = () => {
  const [isTabletOrBelow, setIsTabletOrBelow] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth <= 986;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setIsTabletOrBelow(window.innerWidth <= 986);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isTabletOrBelow;
};

