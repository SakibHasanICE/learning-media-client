import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Course from "../Course/Course";
import "./Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="body-container w-11/12 mx-auto">
      <div className="card gap-9 mx-5 mt-5 ">
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
      <div className="border-slate-400 rounded-md border-2 mt-5" >
        {courses.map((course) => (
          <p className="text-sky-500 mb-4 mt-12 ">
            <Link to={`/course/${course.id}`}>{course.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Courses;
