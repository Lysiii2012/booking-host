import React, { useState } from "react";
import HomeForm from "../../FilterComponents/HomeForm";
import ResultHotels from "../../FilterComponents/ResultHotels/ResultHotels";
import HomeContent from "../../HomeContent/HomeContent";

const HomePage = () => {
  const [selectedCity, setSelectedCity] = useState("");

  const handleFilter = (city) => {
    setSelectedCity(city);
  };

  return (
    <div>
      <HomeForm onFilter={handleFilter} />
      {selectedCity ? <ResultHotels city={selectedCity} /> : <HomeContent />}
    </div>
  );
};

export default HomePage;
