import React from "react";
import { Flex, Heading, Card, Image, Text, Box } from "rebass";

const AnuntPreview = ({ listing }) => {
  return (
    <Box width={["100%"]} px={3} pt={4}>
      <Card
        display="flex"
        p={0}
        sx={{
          borderRadius: "2px",
          boxShadow: "none",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {listing.imgUrl ? (
          <Image
            src={listing.imgUrl}
            height={11}
            sx={{
              objectFit: "cover",
            }}
          />
        ) : (
          <Image height={11} src="image-placeholder.svg" px={6}></Image>
        )}
        <Flex
          flexDirection="column"
          px={4}
          py={3}
          color="grey700"
          height={9}
          justifyContent="space-between"
        >
          <Text fontSize={5} fontWeight={700}>
            100
            <Text fontSize={2} fontWeight={400} ml={1} display="inline-block">
              lei
            </Text>
          </Text>
          <Text
            fontSize={2}
            fontWeight={400}
            mt={2}
            color="grey800"
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {listing.title}
          </Text>
        </Flex>
      </Card>
    </Box>
  );
};
export default AnuntPreview;
