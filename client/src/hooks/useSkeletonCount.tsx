import { useEffect, useState } from "react";

const getSkeletonCount = () => {
  const width = window.innerWidth;

  if (width >= 1280) return 4; // xl
  if (width >= 1024) return 3; // lg
  if (width >= 768) return 2; // md
  // if (width >= 640) return 1;  // sm
  return 1;                    // mobile
};

export const useSkeletonCount = () => {
  const [count, setCount] = useState(getSkeletonCount());

  useEffect(() => {
    const handleResize = () => setCount(getSkeletonCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return count;
};