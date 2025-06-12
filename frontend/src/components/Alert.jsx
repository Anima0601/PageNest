import React from "react";

function Alert({ message, type }) {
  return (
    <div role="alert" className={`alert ${type === "success" ? "alert-success" : "alert-error"} alert-outline mt-3`}>
      <span>{message}</span>
    </div>
  );
}

export default Alert;
