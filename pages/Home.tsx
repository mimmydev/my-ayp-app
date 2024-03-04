import React from "react";
import EmployeeTable from "../components/EmployeeTable";
import "@/app/globals.css";
const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">Employee List</h1>
      <EmployeeTable />
    </div>
  );
};

export default Home;
