import React from 'react';
import { Heading, Box, VStack, HStack, Text } from "@chakra-ui/react";
import '../index.css';

const Testimonial = () => {
    return (
            <Box height="180px" width={{ sm: "300px", md: "180px", lg: "180px" }} gap="50px">
                <VStack backgroundColor="white" borderRadius={10}>
                    <Heading as='h2' size='lg'>Rating</Heading>
                    <Box backgroundColor="rgb(73,94,87)" width="60px"
                        height="60px"
                        borderRadius={5}
                        justifyContent="center"
                        alignItems="center"
                        display="flex"
                        color="rgb(244,206,20)"
                        fontWeight="bold"
                        fontSize={24}
                        >
                        4.5
                    </Box>
                    <Text>Ron Burgundy</Text>
                    <Text>"It's Perfect!"</Text>
                </VStack>
            </Box>
    )
}

const Testimonials = () => {
    return (
        <Box backgroundColor="rgb(73,94,87)"
            justifyContent="space-between"
            display="flex"
            pt={5}
            pb={8}
        >
            <VStack
                display="flex"
                justifyContent="space-between"
                ml={{ base: "1rem", sm: "1rem", md: "2rem", lg: "2rem" }}
                mr={{ base: "1rem", sm: "1rem", md: "2rem", lg: "2rem" }}
                flexDirection="column"
                zIndex={0}
                width="100%"
            >
                <Heading as="h1" id="Testimonials-section" fontSize={{ base: "25px", md: "30px", lg: "36px" }} color="white" pb={4}>
                    Testimonials
                </Heading>
                <HStack display="flex" 
                justifyContent="space-between"
                flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
                width={{ sm: "100%", md: "100%", lg: "80%" }}
                >
                    <Testimonial />
                    <Testimonial />
                    <Testimonial />
                    <Testimonial />

                </HStack>
            </VStack>
        </Box>
    )
}
export default Testimonials;