/* eslint-disable @typescript-eslint/no-explicit-any */
import FormClimate from "../FormClimate/FormClimate";
import ResultClimate from "../ResultClimate/ResultClimate";
import useClimate from "../../hooks/useClimate";
import Spinner from "../Spinner/Spinner";

const Climate = (): JSX.Element => {
  const { climate, loading }: any = useClimate();

  return (
    <>
      <main className="dos-columnas">
        <FormClimate />
        {loading ? (
          <div className="contenedor">
            <Spinner />
          </div>
        ) : (
          climate?.name && <ResultClimate />
        )}
      </main>
    </>
  );
};

export default Climate;
