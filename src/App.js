import React, { useEffect, useState } from "react";
import getCountries from './components/apis/index'
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";

function App() {
  const [countries, setCountries] = useState([]);
  
  useEffect(() => {
    getCountries().then((res) => {
      console.log({ res });
      setCountries(res.data);
    });
  }, []);

  return (
    <>
      <CountrySelector countries={countries}/>
      <Highlight />
      <Summary />
    </>
  );
}

export default App;
