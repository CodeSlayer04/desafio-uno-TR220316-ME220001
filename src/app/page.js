"use client";
import { useState } from "react";
import styles from "./page.module.css";

//

export default function Home() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState(null);

  const sumar = () => {
    if (numero1 && numero2) {
      const resultadoSuma = parseFloat(numero1) + parseFloat(numero2);
      setResultado(`Resultado de la suma: ${resultadoSuma}`);
    } else {
      setResultado(`Por favor, primero ingrese ambos números`);
    }
  };

  const restar = () => {
    if (numero1 && numero2) {
      const resultadoResta = parseFloat(numero1) - parseFloat(numero2);
      setResultado(`Resultado de la resta: ${resultadoResta}`);
    } else {
      setResultado(`Por favor, primero ingrese ambos números`);
    }
  };

  const multiplicar = () => {
    if (numero1 && numero2) {
      const resultadoMultiplicacion = parseFloat(numero1) * parseFloat(numero2);
      setResultado(
        `Resultado de la multiplicación: ${resultadoMultiplicacion}`
      );
    } else {
      setResultado(`Por favor, primero ingrese ambos números`);
    }
  };

  const division = () => {
    if (numero1 && numero2) {
      if (numero2 === "0") {
        setResultado("Error: División por cero no permitida");
        return;
      }
      const resultadoDivision = parseFloat(numero1) / parseFloat(numero2);
      setResultado(`Resultado de la división: ${resultadoDivision}`);
    } else {
      setResultado(`Por favor, primero ingrese ambos números`);
    }
  };

  const potencia = () => {
    if (numero1 && numero2) {
      const resultadoPotencia = Math.pow(
        parseFloat(numero1),
        parseFloat(numero2)
      );
      setResultado(`Resultado de la potencia: ${resultadoPotencia}`);
    } else {
      setResultado(`Por favor, primero ingrese ambos números`);
    }
  };

  const raiz = () => {
    if (numero1) {
      if (numero1 < 0) {
        setResultado(
          "Error: No se puede calcular la raíz de un número negativo"
        );
        return;
      }
      const resultadoRaiz = Math.sqrt(parseFloat(numero1));
      setResultado(`Resultado de la raíz cuadrada: ${resultadoRaiz}`);
    } else {
      setResultado(
        "Por favor, primero ingrese el primer número para calcular su raíz cuadrada"
      );
    }
  };

  const resetear = () => {
    setNumero1("");
    setNumero2("");
    setResultado(null);
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.titulo}>Calculadora Matelab503</h1>
      <div className={styles.calculadora}>
        <div className={styles.numeros}>
          <label className={styles.text}>Número 1:</label>
          <input
            className={styles.inputnum}
            type="number"
            value={numero1}
            onChange={(e) => setNumero1(e.target.value)}
          />
        </div>
        <div className={styles.numeros}>
          <label className={styles.text}>Número 2:</label>
          <input
            className={styles.inputnum}
            type="number"
            value={numero2}
            onChange={(e) => setNumero2(e.target.value)}
          />
        </div>

        <div className={styles.botones}>
          <button className={styles.button} onClick={sumar}>
            Sumar
          </button>
          <button className={styles.button} onClick={restar}>
            Restar
          </button>
          <button className={styles.button} onClick={multiplicar}>
            Multiplicar
          </button>
          <button className={styles.button} onClick={division}>
            Division
          </button>
          <button className={styles.button} onClick={potencia}>
            Potencia
          </button>
          <button className={styles.button} onClick={raiz}>
            Raiz cuadrada
          </button>
        </div>

        {resultado && <div className={styles.resultado}>{resultado}</div>}
        <br></br>
        <div style={{ textAlign: "center" }}>
          <button className={styles.reset} onClick={resetear}>
            Reiniciar calculadora
          </button>
        </div>
        <br></br>
        <div>
          <p style={{ color: "gray", fontStyle: "italic" }}>
            Nota: Para el cálculo de la raíz cuadrada solo se toma en cuenta el
            primer número
          </p>
        </div>
      </div>
    </main>
  );
}
