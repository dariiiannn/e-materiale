import { Box, Flex } from "rebass";
import { Label, Radio, Input, Select, Textarea } from "@rebass/forms";

import Layout from "../components/layout";

export default function AddMaterial() {
  return (
    <Layout>
      <Box as="form" py={3}>
        <Box width={1 / 2} px={2}>
          <Label htmlFor="produs">Produs</Label>
          <Input id="produs" name="produs" defaultValue="Glet" />
        </Box>
        <Box width={1 / 2} px={2}>
          <Label htmlFor="brand">brand</Label>
          <Input id="brand" name="brand" defaultValue="Ceresit" />
        </Box>
        <Flex>
          <Label width="auto" p={2}>
            <Radio id="nou" name="stare" value="nou" defaultChecked />
            nou
          </Label>
          <Label width="auto" p={2}>
            <Radio id="folosit" name="stare" value="folosit" />
            folosit
          </Label>
        </Flex>
        <Box width={1 / 2} px={2}>
          <Label htmlFor="categorie">categorie</Label>
          <Select id="categorie" name="categorie" defaultValue="finisaje">
            <option value="finisaje">Materiale pentru finisaje</option>
            <option>Gresie/Faianta</option>
            <option>Adezivi gresie/faianta</option>
            <option>Chit rosturi</option>
            <option>Distantieri</option>
          </Select>
        </Box>
        {/* <p>Dimensiuni/Cantitate</p>
      <p>1/4 1/2 3/4</p>
      <p>Bucati</p>
      <p>Metri Patrati</p>
      <p>Metri Cubi</p>
      <p>Lungime</p>
      <p>Latime</p>
      <p>Inaltime</p>
      <p>Culoare</p> */}

        <Box px={2}>
          <Label htmlFor="specificatii">specificatii</Label>
          <Textarea id="specificatii" name="specificatii" />
        </Box>
        {/* <p>Foto</p>
      <p>Locatie</p>
      <p>Pret</p> */}
      </Box>
    </Layout>
  );
}
