import { Center, Stack, Text, Box } from "@chakra-ui/react";

function ResultPrediction({ result }) {
  const { hasil, message } = result;

  return (
    <div>
      <Stack spacing={2}>
        <Box boxShadow={"dark-lg"} mx={5}>
          <Center>
            <Text fontWeight={'bold'} >Hasil prediksi</Text>
          </Center>
          <Center mx={5}>
            {hasil != null ? (
              <Text justifyContent={'center'} color={"teal"} fontWeight={"bold"}>
                {hasil}
              </Text>
            ) : null}
          </Center>
        </Box>
      </Stack>
    </div>
  );
}
export default ResultPrediction;
