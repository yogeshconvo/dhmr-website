import React from "react";
import axios from "axios";

const downloadAssignment = async (id) => {
  try {
    const response = await axios.get(`/assignments/${id}/download`, {
      responseType: "blob",
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;

    link.setAttribute("download", `assignment-${id}.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();

    alert("Assignment downloaded successfully!");
  } catch (error) {
    console.error("Download failed:", error);
    alert("Failed to download the assignment. Please try again.");
  }
};

const AssignmentDownloadButton = ({ assignmentId }) => {
  return (
    <div className="flex justify-center py-6">
      <button
        onClick={() => downloadAssignment(assignmentId)}
        className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition"
      >
        Download Assignment
      </button>
    </div>
  );
};

export default AssignmentDownloadButton;
