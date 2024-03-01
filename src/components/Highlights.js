import React from 'react';
import { 
    Stack,
    Heading,
    Text,
    Button
} from "@chakra-ui/react";

export default function Highlights () {
    return (
        <Stack w='350px' spacing='24px'>
            <Heading textAlign='left'>Highlight on your profile</Heading>
            <Text textAlign='left'>You must be subscribed to Premium to highlight posts on your profile.</Text>
            <Button colorScheme='twitter'>Subscribe to Premium</Button>
        </Stack>
    );
}