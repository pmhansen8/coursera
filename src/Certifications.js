import FullScreenSection from "./components/FullScreenSection";
import {Box, Heading} from "@chakra-ui/react";
import React from "react";

export const Certifications = () =>{
    return(
    <FullScreenSection
        backgroundColor="#14532d"
        isDarkBackground
        p={8}
        alignItems="flex-start"
        spacing={8}
    >
        <Heading as="h1" id="Experience-section" alignSelf = "center">
            Certifications
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