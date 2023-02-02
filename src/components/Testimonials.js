import React from 'react';
import { Heading, Box, VStack, HStack } from "@chakra-ui/react";
import '../index.css';

const Testimonial = () => {
    return (
        <HStack flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}>
            <VStack backgroundColor="white">
                <Heading >Rating</Heading>
                <Box backgroundColor="orange" width={10}
                    height={10}
                    borderRadius={5}
                    justifyContent="center"
                    alignItems="center"
                    display="flex">4.5
                </Box>
                <div className='t-name'>Ron Burgundy</div>
                <div className='t-review'>"It's Perfect!"</div>
            </VStack>
        </HStack>
    )
}

const Testimonials = () => {
    const scrollRef = React.useRef(null);
    return (
        <Box backgroundColor="rgb(73,94,87)"
            justifyContent="center"
            alignItems="flex-start"
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
            >
                <Heading as="h1" id="Testimonials-section" fontSize={{ base: "25px", md: "30px", lg: "36px" }} color="white" pb={4}>
                    Testimonials
                </Heading>
                <HStack display="flex" className='testimony'
                    flex={1}
                    alignItems="center"
                    justifyContent="flex-start"
                    flexDirection="row"
                    position="relative"
                    overflowX="scroll"
                    gap={5}
                    ref={scrollRef}
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