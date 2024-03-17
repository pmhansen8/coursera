import FullScreenSection from "./components/FullScreenSection";
import {Box, Heading} from "@chakra-ui/react";
import Card from "./components/Card";
import React from "react";

export const Projects = () =>{
    return(
        <FullScreenSection
            backgroundColor="#512DA8"
            isDarkBackground
            p={8}
            alignItems="flex-start"
            spacing={8}
        >
            <Heading as="h1" id="Experience-section" alignSelf = "center">
                Resume
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