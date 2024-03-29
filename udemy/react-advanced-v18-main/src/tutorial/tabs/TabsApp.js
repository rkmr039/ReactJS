import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import "./index.css";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function TabsApp() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setJobs(res);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  if (loading) {
    return (
      <section className="section-loading">
        <h2>loading...</h2>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      {/* button container */}
      <div className="btn-container">
        {jobs.map((job, index) => {
          return (
            <button
              key={index}
              onClick={() => setValue(index)}
              className={`job-btn ${index === value && "active-btn"}`}
            >
              {job.company}
            </button>
          );
        })}
      </div>
      {/* job info */}
      <article className="job-info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="job-date">{dates}</p>
        {duties.map((duty, index) => {
          return (
            <div className="job-desc" key={index}>
              <FaAngleDoubleRight className="job-icon" />
              <p>{duty}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
}

export default TabsApp;
