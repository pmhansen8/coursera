import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import photo from  "../images/IMG_8790.jpg";


const greeting = "Hello, I am Patrick!";
const bio1 = "About me:";
const bio2 = "As a dedicated and highly motivated Army soldier, I bring with me a proven track record of commitment, discipline, and a strong sense of duty. With an active Secret security clearance, I have demonstrated trustworthiness and reliability in handling sensitive information and executing tasks with precision and confidentiality.\n" +
    "\n" +
    "My educational background encompasses a major in Information Technology, where I've cultivated a deep understanding of various facets within the field. From software development to system administration, I've honed my skills to adapt to dynamic technological landscapes. Moreover, my minor in Security in Computing and Networks has provided me with specialized knowledge in safeguarding systems, identifying vulnerabilities, and implementing robust security protocols. ";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"

  >

      <VStack spacing={4} alignItems="center" >
          <Avatar width = "200px" height = "200px" src={photo} />


          <Heading as="h1" color="white" size = "50%" >
        {greeting}
      </Heading>
      <Heading as="p" color="white" size="md" >
        {bio1}
      </Heading>
      <Heading as="p" color="white" size = "8%"  >
        {bio2}
  </Heading>

</VStack>
  </FullScreenSection>
);

export default LandingSection;
