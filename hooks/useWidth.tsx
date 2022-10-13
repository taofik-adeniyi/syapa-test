import React, { useEffect, useState, useMemo, useCallback } from "react";

const useWidth = () => {
  const [width, setWidth] = useState(0);

  const onresize = useCallback(() => {
    //your code here
    //this is just an example
    let width = document.body.clientWidth;
    let height = document.body.clientHeight;
    setWidth(width);
  }, [width]);

  useEffect(() => {
    const width = window.innerWidth;
    window.addEventListener("resize", onresize);
    setWidth(width);
    // console.log('what is width: ', width);
  }, [width]);
  return [width];
};

export default useWidth;
