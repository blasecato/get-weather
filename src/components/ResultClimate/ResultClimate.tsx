/* eslint-disable @typescript-eslint/no-explicit-any */
import useClimate from "../../hooks/useClimate";

const ResultClimate = () => {
  const { climate }: any = useClimate();
  const { name, main }: any = climate;
  const gradeKelvin = 273.15;

  return (
    <div className="contenedor clima">
      <>
        <h2>El clima de {name} es:</h2>
        <div className="flex-center">
          <p>
            <span className="temp-big">
              {Math.trunc(main.temp - gradeKelvin)}
            </span>
            <span>&#x2103;</span>
          </p>
        </div>

        <div className="flex-center">
          <p>
            Min:
            <span className="temp">
              {Math.trunc(main.temp_min - gradeKelvin)}{" "}
            </span>
            <span>&#x2103;</span>
          </p>
          <p>
            Max:{" "}
            <span className="temp">
              {Math.trunc(main.temp_max - gradeKelvin)}{" "}
            </span>
            <span>&#x2103;</span>
          </p>
        </div>
      </>
    </div>
  );
};

export default ResultClimate;
