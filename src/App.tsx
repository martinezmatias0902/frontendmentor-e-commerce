import { Box, Container, Link, Stack, StackDivider, Text, Image, Avatar, Heading, Badge, InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react"

import Nav from "./components/Nav"
import CartIcon from "./icons/cart"
import image1 from "./assets/image-product-1.jpg"
import image2 from "./assets/image-product-2.jpg"
import image3 from "./assets/image-product-3.jpg"
import image4 from "./assets/image-product-4.jpg"
import Carousel from "./components/Carousel"

function App() {
  return (
    <Container maxWidth="container.lg">
      <Stack divider={<StackDivider />} spacing={0}>
        <Nav />
        {/* Main section */}
        <Stack marginTop={6} direction="row" alignItems="center" justifyContent="center">
          {/* Left Side */}
          <Box flex={1}>
            <Carousel images={[image1, image2, image3, image4]}/>
          </Box>
          {/* Right Side */}
          <Stack flex={1} spacing={6}>
            <Stack>
              <Text textTransform="uppercase" letterSpacing={2} fontWeight="bold" fontSize="sm" color="primary.500">Sneaker Company</Text>
              <Heading>Fall Limited Edition Sneakers</Heading>
            </Stack>
            <Text color="gray.500">These low-profile sneakers are your perfect casual wear companion. Featurin a durable rubber outer sole, they'll withstand everything the weather can offer.</Text>
            {/* Pricing */}
            <Stack>
              {/* top */}
              <Stack direction="row" alignItems="center" spacing={4}>
                <Text fontSize="2xl" fontWeight={700}>$125.00</Text>
                <Badge colorScheme="primary" fontSize="md" borderRadius="md" paddingX={2} color="primary.500">50%</Badge>
              </Stack>
              {/* bottom */}
              <Text fontWeight={700} color="gray.400" textDecoration="line-through">$250.00</Text>
            </Stack>
            {/* Buttons */}
            <Stack direction="row">
              <Stack alignItems="center" justifyContent="center" direction="row" backgroundColor="gray.100" borderRadius="md" padding={1}>
                <Button colorScheme="primary" variant="ghost" fontSize="2xl">{" "}-{" "}</Button>
                <Input minWidth={12} width={4} variant="unstyled" textAlign="center" value={0} />
                <Button colorScheme="primary" variant="ghost" fontSize="2xl">{" "}+{" "}</Button>
              </Stack>
              <Button width={256} size="lg" colorScheme="primary" leftIcon={<CartIcon color="white" />}>Add to Cart</Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}

export default App
