"use client";
import { useState } from "react";
import styles from "./page.module.css";

//

export default function Home() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);

  const sumar = () => {
    const resultadoSuma = parseFloat(numero1) + parseFloat(numero2);
    setResultado(`Resultado de la suma: ${resultadoSuma}`);
  };

  const restar = () => {
    const resultadoResta = parseFloat(numero1) - parseFloat(numero2);
    setResultado(`Resultado de la resta: ${resultadoResta}`);
  };

  const multiplicar = () => {
    const resultadoMultiplicacion = parseFloat(numero1) * parseFloat(numero2);
    setResultado(`Resultado de la multiplicación: ${resultadoMultiplicacion}`);
  }

  const division = () => {
    if (numero2 === '0') {
      setResultado('Error: División por cero no permitida');
      return;
    }
    const resultadoDivision = parseFloat(numero1) / parseFloat(numero2);
    setResultado(`Resultado de la división: ${resultadoDivision}`);
  }

  const potencia = () => {
    const resultadoPotencia = Math.pow(parseFloat(numero1), parseFloat(numero2));
    setResultado(`Resultado de la potencia: ${resultadoPotencia}`);
  }

  const raiz = () => {
    if (numero1 < 0) {
      setResultado('Error: No se puede calcular la raíz de un número negativo');
      return;
    }
    const resultadoRaiz = Math.sqrt(parseFloat(numero1));
    setResultado(`Resultado de la raíz cuadrada: ${resultadoRaiz}`);
  }

  const resetear = () => {
    setNumero1('');
    setNumero2('');
    setResultado(null);
  };

  return (
    <main className={styles.main}>
      <div className={styles.calculadora}>
        <div>
          <button className={styles.reset} onClick={resetear}>Resetear</button>  
        </div>
        <div className={styles.numeros}>
          <label className={styles.text}>Número 1:</label>
          <input className={styles.inputnum} type="number"
            value={numero1} onChange={(e) => setNumero1(e.target.value)} />
        </div>
        <div className={styles.numeros}>
          <label className={styles.text} >Número 2:</label>
          <input className={styles.inputnum} type="number"
            value={numero2} onChange={(e) => setNumero2(e.target.value)} />
        </div>
        <div>
          <button className={styles.button}
          onClick={sumar}>Sumar</button>
          <button className={styles.button}
          onClick={restar}>Restar</button>
          <button className={styles.button}
          onClick={multiplicar}>Multiplicar</button>
          <button className={styles.button}
          onClick={division}>Division</button>
          <button className={styles.button}
          onClick={potencia}>Potencia</button>
          <button className={styles.button}
          onClick={raiz}>Raiz cuadrada</button>
        </div>
        {resultado && <div
          className={styles.resultado}>{resultado}</div>}
      </div>
    </main>
  );
}