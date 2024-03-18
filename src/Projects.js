import FullScreenSection from "./components/FullScreenSection";
import {Box, Heading, Text} from "@chakra-ui/react";
import Card from "./components/Newcard";
import React from "react";
import {Link} from "react-router-dom";
import photo1 from "./images/robloc.png";
import photo2 from "./images/Java.png";
import photo3 from "./images/Project.png";


const Proj = [
    {
        title: "Roblox Game",
        description:
            "Video game which implemented Scripting and GUI that received 700 visits.",
        imageSrc: photo1,
        url: "",
    },
    {
        title: "Java IDE",
        description:
            "Java GUI that creates randomized gameboard which can open other gameboards or save current gameboard.",
        imageSrc: photo2,
        url: "https://github.com/pmhansen8/JAVA",
    },
    {
        title: "Website",
        description:
            "Created fully functioning website through coursera course for restaurant.",
        imageSrc: photo3,
        url: "https://github.com/pmhansen8/react-project",
    },

];
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
            Projects
        </Heading>

        <Link to="/" style={{position: 'absolute', transform: 'translate(-400px)', margin: 0,  zIndex: 1}}>
            <Text fontSize="15" color="black">BACK</Text>
        </Link>

        <Box
            display="grid"
            gridTemplateColumns="repeat(2,minmax(0,1fr))"
            gridGap={20}
        >

            {Proj.map((proj) => (
                <Card
                    key={proj.title}
                    title={proj.title}
                    description={proj.description}
                    imageSrc={proj.imageSrc}
                    url = {proj.url}
                />
            ))}


        </Box>
    </FullScreenSection>
    )
}