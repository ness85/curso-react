import React, { useState } from "react";
import { create } from "../features/tareas/tareasSlice";
import { useDispatch } from "react-redux";

const Formulario = () => {
  const [nuevaTarea, setNuevaTarea] = useState("");
  const dispatch = useDispatch();

  const incluyeNuevaTarea = () => {
    nuevaTarea.length > 0 && dispatch(create(nuevaTarea));
    setNuevaTarea("");
  };

  return (
    <div>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />
      <button onClick={incluyeNuevaTarea}>Añadir</button>
    </div>
  );
};

export default Formulario;
