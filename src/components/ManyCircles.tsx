"use client";

import anime from "animejs";
import { useEffect, useRef } from "react";

const ManyCircles = ({ className }: { className?: string }) => {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    anime({
      targets: ref.current?.querySelectorAll("circle, path"),
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 700,
      delay: function (el, i) {
        return i * 50;
      },
      direction: "alternate",
      loop: true,
      scale: [
        { value: 0.9, easing: "easeOutSine", duration: 500 },
        { value: 1, easing: "easeInOutQuad", duration: 1200 },
      ],
    });
  }, []);

  const cls1 = "stroke-pink-500 fill-none";
  const cls2 = "stroke-lime-400 fill-none";

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 736.46 496.53"
      className={className}
    >
      <g id="Layer_1-2">
        <g>
          <g>
            <g>
              <circle className={cls2} cx="335.18" cy="248.26" r="247.76" />
              <circle className={cls2} cx="296.49" cy="248.26" r="219.26" />
              <circle className={cls2} cx="262.25" cy="248.26" r="194.04" />
              <circle className={cls2} cx="231.94" cy="248.26" r="171.71" />
              <circle className={cls2} cx="205.13" cy="248.26" r="151.96" />
              <circle className={cls2} cx="181.39" cy="248.26" r="134.48" />
              <circle className={cls2} cx="160.39" cy="248.26" r="119.01" />
              <circle className={cls2} cx="141.81" cy="248.26" r="105.31" />
              <circle className={cls2} cx="125.36" cy="248.26" r="93.2" />
              <circle className={cls2} cx="110.8" cy="248.26" r="82.48" />
              <circle className={cls2} cx="97.92" cy="248.26" r="72.99" />
            </g>
            <g>
              <circle className={cls2} cx="425.71" cy="248.26" r="247.76" />
              <path
                className={cls2}
                d="M683.66,248.26c0,121.09-98.17,219.26-219.26,219.26-121.09,0-219.26-98.17-219.26-219.26,0-121.09,98.17-219.26,219.26-219.26s219.26,98.17,219.26,219.26Z"
              />
              <path
                className={cls2}
                d="M692.68,248.26c0,107.16-86.87,194.04-194.04,194.04-107.16,0-194.04-86.87-194.04-194.04,0-107.16,86.87-194.04,194.04-194.04s194.04,86.87,194.04,194.04Z"
              />
              <path
                className={cls2}
                d="M700.66,248.26c0,94.83-76.88,171.71-171.71,171.71-94.83,0-171.71-76.88-171.71-171.71,0-94.83,76.88-171.71,171.71-171.71,94.83,0,171.71,76.88,171.71,171.71Z"
              />
              <path
                className={cls2}
                d="M707.72,248.26c0,83.92-68.03,151.96-151.96,151.96-83.92,0-151.96-68.03-151.96-151.96,0-83.92,68.03-151.96,151.96-151.96,83.92,0,151.96,68.03,151.96,151.96Z"
              />
              <circle className={cls2} cx="579.5" cy="248.26" r="134.48" />
              <path
                className={cls2}
                d="M719.5,248.26c0,65.72-53.28,119.01-119.01,119.01-65.72,0-119.01-53.28-119.01-119.01s53.28-119.01,119.01-119.01,119.01,53.28,119.01,119.01Z"
              />
              <path
                className={cls2}
                d="M724.4,248.26c0,58.16-47.15,105.31-105.31,105.31-58.16,0-105.31-47.15-105.31-105.31,0-58.16,47.15-105.31,105.31-105.31s105.31,47.15,105.31,105.31Z"
              />
              <circle className={cls2} cx="635.53" cy="248.26" r="93.2" />
              <circle className={cls2} cx="650.09" cy="248.26" r="82.48" />
              <circle className={cls2} cx="662.97" cy="248.26" r="72.99" />
            </g>
          </g>
          <g>
            <g>
              <circle className={cls1} cx="310.75" cy="248.26" r="247.76" />
              <circle className={cls1} cx="272.05" cy="248.26" r="219.26" />
              <circle className={cls1} cx="237.81" cy="248.26" r="194.04" />
              <circle className={cls1} cx="207.51" cy="248.26" r="171.71" />
              <circle className={cls1} cx="180.69" cy="248.26" r="151.96" />
              <circle className={cls1} cx="156.96" cy="248.26" r="134.48" />
              <circle className={cls1} cx="135.96" cy="248.26" r="119.01" />
              <circle className={cls1} cx="117.37" cy="248.26" r="105.31" />
              <circle className={cls1} cx="100.92" cy="248.26" r="93.2" />
              <circle className={cls1} cx="86.37" cy="248.26" r="82.48" />
              <circle className={cls1} cx="73.49" cy="248.26" r="72.99" />
            </g>
            <g>
              <circle className={cls1} cx="401.27" cy="248.26" r="247.76" />
              <path
                className={cls1}
                d="M659.23,248.26c0,121.09-98.17,219.26-219.26,219.26-121.09,0-219.26-98.17-219.26-219.26,0-121.09,98.17-219.26,219.26-219.26s219.26,98.17,219.26,219.26Z"
              />
              <path
                className={cls1}
                d="M668.25,248.26c0,107.16-86.87,194.04-194.04,194.04-107.16,0-194.04-86.87-194.04-194.04,0-107.16,86.87-194.04,194.04-194.04s194.04,86.87,194.04,194.04Z"
              />
              <path
                className={cls1}
                d="M676.23,248.26c0,94.83-76.88,171.71-171.71,171.71-94.83,0-171.71-76.88-171.71-171.71,0-94.83,76.88-171.71,171.71-171.71,94.83,0,171.71,76.88,171.71,171.71Z"
              />
              <path
                className={cls1}
                d="M683.29,248.26c0,83.92-68.03,151.96-151.96,151.96-83.92,0-151.96-68.03-151.96-151.96s68.03-151.96,151.96-151.96c83.92,0,151.96,68.03,151.96,151.96Z"
              />
              <circle className={cls1} cx="555.06" cy="248.26" r="134.48" />
              <path
                className={cls1}
                d="M695.07,248.26c0,65.72-53.28,119.01-119.01,119.01-65.72,0-119.01-53.28-119.01-119.01,0-65.72,53.28-119.01,119.01-119.01s119.01,53.28,119.01,119.01Z"
              />
              <path
                className={cls1}
                d="M699.96,248.26c0,58.16-47.15,105.31-105.31,105.31-58.16,0-105.31-47.15-105.31-105.31,0-58.16,47.15-105.31,105.31-105.31s105.31,47.15,105.31,105.31Z"
              />
              <circle className={cls1} cx="611.1" cy="248.26" r="93.2" />
              <circle className={cls1} cx="625.65" cy="248.26" r="82.48" />
              <circle className={cls1} cx="638.53" cy="248.26" r="72.99" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
export default ManyCircles;
