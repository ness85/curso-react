import { fireEvent, render, screen } from "@testing-library/react";
import BotonTesting from "../components/BotonTesting";

test("Renderiza correctamente", () => {
  render(<BotonTesting />);
});

test("Test evento onClick", () => {
  // Creamos nuestro spy con jest.fn()
  const miSpy = jest.fn();

  // Renderizamos el botón y le pasamos la función miSpy
  render(<BotonTesting func={miSpy} />);

  // Obtenemos la referencia al botón desde "lo que se ha renderizado"
  const boton = screen.getByRole("button");

  // Simulamos un click sobre este botón
  fireEvent.click(boton);

  // Utilizamos algunos expect con nuestro spy
  expect(miSpy).toBeCalled() // Esperamos que se haya ejecutado
  expect(miSpy).toBeCalledTimes(1); // Esperamos que se haya ejecutado 1 vez
});
