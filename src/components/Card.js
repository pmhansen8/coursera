import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {


  
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
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
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text color = "black">{description}</Text>
      </VStack>
      <HStack spacing={2} alignSelf="flex-end">
        <Text color = "black">Learn More</Text>
        <FontAwesomeIcon icon={faArrowRight} />
      </HStack>
    </VStack>

  );
};

export default Card;
