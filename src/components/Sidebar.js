import React, { useState } from 'react'
import {
    Flex,
    Text,
    Divider,
    Avatar,
    Heading
} from '@chakra-ui/react'
import {
    FiHome,
    FiUser,
    FiSearch,
    FiBell,
    FiMail,
    FiList
} from 'react-icons/fi'
import NavItem from './NavItem'

export default function Sidebar() {
    const [navSize] = useState("large")
    return (
        <Flex
            position="sticky"
            left="5"
            h="100%"
            // boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize == "small" ? "15px" : "30px"}
            w={navSize == "small" ? "75px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as="nav"
            >
                <NavItem navSize={navSize} icon={FiHome} title="Home" />
                <NavItem navSize={navSize} icon={FiSearch} title="Explore" />
                <NavItem navSize={navSize} icon={FiBell} title="Notifications" />
                <NavItem navSize={navSize} icon={FiMail} title="Messages" />
                <NavItem navSize={navSize} icon={FiList} title="Lists" />
                <NavItem navSize={navSize} icon={FiUser} title="Profile" active/>
            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                mb={4}
            >
                <Divider display={navSize == "small" ? "none" : "flex"} />
                <Flex mt={4} align="center">
                    <Avatar size="sm"/>
                    <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
                        <Heading as="h3" size="sm" color="#5e6266">Franco</Heading>
                        <Text color="gray">@username</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}