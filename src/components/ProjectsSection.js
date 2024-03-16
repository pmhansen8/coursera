import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import photo1 from "../images/Army.jfif";
import photo2 from "../images/Project.png";
import photo3 from "../images/certificate.jpeg";
import photo4 from "../images/photo4.jpg";

const projects = [
  {
    title: "Work",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    imageSrc: photo1,
    url: "https://github.com",
  },
  {
    title: "Projects",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    imageSrc: photo2,
    url: "https://github.com",
  },
  {
    title: "Certifications",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    imageSrc: photo3,
    url: "https://github.com",
  },
  {
    title: "Resume",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    imageSrc: photo4,
    url: "https://github.com",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section" alignSelf = "center">
        Experience
      </Heading>
      
      <Box 
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        
        {projects.map((project) => (
           <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            url = {project.url}
          />
            
         
          
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;