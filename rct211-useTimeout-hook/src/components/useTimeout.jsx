import { useEffect, useState } from "react";

const useTimeout = (delay) => {

  const [ready, setready] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => {
      setready(true);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay]);

  return ready;
};

export default useTimeout;
