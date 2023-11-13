import Climate from "./components/Climate/Climate";
import { ClimateProvider } from "./context/ClimateProvider";
function App() {
  return (
    <ClimateProvider>
      <>
        <header>
          <h1>Buscador de climas</h1>
        </header>
        <Climate />
      </>
    </ClimateProvider>
  );
}

export default App;
