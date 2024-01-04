/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./index.css";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const TourApp = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  async function fetchData() {
    setLoading(true);
    try {
      await fetch(url)
        .then((res) => res.json())
        .then((tours) => {
          //   console.log(tours);
          setLoading(false);
          setTours(tours);
        });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <div className="title">
        <h2>No Tours Left!</h2>
        <button
          className="btn"
          onClick={() => {
            fetchData();
          }}
        >
          Refresh
        </button>
      </div>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default TourApp;
