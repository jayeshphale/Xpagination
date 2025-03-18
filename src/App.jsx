import React, { useState, useEffect } from "react";
import EmployeeTable from "./components/EmployeeTable";

const API_URL = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
const ITEMS_PER_PAGE = 10;

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);

  // Fetch employee data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        setError(error.message);
        alert("Failed to fetch data");
      }
    };
    fetchData();
  }, []);

  // Pagination Logic
  const totalPages = Math.ceil(employees.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = employees.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Handle Previous Button Click
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle Next Button Click
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      {error ? (
        <p style={{ color: "red", textAlign: "center" }}>Error: {error}</p>
      ) : (
        <EmployeeTable 
          employees={paginatedData} 
          currentPage={currentPage} 
          totalPages={totalPages}
          handlePrev={handlePrev} 
          handleNext={handleNext} 
        />
      )}
    </div>
  );
};

export default App;
