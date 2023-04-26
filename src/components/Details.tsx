import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import DetailContainer from "./DetailContainer";

export default function Details() {
  const { id } = useParams();
  const navigation = useNavigate();
  const goBack = () => {
    navigation(-1);
  };

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
  const detail = results.filter((value) => value[0] === id);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-9 col-sm-12  mx-auto mt-5 mb-4">
            <div className="container bg-primary text-white">
              <div className="row">
                <div className="col-sm-8 p-3">
                  <h2 className="pb-1">{detail?.[0]?.[0]}</h2>
                  <p className=" fs-5">by {detail?.[0]?.[1]?.[0].brand}</p>
                </div>
              </div>
            </div>
            <div className="container bg-light ">
              <h2 className="text-center p-3">Market Prices</h2>
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {detail?.[0]?.[1].map((item) => {
                  return (
                    <DetailContainer
                      price={item.prices[0].price}
                      amount={item.prices[0].amount}
                      link={item.prices[0].link}
                      currency={item.currency}
                      unit={item.prices[0].unit}
                    />
                  );
                })}
              </div>
              <div className="d-flex justify-content-center  p-5 ">
                <Button onClick={goBack} variant="primary">
                  Go Back
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
