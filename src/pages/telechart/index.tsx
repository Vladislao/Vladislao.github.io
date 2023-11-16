import { useEffect, useRef, useState } from "react";
import cn from "classnames";
import Head from "next/head";
import telechart from "telechart";

import cl from "./index.module.scss";

const fetchData = function (path: string) {
  return fetch("/data/telechart/" + path).then(function (response) {
    return response.json();
  });
};

// Compose your DOM tree as you like
const customMount = (target: Element, name: string, hintText: string) => {
  return (components: any) => {
    target.classList.add("tc-wrapper");

    const headerWrapper = document.createElement("div");
    headerWrapper.className = cl.chart__header;

    const header = document.createElement("h3");
    header.appendChild(document.createTextNode(name));
    headerWrapper.appendChild(header);
    headerWrapper.appendChild(components.range);

    target.appendChild(headerWrapper);
    target.appendChild(components.view);
    if (hintText) {
      const hint = document.createElement("div");
      hint.className = cl.hint;
      hint.appendChild(document.createTextNode(hintText));
      target.appendChild(hint);
    }
    target.appendChild(components.preview);
    if (components.controls) target.appendChild(components.controls);
  };
};

// Some common theme settings
const setCommonTheme = (day: boolean, engine: any, state: any) => {
  state.window.mask.color.hex = day ? "#E2EEF9" : "#304259";
  state.window.mask.color.alpha = 0.6;
  state.window.tracker.color.hex = day ? "#C0D1E1" : "#56626D";
  state.window.tracker.color.alpha = 1;
  state.tooltip.color.hex = day ? "#182D3B" : "#FFFFFF";
  state.tooltip.color.alpha = 0.1;
  state.tooltip.lighten = day ? true : false;
  state.grid.color.hex = day ? "#182D3B" : "#FFFFFF";
  state.grid.color.alpha = 0.1;
};

const setLineTheme = (day: boolean, engine: any, state: any) => {
  state.axis.x.color.hex = day ? "#8E8E93" : "#A3B1C2";
  state.axis.x.color.alpha = day ? 1 : 0.6;
  state.axis.y.color.hex = day ? "#8E8E93" : "#A3B1C2";
  state.axis.y.color.alpha = day ? 1 : 0.6;
};

const setBarTheme = (day: boolean, engine: any, state: any) => {
  state.axis.x.color.hex = day ? "#252529" : "#A3B1C2";
  state.axis.x.color.alpha = day ? 0.5 : 0.6;
  state.axis.y.color.hex = day ? "#252529" : "#ECF2F8";
  state.axis.y.color.alpha = 0.5;
};

export default function Telechart() {
  const [day, setDay] = useState(false);
  const initialized = useRef<boolean>(false);
  const listeners = useRef<((day: boolean) => void)[]>([]);

  useEffect(() => {
    if (initialized.current) return;

    fetchData("1/overview.json").then(function (json) {
      const setTheme = (day: boolean) => (engine: any, state: any) => {
        setCommonTheme(day, engine, state);
        setLineTheme(day, engine, state);
      };

      const target = document.getElementById("chart1");
      if (!target) return;

      const controller = telechart(json)
        .update(setTheme(false))
        .mount(customMount(target, "Followers", "Try to doubleclick scroller"));

      listeners.current.push(function (day) {
        controller.update(setTheme(day)).render(true, true);
      });
    });

    fetchData("2/overview.json").then(function (json) {
      const setTheme = (day: boolean) => (engine: any, state: any) => {
        setCommonTheme(day, engine, state);
        setLineTheme(day, engine, state);
      };

      const target = document.getElementById("chart2");
      if (!target) return;

      const controller = telechart(json)
        .update(setTheme(false))
        .mount(customMount(target, "Interactions", "2 lines 2 Y axes"));

      listeners.current.push(function (day) {
        controller.update(setTheme(day)).render(true, true);
      });
    });

    fetchData("3/overview.json").then(function (json) {
      const setTheme = (day: boolean) => (engine: any, state: any) => {
        setCommonTheme(day, engine, state);
        setBarTheme(day, engine, state);
      };

      const target = document.getElementById("chart3");
      if (!target) return;

      const controller = telechart(json)
        .update(setTheme(false))
        .mount(
          customMount(
            target,
            "Messages",
            "Find a way to check \\ uncheck all other filters"
          )
        );

      listeners.current.push(function (day) {
        controller.update(setTheme(day)).render(true, true);
      });
    });

    fetchData("4/overview.json").then(function (json) {
      const setTheme = (day: boolean) => (engine: any, state: any) => {
        setCommonTheme(day, engine, state);
        setBarTheme(day, engine, state);
      };

      const target = document.getElementById("chart4");
      if (!target) return;

      const controller = telechart(json)
        .update(setTheme(false))
        .mount(
          customMount(
            target,
            "Views",
            "Lowest visible value is increased so you can see it as a tiny bar"
          )
        );

      listeners.current.push(function (day) {
        controller.update(setTheme(day)).render(true, true);
      });
    });

    fetchData("5/overview.json").then(function (json) {
      const setTheme = (day: boolean) => (engine: any, state: any) => {
        setCommonTheme(day, engine, state);
        setBarTheme(day, engine, state);
      };

      const target = document.getElementById("chart5");
      if (!target) return;

      const controller = telechart(json)
        .update(setTheme(false))
        .mount(customMount(target, "Apps", "No pie chart unfortunately"));

      listeners.current.push(function (day) {
        controller.update(setTheme(day)).render(true, true);
      });
    });

    initialized.current = true;
  }, []);

  const handleDayToggle = () => {
    setDay((state) => {
      listeners.current.forEach((v) => v(!state));
      return !state;
    });
  };

  return (
    <>
      <Head>
        <title>Telechart Demo</title>
        <meta name="description" content="" />
      </Head>
      <main className={cn(cl.container, { [cl.container_dark]: !day })}>
        <h2>telechart.js</h2>
        <h3>
          Made for Stage 2 of the Telegram&apos;s Chart Coding Competition
        </h3>
        <div id="chart1" className={cl.chart}></div>
        <div id="chart2" className={cl.chart}></div>
        <div id="chart3" className={cl.chart}></div>
        <div id="chart4" className={cl.chart}></div>
        <div id="chart5" className={cl.chart}></div>
        <div className={cl.switch} onClick={handleDayToggle}>
          Switch to {day ? "Night" : "Day"} Mode
        </div>
        <footer>
          <div>
            By <a href="https://github.com/vladislao">Vladislav Stroev</a>
          </div>
          <a href="https://github.com/vladislao/telechart">sources</a>
        </footer>
      </main>
    </>
  );
}
