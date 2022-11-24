import React from 'react';
import {Box,Image,Flex} from "@chakra-ui/react";
function Login(props) {
    return (
        <Flex 
        direction="column"
        justifyContent="center"
        alignItems="center"
        >
        <Image 
            borderRadius="50%"
            boxSize='200px'
            src='profile.png'
            alt='Dan Abramov'
        />
        <Image 
            borderRadius="50%"
            boxSize='200px'
            src='profile.png'
            alt='Dan Abramov'
        />
        </Flex>
    );
}
export default Login;