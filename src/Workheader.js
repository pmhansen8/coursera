import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import photo1 from "./images/robloc.png";
import photo2 from "./images/Java.png";
import photo3 from "./images/Project.png";
import Card from "./components/Newcard";




const Newheader = () => {
    return (
        <Box
            zIndex={1}
            position="fixed"
            top={0}
            left={0}
            right={0}
            translateY={0}
            transitionProperty="transform"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
            backgroundColor="#18181b"
            height="60px"
            display="flex"
            justifyContent="center"
            alignItems="center"

        >
            <Box
                position="absolute"
                display="flex"
                justifyContent="center"
                color="white"
            >
                <Text fontSize="30">WORK</Text>
            </Box>

            <Box color="white" maxWidth="1280px" width="100%" display="flex">

                <Box as="nav" display="flex" width="100%">
                    <Box as="div" mx={4}>
                        <Text textStyle="bold" color="white">
                            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Back
                            </Link>

                        </Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Newheader;
