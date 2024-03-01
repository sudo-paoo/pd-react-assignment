import React from 'react';
import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardFooter,
  Icon,
  Text,
  Stack
} from '@chakra-ui/react';
import {
  BiMessageRounded,
  BiHeart,
  BiRepost,
  BiBarChart,
  BiBookmark
} from 'react-icons/bi';

export default function Post({ name, user, date, description }) {
  return (
    <Card>
        <CardBody>
            <Stack direction="row" gap="15px">
              <Avatar size="lg" name="Paolo Franco" />
              <Stack>
                  <Box
                  display="flex"
                  direction="row"
                  alignItems="center"
                  marginBottom="2"
                  gap='10px'
                  >
                  <Text fontWeight="500">{name}</Text>
                  <Text>@{user}</Text>
                  <Text>·</Text>
                  <Text>{date}</Text>
                  </Box>
                  <Text textAlign='left'>{description}</Text>
              </Stack>
            </Stack>
        </CardBody>
        <CardFooter display="flex" justifyContent="space-around">
            <Icon as={BiMessageRounded} boxSize={5} cursor="pointer" />
            <Icon as={BiRepost} boxSize={5} cursor="pointer" />
            <Icon as={BiHeart} boxSize={5} cursor="pointer" />
            <Icon as={BiBarChart} boxSize={5} cursor="pointer" />
            <Icon as={BiBookmark} boxSize={5} cursor="pointer" />
        </CardFooter>
    </Card>
  );
}