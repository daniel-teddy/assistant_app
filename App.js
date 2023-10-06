import React, { useState, useEffect } from "react";
import Main from "./Main";
import CustomNavBar from "./CustomNavBar";
import View from 'react-native';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading data or an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    // <Main />
    // <CustomNavBar />
    <>
    {isLoading ? <CustomNavBar /> : <Main />}
    </>
  );
};

export default App;
