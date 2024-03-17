import {ChakraProvider, Heading} from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import {BrowserRouter as router, routes, route} from "react-router-dom";
import { Box, HStack } from "@chakra-ui/react";
import Card from "./components/Card";
import FullScreenSection from "./components/FullScreenSection";
import React from "react";

export const Experience = () =>{
    return(
        <FullScreenSection
            backgroundColor="#14532d"
            isDarkBackground
            p={8}
            alignItems="flex-start"
            spacing={8}
        >
            <Heading as="h1" id="Experience-section" alignSelf = "center">
                Work
            </Heading>

            <Box
                display="grid"
                gridTemplateColumns="repeat(2,minmax(0,1fr))"
                gridGap={8}
            >


            </Box>
        </FullScreenSection>
    )
}


