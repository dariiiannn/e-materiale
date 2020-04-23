import { useState } from "react";
import { Box, Flex, Heading, Button, Link as RebassLink, Image } from "rebass";
import { Label, Input, Select, Textarea } from "@rebass/forms";
import { useForm } from "react-hook-form";
import Link from "next/link";

import { createAnunt } from "../graphql/api";
import Layout from "../components/layout";

export default function AddMaterial() {
  const { register, handleSubmit, errors } = useForm();
  const [submitted, setSubmitted] = useState(false);
  // TODO - use swr or some hook
  const onSubmit = async (data) => {
    const anunt = {
      title: "bla",
      imgUrl: "",
      categorie: "bla",
      cantitate: "bla",
      descriere: "bla",
      telefon: "bla",
      email: "bla",
    };
    const result = await createAnunt({ ...anunt, ...data });
    console.log(result);
    setSubmitted(true);
  };

  const onCancel = () => {
    console.log("cancel");
  };

  return (
    <Layout>
      {!submitted ? (
        <Box
          as="form"
          py={3}
          maxWidth={600}
          mx="auto"
          onSubmit={handleSubmit(onSubmit)}
          bg="grey200"
          px={5}
        >
          <Link href="/" passHref>
            <RebassLink
              sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                textDecoration: "none",
              }}
              fontSize={3}
              color="grey700"
              ml={5}
            >
              <Image
                height={4}
                src="back.svg"
                sx={{
                  position: "absolute",
                  left: -5,
                }}
              ></Image>
              Inapoi
            </RebassLink>
          </Link>
          <Heading fontSize={10} py={8}>
            Adauga anuntul tau
          </Heading>
          <Box py={5}>
            <Label htmlFor="Titlu">Titlu</Label>
            <Input
              id="title"
              bg="white"
              name="title"
              placeholder="Parchet laminat stejar"
              ref={register({ required: true })}
            />
          </Box>

          <Box py={5}>
            <Label htmlFor="categorie">Categorie</Label>
            <Select
              id="categorie"
              name="categorie"
              defaultValue="finisaje"
              ref={register({ required: true })}
            >
              <option value="finisaje">Materiale pentru finisaje</option>
              <option value="gresie">Gresie/Faianta</option>
              <option value="adezivi">Adezivi gresie/faianta</option>
              <option value="chituri">Chit rosturi</option>
              <option value="distantieri">Distantieri</option>
            </Select>
          </Box>
          <Box py={5}>
            <Label htmlFor="cantitate">Cantitate</Label>
            <Input
              id="cantitate"
              name="cantitate"
              placeholder="6 cutii intregi"
            />
          </Box>

          <Box py={5}>
            <Label htmlFor="specificatii">Descriere</Label>
            <Textarea
              height={10}
              id="descriere"
              name="descriere"
              placeholder="Detalii despre produs, culoare, stare (nou/folosit)"
            />
          </Box>

          <Box py={5}>
            <Label htmlFor="telefon">Telefon</Label>
            <Input id="telefon" name="Telefon" />
          </Box>

          <Box py={5}>
            <Label htmlFor="localitatea">Localitatea</Label>
            <Input id="localitatea" name="Localitatea" />
          </Box>

          <Box py={5}>
            <Label htmlFor="adresa">Adresa</Label>
            <Input id="adresa" name="Adresa" />
          </Box>

          <Box py={5}>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" name="Email" />
          </Box>

          <Flex justifyContent="flex-end" my={4}>
            <Button variant="secondary" type="button" onClick={onCancel}>
              Anuleaza
            </Button>
            <Button type="submit" bg="base">
              Adauga
            </Button>
          </Flex>
        </Box>
      ) : (
        <Flex bg="grey200" height="100vh" flexDirection="column" py={6} px={5}>
          <Link href="/" passHref>
            <RebassLink
              sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                textDecoration: "none",
              }}
              fontSize={3}
              color="grey700"
              ml={5}
            >
              <Image
                height={4}
                src="back.svg"
                sx={{
                  position: "absolute",
                  left: -5,
                }}
              ></Image>
              Inapoi
            </RebassLink>
          </Link>
          <Heading fontSize={10} mt={11}>
            Anuntul tau a fost adaugat!
          </Heading>
        </Flex>
      )}
    </Layout>
  );
}
