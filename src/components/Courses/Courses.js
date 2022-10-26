import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Course from "../Course/Course";
import './Courses.css'

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="grid grid-cols-3 w-9/12 gap-9 mx-5 mt-5">
      {courses.map((course) => 
       <Course 
       key={course.id}
       course={course}
       ></Course>
      )}
    </div>
  );
};

export default Courses;
