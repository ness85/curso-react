import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const MaterialUIForm = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Nombre: ${nombre}, Email: ${email}, Mensaje: ${mensaje}`);
  };

  return (
    <form style={{ marginTop: "20px" }} onSubmit={handleSubmit}>
      <TextField
        id="nombreUI"
        label="Nombre"
        variant="outlined"
        value={nombre}
        fullWidth
        style={{ marginTop: "20px" }}
        onChange={(event) => setNombre(event.target.value)}
      />
      <TextField
        id="emailUI"
        label="E-mail"
        variant="outlined"
        value={email}
        fullWidth
        style={{ marginTop: "20px" }}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        id="mensajeUI"
        label="Mensaje"
        variant="outlined"
        value={mensaje}
        fullWidth
        multiline
        rows={4}
        style={{ marginTop: "20px" }}
        onChange={(event) => setMensaje(event.target.value)}
      />
      <Button type="submit" variant="contained" color="primary" style={{ marginTop: "20px" }}>
        Enviar mensaje
      </Button>
    </form>
  );
};

export default MaterialUIForm;
