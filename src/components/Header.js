import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:pmhansen8@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/patrick-hansen-69477526b/",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin ="0 auto"  >
        <HStack  px={16} py={4} justifyContent="space-between" alignItems="center"  >
           <Box as="nav" display="flex">
        {socials.map((social, index) => (
          <Box key={index} as="a" href={social.url} target="_blank" rel="noopener noreferrer" mx={4}>
            <FontAwesomeIcon icon={social.icon} />
          </Box>
        ))}
      </Box>
          <Box as= "nav" display = "flex" >
           <Box mx ={4}>
             <a href="#" onClick={handleClick("ProjectsSection")}>Projects</a>
            </Box >
            <Box mx ={4}>
            <a href="#" onClick={handleClick("contact")}>Contact me</a>
            </Box>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
