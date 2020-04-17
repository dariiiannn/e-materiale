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

  const categoriiCards = [1, 2, 3, 4, 5].map((_, index) => (
    <Card
      key={index}
      minWidth="100px"
      height="90px"
      sx={{
        borderRadius: "8px",
        boxShadow: "none",
        position: "relative",
      }}
      mx={3}
    >
      <Text
        as="span"
        color="white"
        sx={{
          position: "absolute",
          bottom: "-22px",
          left: "50%",
          transform: "translate(-50%)",
        }}
        fontSize={2}
        letterSpacing="1px"
      >
        Finisaje
      </Text>
    </Card>
  ));
  return (
    <ThemeProvider theme={theme}>
      {/* Lista de anunturi */}
      <Box
        bg="base900"
        fontFamily="second"
        px={8}
        pb="32px"
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
          fontSize={7}
          textAlign="center"
          mt={8}
          mb={4}
          letterSpacing="0.1em"
        >
          Cauta sau vinde materiale ramase
        </Heading>
        <Box
          height={5}
          bg="grey800"
          sx={{
            borderRadius: "20px",
          }}
          width={10}
          margin="0 auto"
          mb={7}
        >
          <Text
            as="p"
            color="grey700"
            width="100%"
            textAlign="center"
            lineHeight="24px"
            letterSpacing="1px"
            fontSize={0}
            fontWeight={300}
          >
            Cluj-Napoca
          </Text>
        </Box>
        <Input
          sx={{
            position: "absolute",
            bottom: "-14px",
            borderRadius: "6px",
            left: "50%",
            transform: "translate(-50%)",
            border: "none",
            "::placeholder": {
              color: "grey400",
            },
          }}
          height={7}
          bg="white"
          width="85%"
          placeholder="Parchet laminat"
          pl={5}
          color="grey"
          letterSpacing="1px"
          fontFamily="second"
        ></Input>
      </Box>
      <Flex
        bg="base"
        height={11}
        fontFamily="second"
        alignItems="center"
        pl={2}
        overflowX="auto"
        sx={{
          background:
            "linear-gradient(98deg, rgba(162,230,250,1) 26%, rgba(82,169,230,1) 100%)",
        }}
      >
        {categoriiCards}
      </Flex>
      <Flex fontFamily="body" bg="grey200" flexWrap="wrap" minHeight={0}>
        {adList}
      </Flex>
    </ThemeProvider>
  );
}
