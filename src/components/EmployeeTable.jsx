import React from "react";

const EmployeeTable = ({ employees, currentPage, totalPages, handlePrev, handleNext }) => {
  return (
    <div>
      <h2>Employee Data Table</h2>
      <table border="1" width="100%">
        <thead>
          <tr style={{ backgroundColor: "#008066", color: "white" }}>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.role}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>No data available</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div style={{ marginTop: "10px", textAlign: "center" }}>
        <button 
          onClick={handlePrev} 
          disabled={currentPage === 1}
          style={{ marginRight: "10px" }}
        >
          Previous
        </button>
        <span> Page {currentPage} of {totalPages} </span>
        <button 
          onClick={handleNext} 
          disabled={currentPage === totalPages}
          style={{ marginLeft: "10px" }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EmployeeTable;
