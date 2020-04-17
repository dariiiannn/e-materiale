import React, { useState, useEffect } from "react";
import { Box, Flex } from "rebass";
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
