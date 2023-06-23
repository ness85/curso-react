import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleComplete } from "../features/tareas/tareasSlice";
import { deleteTask } from "../features/tareas/tareasSlice";

const ListaTareas = () => {
  const tareas = useSelector((state) => state.tareas.value);

  const dispatch = useDispatch();

  const completaTarea = (index) => {
    dispatch(toggleComplete(index));
  };

  const eliminaTarea = (index) => {
    dispatch(deleteTask(index));
  };

  return (
    <div>
      {tareas.map((tarea, index) => (
        <div key={index}>
          <span style={{ textDecoration: tarea.completado ? "line-through" : "" }}>{tarea.texto}</span>
          <button onClick={() => completaTarea(index)}>{tarea.completado ? "Pendiente" : "Completar"}</button>
          <button onClick={() => eliminaTarea(index)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default ListaTareas;
