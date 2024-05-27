import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.700" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Text fontSize="xl" color="white">Fitness Tracker</Text>
        </Box>
        <Spacer />
        <Flex alignItems="center">
          <NavLink to="/" style={{ marginRight: '20px', color: 'white' }}>Home</NavLink>
          <NavLink to="/track-workout" style={{ marginRight: '20px', color: 'white' }}>Track Workout</NavLink>
          <NavLink to="/profile" style={{ color: 'white' }}>Profile</NavLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;