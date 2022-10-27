import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
  return (
    <div>
       <button className='block w-48 rounded-md bg-red-500 mx-auto mt-5 h-10 text-white font-bold text-xl'>Download </button>
      <p className="text-3xl text-green-800 font-bold mt-2">{course.name}</p>
      <img className="w-7/12 mx-auto  mt-7 mb-3" src={course.img} alt="" />
      <p className="text-lg text-emerald-800 mb-11 font-medium mt-2 w-10/12 mx-auto text-justify">
        {course.information}
      </p>
      
    </div>
  );
};

export default CourseDetails;
