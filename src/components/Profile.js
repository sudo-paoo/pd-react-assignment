import React from 'react';
import { 
    Box,
    Icon,
    Heading,
    Text,
    Image,
    Avatar,
    Button, 
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel,   
    Stack
} from '@chakra-ui/react'
import { 
    BiArrowBack,
    BiCalendar
} from "react-icons/bi";
import banner from '../header.jpg';
import Post from './Post.js';
import Highlights from './Highlights.js';
import Articles from './Articles.js';
import Media from './Media.js';
import Likes from './Likes.js';
export default function Profile() {
    return (
        <Box className='main-container' w='50vw'>
            <Box 
            display='flex'
            alignItems='center'
            backgroundColor='#0b0b05'
            cursor='pointer'
            color='#fff'
            paddingTop='5px'
            paddingBottom='5px'
            paddingLeft='10px'>
                <Icon as={BiArrowBack} boxSize={30}/>
                <Box paddingLeft='25px'>
                    <Heading fontSize='22px'>Franco</Heading>
                    <Text textAlign='left'>5 posts</Text>
                </Box>
            </Box>

            <Box className='profile-container'>
                <Image src={banner} w="100%" h="200px"/>
                <Box className="avatar-container" display='flex' justifyContent='space-between' height='80px'>
                    <Avatar
                    className="profile-avatar"
                    size='2xl'
                    name='Paolo Franco'
                    border='4px'
                    borderColor='gray.200'
                    top="-50px"
                    left="15px"
                    />
                    <Button 
                    className="edit-btn"
                    backgroundColor='transparent'
                    borderColor="#536570"
                    border="1px"
                    borderRadius="30px"
                    cursor='pointer'
                    marginTop='10px'
                    _hover={{ textDecor: 'none', backgroundColor: '#181919', color: '#fff' }}
                    >Edit profile</Button>
                </Box>

                <Box className='info-container' display='flex' flexDirection='column' alignItems='start'>
                    <Box display='flex' flexDirection='column' alignItems='start' paddingBottom='10px'>
                        <Text fontWeight='bold' fontSize='18px'>Franco</Text>
                        <Text>@username</Text>
                    </Box>
                    <Text paddingBottom='10px'>Your bio</Text>
                    <Box display='flex' alignItems='center' gap='5px'>
                        <Icon as={BiCalendar}/>
                        <Text>Joined June 2005</Text>
                    </Box>
                    <Box display='flex' alignItems='center' gap='10px'>
                        <Text _hover={{cursor: 'pointer', textDecor: 'underline'}}>99 Following</Text>
                        <Text _hover={{cursor: 'pointer', textDecor: 'underline'}}>99 Followers</Text>
                    </Box>
                </Box>
            </Box>

            <Tabs isFitted>
                <TabList>
                    <Tab>Post</Tab>
                    <Tab>Replies</Tab>
                    <Tab>Highlights</Tab>
                    <Tab>Articles</Tab>
                    <Tab>Media</Tab>
                    <Tab>Likes</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Stack direction='column' spacing='24px'>
                            <Post alignItems='left' name="Franco" user="username" date="June 01, 2005" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed nulla enim. Fusce aliquam dictum ex. Pellentesque sit amet dapibus mi."/>
                            <Post alignItems='left' name="Franco" user="username" date="June 01, 2005" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed nulla enim. Fusce aliquam dictum ex. Pellentesque sit amet dapibus mi."/>
                            <Post alignItems='left' name="Franco" user="username" date="June 01, 2005" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed nulla enim. Fusce aliquam dictum ex. Pellentesque sit amet dapibus mi."/>
                            <Post alignItems='left' name="Franco" user="username" date="June 01, 2005" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed nulla enim. Fusce aliquam dictum ex. Pellentesque sit amet dapibus mi."/>
                            <Post alignItems='left' name="Franco" user="username" date="June 01, 2005" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed nulla enim. Fusce aliquam dictum ex. Pellentesque sit amet dapibus mi."/>
                        </Stack>
                    </TabPanel>

                    <TabPanel>
                        <Stack direction='column' spacing='24px'>
                            <Post alignItems='left' name="Franco" user="username" date="June 01, 2005" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed nulla enim. Fusce aliquam dictum ex. Pellentesque sit amet dapibus mi."/>
                            <Post alignItems='left' name="Franco" user="username" date="June 01, 2005" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed nulla enim. Fusce aliquam dictum ex. Pellentesque sit amet dapibus mi."/>
                            <Post alignItems='left' name="Franco" user="username" date="June 01, 2005" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed nulla enim. Fusce aliquam dictum ex. Pellentesque sit amet dapibus mi."/>
                            <Post alignItems='left' name="Franco" user="username" date="June 01, 2005" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed nulla enim. Fusce aliquam dictum ex. Pellentesque sit amet dapibus mi."/>
                            <Post alignItems='left' name="Franco" user="username" date="June 01, 2005" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed nulla enim. Fusce aliquam dictum ex. Pellentesque sit amet dapibus mi."/>
                        </Stack>
                    </TabPanel>

                    <TabPanel display='flex' alignItems='center' justifyContent='center'>
                        <Highlights />
                    </TabPanel>

                    <TabPanel display='flex' alignItems='center' justifyContent='center'>
                        <Articles />
                    </TabPanel>

                    <TabPanel display='flex' alignItems='center' justifyContent='center'>
                        <Media />
                    </TabPanel>

                    <TabPanel display='flex' alignItems='center' justifyContent='center'>
                        <Likes />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
}