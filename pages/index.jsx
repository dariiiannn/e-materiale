import { Box, Flex, Heading, Text, Image } from "rebass";
import { ThemeProvider } from "emotion-theming";

import theme from "../components/theme";

const listings = [
    { title: "Glet", description: "Glet fin, gletul meseriasului" },
    { title: "Adeziv", description: "Adeviz pentru gresie si faianta" }
];

export default function Index() {
    const adList = listings.map(listing => (
        <Box>
            <Heading>{listing.title}</Heading>
            <Text>{listing.description}</Text>
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
