import { useState, useEffect } from "react";
import { GetApi } from "../../services/GetApi";
import { Text, Center, Box, Stack } from "@chakra-ui/react";
import NewsInput from "../components/InputNews";

function Home() {
  const [GetData, setGetData] = useState([]);
  useEffect(() => {
    GetApi()
      .then((response) => {
        setGetData(response);
      })
      .catch((error) => {
        throw error;
      });
  }, []);
  return (
    <>
      <Box bg="tomato" w="100%" p={4} color="white">
        <Center p={2} gap={5}>
          <Text fontWeight={"2xl"}> Summarization Hugging Face & </Text>
          <Text fontWeight={"2xl"} color={"blue"}>
            React Js
          </Text>
        </Center>
      </Box>
      <Stack spacing={3} mt={5}>
        <NewsInput></NewsInput>
      </Stack>
    </>
  );
}
export default Home;
