import  { ReactNode, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import useWindowSize from "../../responsive/useWindowSize";

type Props = {
    children: ReactNode;
};

const SmoothScroll = ({ children } : Props) => {
  const windowSize = useWindowSize();

  const scrollingContainerRef = useRef<HTMLDivElement>(null);

  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    setBodyHeight();
  }, [windowSize.height]);

  const setBodyHeight = () => {
    document.body.style.height = `${scrollingContainerRef.current?.getBoundingClientRect().height}px`;
  };

  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler());
  }, []);

  const smoothScrollingHandler = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;

    if (scrollingContainerRef.current) {
      scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;
    }

    requestAnimationFrame(() => smoothScrollingHandler());
  };

  return (
    <Box sx={{
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position:"fixed"
        }}>
      <Box ref={scrollingContainerRef}>{children}</Box>
    </Box>
  );
};

export default SmoothScroll;
