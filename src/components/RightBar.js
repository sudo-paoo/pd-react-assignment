import React from 'react';
import { 
    Heading,
    Stack,
    Card,
    CardBody
} from "@chakra-ui/react";
import RightBarCard from './RightBarCard';
export default function RightBar() {
    return (
        <Card w='100%' h='fit-content'  padding='10px'>
            <Heading>You might like</Heading>
            <CardBody>
                <Stack direction='column' spacing='24px'>
                    <RightBarCard name="John Doe" username="johndoe123"/>
                    <RightBarCard name="Jane Doe" username="janedoe456"/>
                    <RightBarCard name="Jana Doe" username="janadoe789"/>
                    <RightBarCard name="Jani Doe" username="janidoe012"/>
                    <RightBarCard name="Jona Doe" username="jonadoe345"/>
                    <RightBarCard name="June Doe" username="junedoe678"/>

                </Stack>
            </CardBody>
        </Card>
    );
}