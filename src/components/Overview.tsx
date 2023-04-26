// import data from "../data/data.json";
import Cell from "./Cell";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Overview() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("./data.json")
      .then((response) => setData(response.data))
      .catch(console.error);
  }, []);

  // from https://stackoverflow.com/questions/42136098/array-groupby-in-typescript

  const groupBy = <T, K extends keyof any>(arr: T[], key: (i: T) => K) =>
    arr.reduce((groups, item) => {
      (groups[key(item)] ||= []).push(item);
      return groups;
    }, {} as Record<K, T[]>);

  const object = groupBy(data, (i) => i.name);
  const results = Object.entries(object);

  return (
    <div>
      <h3 className="text-center mt-5">Overview</h3>
      <div className="grid mx-5">
        {results.map((item) => {
          return (
            <Cell
              id={item[0]}
              name={item[0]}
              brand={item[1][0].brand}
              category={item[1]}
            />
          );
        })}
      </div>
    </div>
  );
}
