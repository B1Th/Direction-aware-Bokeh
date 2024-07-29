"use client";

import { useEffect } from "react";
import { Bokeh1Background } from "threejs-components";
import * as THREE from "three";

const BokehBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById("webgl-canvas");
    const bokeh1Background = Bokeh1Background(canvas);
    bokeh1Background.loadMap(
      "https://cdn.jsdelivr.net/npm/threejs-components@0.0.2/build/assets/bokeh-particles2.png"
    );
    bokeh1Background.setColors([0x6d4862, 0xfd826c, 0x22ccc1]);

    const handleBodyClick = () => {
      bokeh1Background.setColors([
        0xffffff * Math.random(),
        0xffffff * Math.random(),
        0xffffff * Math.random(),
      ]);
    };

    document.body.addEventListener("click", handleBodyClick);

    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);

  return <canvas id="webgl-canvas"></canvas>;
};

export default BokehBackground;
