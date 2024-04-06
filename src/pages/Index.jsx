import { Box, Flex, Heading, Text, Button, Image, Link, Container, Spacer, VStack, HStack, Icon, useBreakpointValue } from "@chakra-ui/react";
import { FaBars, FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Index = () => {
  const heroImage = useBreakpointValue({
    base: "https://images.unsplash.com/photo-1486081505710-1b891dea8ca3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBoZXJvJTIwd2ViYm9ncmFmaXxlbnwwfHx8fDE3MTIzODM1NjB8MA&ixlib=rb-4.0.3&q=80&w=1080",
    md: "https://images.unsplash.com/photo-1542435503-956c469947f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXNrdG9wJTIwaGVybyUyMHdlYmJvZ3JhZml8ZW58MHx8fHwxNzEyMzgzNTYxfDA&ixlib=rb-4.0.3&q=80&w=1080",
  });

  return (
    <Box>
      {/* Header */}
      <Box as="header" bg="blue.600" color="white">
        <Container maxW="container.xl" py={4}>
          <Flex align="center" justify="space-between">
            <Heading as="h1" size="lg">
              Webbografi
            </Heading>
            <HStack as="nav" spacing={4}>
              <Link href="#features">Features</Link>
              <Link href="#pricing">Pricing</Link>
              <Link href="#about">About</Link>
              <Link href="#contact">Contact</Link>
            </HStack>
            <Icon as={FaBars} w={7} h={7} display={{ md: "none" }} />
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Flex bgImage={`url('${heroImage}')`} bgSize="cover" bgPos="center" bgRepeat="no-repeat" align="center" justify="center" minH="lg">
        <VStack textAlign="center" color="white" p={8} spacing={4}>
          <Heading as="h2" size="2xl">
            Elevate Your Online Presence
          </Heading>
          <Text fontSize="xl">Modern solutions for growing your business and engaging your audience.</Text>
          <Button colorScheme="blue" size="lg">
            Get Started
          </Button>
        </VStack>
      </Flex>

      {/* Featured Content */}
      <Container maxW="container.xl" py={16} id="features">
        <VStack spacing={8}>
          <Heading as="h3" size="xl">
            Featured Services
          </Heading>
          <Flex direction={{ base: "column", md: "row" }} gap={10}>
            <Box flex="1" bg="gray.100" p={8} borderRadius="md">
              <Heading size="md">Web Design</Heading>
              <Text mt={2}>Stunning and responsive designs tailored for your brand.</Text>
            </Box>
            <Box flex="1" bg="gray.100" p={8} borderRadius="md">
              <Heading size="md">SEO Optimization</Heading>
              <Text mt={2}>Improve your visibility and rank higher on search engines.</Text>
            </Box>
            <Box flex="1" bg="gray.100" p={8} borderRadius="md">
              <Heading size="md">E-Commerce</Heading>
              <Text mt={2}>Robust online stores that drive sales and growth.</Text>
            </Box>
          </Flex>
        </VStack>
      </Container>

      {/* Footer */}
      <Box bg="blue.800" color="white">
        <Container maxW="container.xl" py={8}>
          <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
            <Text>© 2023 Webbografi. All rights reserved.</Text>
            <Spacer />
            <HStack spacing={4}>
              <Icon as={FaTwitter} w={5} h={5} />
              <Icon as={FaFacebookF} w={5} h={5} />
              <Icon as={FaInstagram} w={5} h={5} />
              <Icon as={FaLinkedinIn} w={5} h={5} />
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
