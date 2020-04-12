import React from "react";
import { Box, Flex, Button } from "rebass";

import Layout from "../components/layout";

function design() {
  return (
    <Layout>
      <Button width={200} py={3} bg="base">
        Default
      </Button>
      <Flex>
        <Box width={50} height={50} bg="base900" m={4}></Box>
        <Box width={50} height={50} bg="base800" m={4}></Box>
        <Box width={50} height={50} bg="base700" m={4}></Box>
        <Box width={50} height={50} bg="base600" m={4}></Box>
        <Box width={50} height={50} bg="base" m={4}></Box>
        <Box width={50} height={50} bg="base400" m={4}></Box>
        <Box width={50} height={50} bg="base300" m={4}></Box>
        <Box width={50} height={50} bg="base200" m={4}></Box>
        <Box width={50} height={50} bg="base100" m={4}></Box>
      </Flex>
      <Flex>
        <Box width={50} height={50} bg="grey900" m={4}></Box>
        <Box width={50} height={50} bg="grey800" m={4}></Box>
        <Box width={50} height={50} bg="grey700" m={4}></Box>
        <Box width={50} height={50} bg="grey600" m={4}></Box>
        <Box width={50} height={50} bg="grey" m={4}></Box>
        <Box width={50} height={50} bg="grey400" m={4}></Box>
        <Box width={50} height={50} bg="grey300" m={4}></Box>
        <Box width={50} height={50} bg="grey200" m={4}></Box>
        <Box width={50} height={50} bg="grey100" m={4}></Box>
      </Flex>
      <Flex>
        <Box width={50} height={50} bg="accent" m={4}></Box>
      </Flex>
    </Layout>
  );
}

export default design;
