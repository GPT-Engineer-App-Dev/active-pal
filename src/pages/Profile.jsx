import { Box, Text, VStack } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl">User Profile</Text>
        <Text>Name: John Doe</Text>
        <Text>Email: john.doe@example.com</Text>
        <Text>Member since: January 2023</Text>
      </VStack>
    </Box>
  );
};

export default Profile;