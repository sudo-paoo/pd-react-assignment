import React from 'react';
import { 
    Stack,
    Heading,
    Text,
} from "@chakra-ui/react";

export default function Articles () {
    return (
        <Stack w='350px' spacing='24px'>
            <Heading textAlign='left'>Lights, camera … <br></br>attachments!</Heading>
            <Text textAlign='left'>When you post photos or videos, they will show up here.</Text>
        </Stack>
    );
}