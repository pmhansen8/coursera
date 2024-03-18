import FullScreenSection from "./components/FullScreenSection";
import {Box, Heading, Text} from "@chakra-ui/react";
import Card from "./components/Card";
import React from "react";
import {Link} from "react-router-dom";

export const Resume = () =>{
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

            <Link to="/" style={{position: 'absolute', transform: 'translate(-400px)', margin: 0,  zIndex: 1}}>
                <Text fontSize="15" color="black">BACK</Text>
            </Link>

            <Box
                display="grid"
                gridTemplateColumns="repeat(2,minmax(0,1fr))"
                gridGap={8}
            >


            </Box>
        </FullScreenSection>
    )
}