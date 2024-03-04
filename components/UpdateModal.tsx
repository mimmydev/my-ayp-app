import React, { useState } from "react";
import { Employee } from "../types/employee";

type UpdateModalProps = {
  employee: Employee | null;
  saveEmployee: (updatedEmployee: Employee) => void;
  closeModal: () => void;
};

const UpdateModal: React.FC<UpdateModalProps> = ({
  employee,
  closeModal,
  saveEmployee,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isActive, setIsActive] = useState(employee!.isActive);

  React.useEffect(() => {
    if (employee) {
      setName(employee.name);
      setEmail(employee.email);
      setIsActive(employee.isActive);
    }
  }, [employee]);

  if (!employee) return null;

  const handleSave = () => {
    if (employee) {
      const updatedEmployee = {
        ...employee,
        name,
        email,
        isActive,
      };
      saveEmployee(updatedEmployee);
      closeModal();
    }
  };
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700  min-w-[20vw]">
        <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Update Employee
          </h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={closeModal}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM7.707 7.707a1 1 0 111.414-1.414L10 8.586l1.293-1.293a1 1 0 111.414 1.414L11.414 10l1.293 1.293a1 1 0 01-1.414 1.414L10 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L8.586 10 7.293 8.707z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="p-6 space-y-6">
          <label
            htmlFor="name"
            className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            defaultValue={employee.name}
            onChange={(e) => setName(e.target.value)}
          />

          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            defaultValue={employee.email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label
            htmlFor="toggle"
            className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
          >
            Status:
          </label>
          <input
            type="checkbox"
            id="toggle"
            className="focus:ring-blue-500 h-6 w-11 rounded-full bg-gray-200"
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
          />

          <div className="flex justify-end pt-2 space-x-3">
            <button
              type="button"
              className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              type="button"
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
