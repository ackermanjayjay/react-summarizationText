import Home from "./prediction/views/HomePages";
import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import ResultPrediction from "./prediction/components/ResultPrediction";

function App() {
  return (
    <>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/api/books:q" Component={<ResultPrediction/>}></Route>
          </Route>
        </Routes>
      </ChakraProvider>
    </>
  );
}

export default App;
