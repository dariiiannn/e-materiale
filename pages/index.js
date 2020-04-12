import React, { useState, useEffect } from "react";

import { Box, Flex, Heading, Text, Image } from "rebass";
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
    <Box key={listing._id}>
      <Heading>{listing.title}</Heading>
      <Image
        src="http://www.ursudepot.ro/2295-tm_thickbox_default/glet-fin-ct-126-5kg-ceresit.jpg"
        variant="avatar"
      />
    </Box>
  ));
  return (
    <ThemeProvider theme={theme}>
      <Box fontFamily="body">
        <Flex flexDirection="column">{adList}</Flex>
      </Box>
    </ThemeProvider>
  );
}
