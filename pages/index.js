import React, { useState, useEffect } from "react";
import { Box, Flex, Heading, Card, Image, Text } from "rebass";
import { Input } from "@rebass/forms";
import { ThemeProvider } from "emotion-theming";

import theme from "../components/theme";
import AnuntPreview from "../components/AnuntPreview";

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
    <AnuntPreview key={listing._id} listing={listing} />
  ));
  return (
    <ThemeProvider theme={theme}>
      {/* Lista de anunturi */}
      <Box
        bg="base900"
        height={12}
        fontFamily="body"
        px={7}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
        color="white"
        flexDirection="column"
      >
        <Heading
          fontWeight={400}
          fontSize={6}
          textAlign="center"
          mt={8}
          mb={3}
          letterSpacing="1px"
        >
          Ce anume cauti?
        </Heading>
        <Box
          height={6}
          bg="grey800"
          sx={{
            borderRadius: "20px",
          }}
          width={10}
          margin="0 auto"
        >
          <Text
            as="p"
            color="grey600"
            width="100%"
            textAlign="center"
            lineHeight="30px"
            letterSpacing="1px"
            fontSize={1}
            fontWeight={300}
          >
            Cluj-Napoca
          </Text>
        </Box>
        <Input
          sx={{
            position: "absolute",
            bottom: "-18px",
            borderRadius: "6px",
            left: "50%",
            transform: "translate(-50%)",
            border: "none",
          }}
          height={8}
          bg="white"
          width="85%"
          placeholder="Parchet laminat"
          pl={5}
          color="grey"
          letterSpacing="1px"
        ></Input>
      </Box>
      <Flex
        bg="base"
        height={11}
        fontFamily="body"
        alignItems="center"
        pl={2}
        overflowX="auto"
        sx={{
          background:
            "linear-gradient(98deg, rgba(162,230,250,1) 26%, rgba(82,169,230,1) 100%)",
        }}
      >
        <Card
          minWidth="90px"
          height="80px"
          sx={{
            borderRadius: "8px",
            boxShadow: "none",
          }}
          ml={5}
        ></Card>
        <Card
          minWidth="90px"
          height="80px"
          sx={{
            borderRadius: "8px",
            boxShadow: "none",
          }}
          ml={5}
        ></Card>
        <Card
          minWidth="90px"
          height="80px"
          sx={{
            borderRadius: "8px",
            boxShadow: "none",
          }}
          ml={5}
        ></Card>
        <Card
          minWidth="80px"
          height="80px"
          sx={{
            borderRadius: "8px",
            boxShadow: "none",
          }}
          ml={5}
        ></Card>
      </Flex>
      <Flex fontFamily="body" bg="grey200" flexWrap="wrap" minHeight={0}>
        {adList}
      </Flex>
    </ThemeProvider>
  );
}

{
  /* <Link href="/add-material" passHref>
            <RebassLink> adauga anunt</RebassLink>
          </Link> */
}
