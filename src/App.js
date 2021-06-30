import React, { useEffect, useState } from "react";
import { getCountries, getReportByCountry } from "./components/apis/index";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [report, setReport] = useState([]);

  useEffect(() => {
    getCountries().then((res) => {
      setCountries(res.data);

      setSelectedCountryId("vn");
    });
  }, []);

  const handleOnChange = (event) => {
    setSelectedCountryId(event.target.value);
  };

  useEffect(() => {
    if (selectedCountryId) {
      const { Slug } = countries.find(
        (country) => country.ISO2.toLowerCase() === selectedCountryId
      );
      getReportByCountry(Slug).then((res) => {
        res.data.pop();
        setReport(res.data);
      });
    }
  }, [countries, selectedCountryId]);

  return (
    <>
      <CountrySelector
        countries={countries}
        handleOnChange={handleOnChange}
        value={selectedCountryId}
      />
      <Highlight report={report} />
      <Summary report={report} />
    </>
  );
}

export default App;
