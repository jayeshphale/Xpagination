import React from "react";

const EmployeeTable = ({ employees, currentPage, totalPages, handlePrev, handleNext, handleFirst, handleLast }) => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Employee Data Table</h2>

      {/* Employee Table */}
      <table 
        border="1" 
        width="100%" 
        style={{ borderCollapse: "collapse", textAlign: "left" }}
      >
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
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
          onClick={handleFirst} 
          disabled={currentPage === 1}
          style={{ marginRight: "10px" }}
          aria-label="Go to first page"
        >
          First Page
        </button>

        <button 
          onClick={handlePrev} 
          disabled={currentPage === 1}
          style={{ marginRight: "10px" }}
          aria-label="Go to previous page"
        >
          Previous
        </button>

        <span><strong> Page {currentPage} of {totalPages} </strong></span>

        <button 
          onClick={handleNext} 
          disabled={currentPage >= totalPages}
          style={{ marginLeft: "10px" }}
          aria-label="Go to next page"
        >
          Next
        </button>

        <button 
          onClick={handleLast} 
          disabled={currentPage >= totalPages}
          style={{ marginLeft: "10px" }}
          aria-label="Go to last page"
        >
          Last Page
        </button>
      </div>
    </div>
  );
};

export default EmployeeTable;
