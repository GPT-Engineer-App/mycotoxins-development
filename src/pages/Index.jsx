import { Container, Heading, Text, VStack, List, ListItem, ListIcon, Image, Link } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={5} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Understanding Mycotoxins
        </Heading>
        <Image src="https://images.unsplash.com/photo-1454425064867-5ba516caf601?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmdW5naSUyMHByb2R1Y2luZyUyMG15Y290b3hpbnN8ZW58MHx8fHwxNzE0ODMyMzQzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Fungi Producing Mycotoxins" borderRadius="md" />
        <Text fontSize="md">Mycotoxins are toxic compounds that are naturally produced by certain types of molds (fungi). These toxins can contaminate food crops and pose a serious health risk to humans and livestock. Mycotoxins can develop on various foodstuffs such as cereals, dried fruits, nuts and spices.</Text>
        <Text fontSize="md">Mold growth that leads to mycotoxin production can occur under a variety of environmental conditions, most commonly when there is a combination of warmth and moisture. The control of moisture and temperature during harvesting, storage, and transportation of food products is crucial in preventing mycotoxin contamination.</Text>
        <Heading as="h2" size="lg">
          Preventive Measures
        </Heading>
        <List spacing={2}>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Ensure proper drying of crops immediately after harvest.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Regularly inspect storage facilities for mold growth and ensure they are well ventilated.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Use antifungal agents and appropriate pesticides when necessary.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Implement good agricultural and manufacturing practices.
          </ListItem>
        </List>
        <Text fontSize="md">
          For more detailed information on mycotoxins and their management, visit the{" "}
          <Link href="https://www.fao.org" isExternal color="teal.500">
            Food and Agriculture Organization (FAO)
          </Link>{" "}
          website.
        </Text>
      </VStack>
    </Container>
  );
};

export default Index;
