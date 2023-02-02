import { Heading, Text, HStack, Spacer, Flex, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const TopMenu = ({ title, price, subtitle, desc }) => {
    return (
    <Box
       color="rgb(51,51,51)"
       backgroundColor="rgb(217,217,217)"
       cursor="pointer"
       size={{base: "auto", md: "auto", lg:"auto"}}
       spacing={15} p={10}
    >
         <Flex>
           <Heading as="h3" size={{base: "sm", md: "md", lg:"md"}}>
             {title}
           </Heading>
           <Spacer />
           <Heading as="h4" size={{base: "sm", md: "md", lg:"md"}} color="rgb(238,153,114)">
             {price}
           </Heading>
         </Flex>
         <Text color="#64748b" size={{base: "sm", md: "md", lg:"lg"}}>
           {desc}
         </Text>
         <HStack spacing={7}>
          <Heading
            fontFamily="Karla"
            fontSize="lg"
            color="#333333">{subtitle}
          </Heading>
           <FontAwesomeIcon icon={faMotorcycle} size="1x" />
         </HStack>
     </Box>
  )
}

export default TopMenu;