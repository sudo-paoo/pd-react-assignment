import React from 'react';
import { 
    Stack,
    Heading,
    Text,
    Button
} from "@chakra-ui/react";

export default function Articles () {
    return (
        <Stack w='350px' spacing='24px'>
            <Heading textAlign='left'>Write Articles on X</Heading>
            <Text textAlign='left'>You must be subscribed to Premium+ to write Articles on X</Text>
            <Button colorScheme='twitter'>Upgrade to Premium+</Button>
        </Stack>
    );
}