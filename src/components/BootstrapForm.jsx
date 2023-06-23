import React from "react";

const BootstrapForm = () => {
  return (
    <div className="container mt-2">
      <input
        className="form-control mt-2 form-control-lg"
        type="text"
        placeholder="Nombre"
        id="nombre"
        name="nombre"
        required
      />
      <input
        className="form-control mt-2"
        type="email"
        placeholder="E-mail"
        id="email"
        name="email"
        required
      />
      <textarea
        className="form-control mt-2 form-control-sm"
        type="text"
        placeholder="Escribe tu mensaje..."
        rows={5}
        id="mensaje"
        name="mensaje"
        required
      />
    </div>
  );
};

export default BootstrapForm;
