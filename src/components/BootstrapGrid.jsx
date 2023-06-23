import React from "react";

const BootstrapGrid = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4" style={{ backgroundColor: "blue" }}>
          Contenido 1
        </div>
        <div className="col-md-4" style={{ backgroundColor: "red" }}>
          Contenido 2
        </div>
        <div className="col-md-4" style={{ backgroundColor: "green" }}>
          Contenido 3
        </div>
      </div>
    </div>
  );
};

export default BootstrapGrid;
