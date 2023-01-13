import Navbar from "./Components/navbar/Navbar";
import Pacchetto from "./Components/navbar/body/Pacchetto";


function App() {

  const callbackFunctionFromParent=(value)=>{
    alert(`Mi hai cliccato: ${value}`);
  }
  return (
    <>
      <Navbar />
      <Pacchetto/>
    </>
  );
}

export default App;
