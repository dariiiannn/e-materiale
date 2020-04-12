import { Box, Flex, Heading, Button, Card } from "rebass";
import { Label, Radio, Input, Select, Textarea } from "@rebass/forms";

import Layout from "../components/layout";

export default function AddMaterial() {
  return (
    <Layout>
      <Box as="form" py={3} maxWidth={600} mx="auto">
        <Heading as="h3" m={4} color="grey700">
          Anunt
        </Heading>
        <Card p={4}>
          <Box py={3}>
            <Label htmlFor="Titlu" pb={2} pl={2}>
              Titlu
            </Label>
            <Input id="titlu" name="titlu" />
          </Box>

          <Box py={3}>
            <Label htmlFor="categorie" pb={2} pl={2}>
              categorie
            </Label>
            <Select id="categorie" name="categorie" defaultValue="finisaje">
              <option value="finisaje">Materiale pentru finisaje</option>
              <option value="gresie">Gresie/Faianta</option>
              <option value="adezivi">Adezivi gresie/faianta</option>
              <option value="chituri">Chit rosturi</option>
              <option value="distantieri">Distantieri</option>
            </Select>
          </Box>
          <Box py={3}>
            <Label htmlFor="cantitate" pb={2} pl={2}>
              Cantitate
            </Label>
            <Input id="cantitate" name="cantitate" />
          </Box>

          <Box py={3}>
            <Label htmlFor="specificatii" pb={2} pl={2}>
              specificatii
            </Label>
            <Textarea id="specificatii" name="specificatii" />
          </Box>
        </Card>

        <Heading as="h3" m={4} color="grey700">
          Contact
        </Heading>

        <Card p={4}>
          <Box py={3}>
            <Label htmlFor="telefon" pb={2} pl={2}>
              Telefon
            </Label>
            <Input id="telefon" name="Telefon" />
          </Box>

          <Box py={3}>
            <Label htmlFor="localitatea" pb={2} pl={2}>
              Localitatea
            </Label>
            <Input id="localitatea" name="Localitatea" />
          </Box>

          <Box py={3}>
            <Label htmlFor="adresa" pb={2} pl={2}>
              Adresa
            </Label>
            <Input id="adresa" name="Adresa" />
          </Box>

          <Box py={3}>
            <Label htmlFor="email" pb={2} pl={2}>
              Email
            </Label>
            <Input id="email" type="email" name="Email" />
          </Box>
        </Card>

        <Flex justifyContent="flex-end" m={4}>
          <Button width={150} py={3} bg="background" color="base">
            Anuleaza
          </Button>
          <Button width={200} py={3} bg="base">
            Adauga
          </Button>
        </Flex>
      </Box>
    </Layout>
  );
}
