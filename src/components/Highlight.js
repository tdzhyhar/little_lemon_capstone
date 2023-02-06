import React from 'react';
import LL_greeksalad from "./images/LL_greeksalad.png";
import LL_bruschetta from "./images/LL_bruschetta.png";
import LL_pasta from "./images/LL_pasta.png";
import { Heading, Box, Button, Image, VStack, HStack } from "@chakra-ui/react";
import TopMenu from './TopMenu';

const Highlight = () => {

    return (
        <Box>
            <HStack
                display="flex"
                justifyContent="space-between"
                ml={{ base: "1rem", sm: "1rem", md: "7rem", lg: "10rem" }}
                mr={{ base: "1rem", sm: "1rem", md: "7rem", lg: "10rem" }}
                flexDirection={{ base: "column", md: "row", lg: "row" }}
                p={4}
            >
                <Heading as="h1" id="Menu-section" fontSize={{ base: "25px", md: "30px", lg: "36px" }} color="rgb(51,51,51)">
                    This Weeks Specials!
                </Heading>
                <a href="#Menu">
                    <Button zIndex={0} fontSize={{ base: "16px", md: "19px", lg: "22px" }}
                        color="#333333" fontWeight="bold"
                        backgroundColor="rgb(244,206,20)"
                        w={200}
                        borderRadius={10}
                        id="Order Online">Order Online</Button>
                </a>
            </HStack>
            <HStack
                mt={{ base: "auto", md: '1rem', lg: '2rem' }}
                mb={{ base: "auto", md: '1rem', lg: '2rem' }}
                ml={{ base: "auto", sm: "1rem", md: "4rem", lg: "10rem" }}
                mr={{ base: "auto", sm: "1rem", md: "4rem", lg: "10rem" }}
                flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
                spacing={{ base: 'auto', md: "auto", lg: 2 }}
                gap={7}
                display="flex"
                flex={1}
                cursor="pointer"
                position="relative"
                overflowX="auto"
                zIndex={0}
            >
                <VStack
                    backgroundColor="rgb(217,217,217)"
                    display="flex"
                    alignItems="center"
                    _hover={{ opacity: "80%" }}
                    width="100%"
                    borderRadius={20}
                >
                    <Image
                        display="flex"
                        width="auto"
                        borderTopRadius={20}
                        src={LL_greeksalad}
                        alt="Greek Salad"
                        objectFit="cover"
                        height={300}
                    />
                    <TopMenu
                        title='Greek Salad'
                        subtitle="Order a delivery"
                        desc='The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
                        price="$12.99"
                    />
                </VStack>
                <VStack
                    backgroundColor="rgb(217,217,217)"
                    borderRadius={35}
                    display="flex"
                    alignItems="center"
                    _hover={{ opacity: "80%" }}
                    width="100%"
                >
                    <Image
                        borderTopRadius={20}
                        src={LL_bruschetta}
                        alt="bruschetta"
                        width="auto"
                        objectFit="cover"
                        height={300}
                    />
                    <TopMenu
                        title='Bruschetta'
                        subtitle="Order a delivery"
                        desc='Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with choptomatoes,bazil.'
                        price="$7.99"
                    />
                </VStack>
                <VStack
                    backgroundColor="rgb(217,217,217)"
                    borderRadius={35}
                    display="flex"
                    alignItems="center"
                    _hover={{ opacity: "80%" }}
                    width="100%"

                >
                    <Image
                        borderTopRadius={20}
                        src={LL_pasta}
                        alt="pasta"
                        width="auto"
                        height={300}
                        objectFit="cover"
                    />
                    <TopMenu
                        title='Pasta'
                        subtitle="Order a delivery"
                        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare and Lorem ipsumconsectetur adipiscing elit. Aliquet nec in ornare.'
                        price="$18.99"
                    />
                </VStack>
            </HStack>
        </Box>
    )
}

export default Highlight;