import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <img src={course.img} alt=" " />
          <p>{course.name}</p>
          <p>{course.views}</p>
          <Link to={`/course/${course.id}`}>{course.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
