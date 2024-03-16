import {Box, Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {useState} from "react";

const Card = ({ title, description, imageSrc, url }) => {

const [colors, setcolors] = useState("black")
  

  return (
     <VStack
      bg="white"
      borderRadius="md"
      boxShadow="md"
      p={4}
      spacing={4}
      maxW="300px"
    >
      <Image color = "black" src={imageSrc} alt={title} borderRadius="md" />
      <VStack spacing={2} alignItems="flex-start">
        <Heading as="h3" size="md" color = "black">
          {title}
        </Heading>
        <Text color = "black">{description}</Text>
      </VStack>
      <HStack spacing={2} alignSelf="flex-end" >
        <a href={url} target="_blank" rel="noopener noreferrer"  >
        <Text  color = {colors} cursor ="pointer"  _hover={{ color: 'blue' }}>  Learn More</Text>
      </a>
        <FontAwesomeIcon icon={faArrowRight} />
      </HStack>
    </VStack>

  );
};

export default Card;
