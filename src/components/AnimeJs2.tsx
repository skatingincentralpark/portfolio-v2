"use client";

import anime from "animejs";
import { useEffect, useRef } from "react";

const AnimeJs2 = ({ className }: { className?: string }) => {
  const polymorph = useRef<SVGPolygonElement | null>(null);

  useEffect(() => {
    anime({
      targets: polymorph.current,
      points: [
        {
          value: [
            "70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369",
            "70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369",
          ],
        },
        {
          value:
            "70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369",
        },
        {
          value:
            "70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369",
        },
        {
          value:
            "70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369",
        },
      ],
      easing: "easeOutQuad",
      duration: 2000,
      loop: true,
    });
  }, []);

  return (
    <svg width="140" height="140" viewBox="0 0 140 140" className={className}>
      <g fill="none" fillRule="evenodd">
        <g fill="purple" fillOpacity=".15" transform="translate(0 6)">
          <polygon points="70 0 136.574 48.369 111.145 126.631 28.855 126.631 3.426 48.369"></polygon>
          <polygon points="70 18 119.455 53.931 100.565 112.069 39.435 112.069 20.545 53.931"></polygon>
          <polygon points="70 34.86 101.727 57.911 89.609 95.209 50.391 95.209 38.273 57.911"></polygon>
          <polygon points="70 50.898 84.864 61.697 79.186 79.171 60.814 79.171 55.136 61.697"></polygon>
        </g>
        <polygon
          ref={polymorph}
          strokeWidth="1"
          stroke="purple"
          points="70 48.14144112209921 133.62114704069975 55.411183397400094 91.05566956190017 103.58385295930026 30.765669561900168 130.02554150649976 41.37885295930026 65.06378893160006 "
        ></polygon>
      </g>
    </svg>
  );
};
export default AnimeJs2;
