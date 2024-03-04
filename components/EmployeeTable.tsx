"use client";
import React, { useState, useEffect } from "react";
import UpdateModal from "./UpdateModal";
import { Employee } from "../types/employee";

const EmployeeTable = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch("/employees.json");
      const data = await response.json();
      setEmployees(data.employees);
    };

    fetchEmployees();
  }, []);

  const handleUpdateClick = (employee: Employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  const saveEmployee = (updatedEmployee: Employee) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((emp) =>
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      )
    );
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-sm divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left font-semibold text-gray-900">
                ID
              </th>
              <th className="px-6 py-3 text-left font-semibold text-gray-900">
                Name
              </th>
              <th className="px-6 py-3 text-left font-semibold text-gray-900">
                Email
              </th>
              <th className="px-6 py-3 text-left font-semibold text-gray-900">
                Status
              </th>
              <th className="px-6 py-3 text-left font-semibold text-gray-900">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {employees.map((employee) => (
              <tr key={employee.id} className="hover:bg-gray-50">
                <td className="px-6 text-black py-4">{employee.id}</td>
                <td className="px-6 text-black py-4">{employee.name}</td>
                <td className="px-6 text-black py-4">{employee.email}</td>
                <td className="px-6 text-black py-4">
                  {employee.isActive ? "ACTIVE" : "DEACTIVATED"}
                </td>
                <td className="px-6 py-4">
                  {employee.isActive && (
                    <button
                      onClick={() => handleUpdateClick(employee)}
                      className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
                    >
                      Update
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <UpdateModal
          employee={selectedEmployee}
          closeModal={() => setIsModalOpen(false)}
          saveEmployee={saveEmployee}
        />
      )}
    </>
  );
};

export default EmployeeTable;
