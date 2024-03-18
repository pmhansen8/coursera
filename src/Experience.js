import {ChakraProvider, Heading, Text} from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import {BrowserRouter as router, routes, route, Link} from "react-router-dom";
import { Box, HStack } from "@chakra-ui/react";
import Card from "./components/Newcard";
import FullScreenSection from "./components/FullScreenSection";
import React from "react";
import photo1 from "./images/Army.jfif";
import photo2 from "./images/robloc.png";
import photo3 from "./images/cyber+.png";
import photo4 from "./images/security+.png";


const Ex = [
    {
        title: "Army",
        description:
            "My tenure in the Army has been an invaluable crucible, shaping me into a multifaceted individual endowed with a myriad of skills vital for both personal and professional growth. Foremost among these attributes is leadership—a quality ingrained in every facet of military life. Through commanding roles and challenging scenarios, I've honed my ability to inspire, motivate, and guide others towards shared objectives, fostering a culture of excellence and accountability.",
        imageSrc: photo1,
        url: "https://www.linkedin.com/in/patrick-hansen-69477526b/",
    },
    {
        title: "RDC @ UCF",
        description:
            "\n" +
            "As the Lead Scripter at the Roblox Development Club, I've taken on diverse responsibilities, from guiding students and leading workshops to organizing leadership meetings. Through these roles, I've acquired a versatile skill set, ranging from mentoring and facilitation to coordination and communication. This experience has honed my ability to support others effectively, foster collaboration, and drive initiatives forward.",
        imageSrc: photo2,
        url: "https://www.linkedin.com/in/patrick-hansen-69477526b/",
    },


]

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

            <Link to="/" style={{position: 'absolute', transform: 'translate(-400px)', margin: 0,  zIndex: 1}}>
                <Text fontSize="15" color="black">BACK</Text>
            </Link>

            <Box
                display="grid"
                gridTemplateColumns="repeat(2,minmax(0,1fr))"
                gridGap={20}
            >

                {Ex.map((EXP) => (
                    <Card
                        key={EXP.title}
                        title={EXP.title}
                        description={EXP.description}
                        imageSrc={EXP.imageSrc}
                        url = {EXP.url}
                    />
                ))}

            </Box>
        </FullScreenSection>
    )
}


