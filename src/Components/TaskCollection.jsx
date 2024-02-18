import React from "react";
import { arrowLeft } from "@/Consonants";

function TaskCollection() {
  const tasks = [
    {
      title: "Create Mobile App design",
      type: "Ui/Ux",
      date: "2/18/2024",
      days: "15",
      img: "https://images.unsplash.com/photo-1575318634028-6a0cfcb60c59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww",
    },
    {
      title: "Write Backend API",
      type: "Backend",
      date: "2/20/2024",
      days: "10",
      img: "https://images.unsplash.com/photo-1523348833955-7f5f8d273a6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhY2tlbmR8ZW58MHx8MHw%3D",
    },
    {
      title: "Implement User Authentication",
      type: "Security",
      date: "2/25/2024",
      days: "7",
      img: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlci1hdXRoZW50aWNhdGlvbnxlbmdsaXNoMHx8MHw%3D",
    },
    {
      title: "Design Database Schema",
      type: "Database",
      date: "2/28/2024",
      days: "5",
      img: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YWJhc2VzJTIwc2NoZW1hfGVufDB8fDB8fHwxNjY5NjEwOTMz",
    },
    {
      title: "Frontend Development",
      type: "Frontend",
      date: "3/5/2024",
      days: "14",
      img: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJvbnRlbmR8ZW58MHx8MHw%3D",
    },
  ];

  return (
    <div className="flex flex-col justify-start items-start gap-7 w-full ">
      <div className="flex justify-between items-center w-full">
        <p className="font-pm font-bold text-[1.2rem]">Tasks</p>
        <div className="flex w-[5rem] justify-between items-center">
          {arrowLeft}
          <div className="scale-[-1]">{arrowLeft}</div>
        </div>
      </div>
    </div>
  );
}

export default TaskCollection;
