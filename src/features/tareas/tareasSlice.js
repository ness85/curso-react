import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [{ texto: "Sacar al perro", completado: false }],
};

const tareasSlice = createSlice({
  name: "tareas",
  initialState,
  reducers: {
    create(state, { payload }) {
      state.value = [...state.value, { texto: payload, completado: false }];
    },
    toggleComplete(state, { payload }) {
      state.value[payload].completado = !state.value[payload].completado;
    },
    deleteTask(state, { payload }) {
      state.value.splice(payload, 1);
    },
  },
});

export const { create, toggleComplete, deleteTask } = tareasSlice.actions;

export default tareasSlice.reducer;
