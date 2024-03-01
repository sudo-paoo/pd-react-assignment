import React from 'react';
import { 
    Stack,
    Heading,
    Text,
} from "@chakra-ui/react";

export default function Articles () {
    return (
        <Stack w='350px' spacing='24px'>
            <Heading textAlign='left'>You don’t have any likes yet</Heading>
            <Text textAlign='left'>Tap the heart on any post to show it some love. When you do, it’ll show up here.</Text>
        </Stack>
    );
}