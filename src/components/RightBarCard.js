import React from 'react';
import {
    Box,
    Avatar,
    Text,
    Button
} from "@chakra-ui/react"
export default function RightBarCard({name, username}) {
    return (
        <Box display='flex' justifyContent='space-between'>
            <Box display='flex' gap='10px'>
                <Avatar name='J D'/>
                <Box display='flex' flexDirection='column'>
                    <Text fontWeight='bold'>{name}</Text>
                    <Text>@{username}</Text>
                </Box>
            </Box>
            <Button>Follow</Button>
         </Box>
    );
}