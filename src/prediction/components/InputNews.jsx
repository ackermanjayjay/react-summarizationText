import { Button, Input, Text, border } from "@chakra-ui/react";
import { Suspense, useState, lazy } from "react";
import { SearchApi } from "../../services/GetApi";
const ResultPrediction = lazy(() => import("./ResultPrediction"));
function NewsInput() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await SearchApi(searchQuery);
      setSearchResults(response);
    } catch (error) {
      return error;
    }
  };
  return (
    <>
      <Input
        placeholder="large size"
        size="lg"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        type="text"
        focusBorderColor="blue.400"
      />
      <Button type="submit" bg={"green"} onClick={handleSearch}>
        Summarize
      </Button>
      {searchQuery != null ? (
        <Suspense
          fallback={
            <div>
             loading
            </div>
          }
        >
          <ResultPrediction result={searchResults} />
        </Suspense>
      ) : null}
    </>
  );
}
export default NewsInput;
