import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import photo from  "../images/IMG_8790.jpg";


const greeting = "Hello, I am Patrick!";
const bio1 = "A Software Engineer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >

      <VStack spacing={4} alignItems="center">
          <Avatar width = "200px" height = "200px" src={photo} />


          <Heading as="h1" color="white" size = "50%" >
        {greeting}
      </Heading>
      <Heading as="p" color="white" size="md" >
        {bio1}
      </Heading>
      <Heading as="p" color="white" size="md">
        {bio2}
  </Heading>

</VStack>
  </FullScreenSection>
);

export default LandingSection;
