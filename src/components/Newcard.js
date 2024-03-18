import {Box, Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";

import React from "react";
import {useState} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {experience} from "../Experience.js";

const Card = ({ title, description, imageSrc, url }) => {

    const [colors, setcolors] = useState("black")


    return (
        <VStack
            bg="white"
            borderRadius="10"
            boxShadow="md"
            p={4}
            spacing={4}
            maxW="300px"
        >
            <Image color = "black" src={imageSrc} alt={title} borderRadius="md" maxWidth= "300px" maxHeight="280px"/>
            <VStack spacing={2} alignItems="flex-start">
                <Heading as="h3" size="md" color = "black">
                    {title}
                </Heading>
                <Text color = "black">{description}</Text>
            </VStack>
            <HStack spacing={2} alignSelf="flex-end" >
                <Link to ={url}  >
                    <Text  color = {colors} cursor ="pointer"  _hover={{ color: 'blue' }}>  Learn More</Text>
                </Link>

            </HStack>
        </VStack>

    );
};

export default Card;
