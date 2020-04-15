import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Box,
  Flex,
  Heading,
  Card,
  Image,
  Text,
  Link as RebassLink,
} from "rebass";
import { ThemeProvider } from "emotion-theming";

import theme from "../components/theme";
import { useAnunturi } from "../graphql/api";

export default function Index() {
  const [anunturi, setAnunturi] = useState([]);
  const { data } = useAnunturi();
  useEffect(() => {
    if (data) {
      setAnunturi(data.allAnunts.data);
    }
  }, [data, setAnunturi]);
  const adList = anunturi.map((listing) => (
    <Card
      key={listing._id}
      display="flex"
      p={0}
      my={4}
      height={[120, 200]}
      sx={{
        justifyContent: "start",
        alignItems: "center",
        borderRadius: "4px",
        boxShadow: "none",
      }}
    >
      <Flex width="40%" height="100%" overflow="hidden" justifyContent="center">
        {listing.imgUrl ? (
          <Image
            src={listing.imgUrl}
            minWidth="100%"
            minHeight="100%"
            sx={{
              objectFit: "cover",
            }}
          />
        ) : (
          <Image width={7} src="image-placeholder.svg"></Image>
        )}
      </Flex>
      <Flex
        flexDirection="column"
        height="100%"
        p={4}
        color="grey800"
        width="60%"
        justifyContent="space-between"
      >
        <Heading fontSize={5} fontWeight={400}>
          {listing.title}
        </Heading>
        <Text fontSize={2} fontWeight={700} color="grey700">
          100{" "}
          <Text fontSize={1} fontWeight={400} display="inline-block">
            lei
          </Text>
        </Text>
      </Flex>
    </Card>
  ));
  return (
    <ThemeProvider theme={theme}>
      {/* Lista de anunturi */}
      <Box fontFamily="body" px={[4, 0]} bg="grey100">
        <Flex flexDirection="column" maxWidth={16} mx="auto">
          {adList}
        </Flex>
      </Box>
    </ThemeProvider>
  );
}

{
  /* <Link href="/add-material" passHref>
            <RebassLink> adauga anunt</RebassLink>
          </Link> */
}
