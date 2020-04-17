import React from "react";
import { Flex, Heading, Card, Image, Text, Box } from "rebass";

const AnuntPreview = ({ listing }) => {
  return (
    <Box
      width={[1 / 2]}
      pl={3}
      pt={4}
      sx={{
        ":nth-of-type(even)": {
          paddingRight: 3,
        },
      }}
    >
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
          px={2}
          py={2}
          color="grey700"
          height={8}
          justifyContent="space-between"
        >
          <Text fontSize={3} fontWeight={700}>
            100
            <Text fontSize={1} fontWeight={400} ml={1} display="inline-block">
              lei
            </Text>
          </Text>
          <Text
            fontSize={1}
            fontWeight={400}
            mt={2}
            color="grey"
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
