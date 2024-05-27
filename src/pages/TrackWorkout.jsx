import { Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";

const TrackWorkout = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <FormControl id="exercise-name">
          <FormLabel>Exercise Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="duration">
          <FormLabel>Duration (minutes)</FormLabel>
          <Input type="number" />
        </FormControl>
        <FormControl id="calories-burned">
          <FormLabel>Calories Burned</FormLabel>
          <Input type="number" />
        </FormControl>
        <Button colorScheme="blue">Track Workout</Button>
      </VStack>
    </Box>
  );
};

export default TrackWorkout;