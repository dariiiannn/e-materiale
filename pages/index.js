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
      mb={7}
      height={150}
      sx={{
        justifyContent: "start",
        alignItems: "center",
        borderRadius: "36px",
        overflow: "hidden",
      }}
    >
      <Image
        src="http://www.ursudepot.ro/2295-tm_thickbox_default/glet-fin-ct-126-5kg-ceresit.jpg"
        height="100%"
      />
      <Flex flexDirection="column" height="100%" py={4} color="base700">
        <Heading fontSize={6}>{listing.title}</Heading>
        <Text mb={6}>Descriere blablabla</Text>
        <RebassLink href="https://rebassjs.org" color="base700">
          Link
        </RebassLink>
      </Flex>
    </Card>
  ));
  return (
    <ThemeProvider theme={theme}>
      <Box fontFamily="body" mx="auto" maxWidth={800}>
        <Flex mx={7} my={8} color="grey800" flexDirection="column">
          <Heading fontSize={7}>Anunturi</Heading>
          <Link href="/add-material" passHref>
            <RebassLink> adauga anunt</RebassLink>
          </Link>
        </Flex>
        <Flex flexDirection="column">{adList}</Flex>
      </Box>
    </ThemeProvider>
  );
}
