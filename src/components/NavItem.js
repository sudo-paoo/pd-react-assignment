import React from 'react';
import { 
    Flex, 
    Text, 
    Icon, 
    Link 
} from '@chakra-ui/react';
export default function NavItem({ icon, title, active, navSize }) {
  return (
    <Flex
      mt={30}
      flexDir="column"
      w="100%"
      alignItems={navSize === 'small' ? 'center' : 'flex-start'}
    >
      <Link
        backgroundColor={active && '#20a4f4'}
        p={3}
        borderRadius={8}
        _hover={{ textDecor: 'none', backgroundColor: '#20a4f4', color: '#fff' }}
        w={navSize === 'large' && '100%'}
      >
        <Flex>
          <Icon as={icon} fontSize="xl" color="#5e6266" />
          <Text ml={5} display={navSize === 'small' ? 'none' : 'flex'} color="#5e6266">
            {title}
          </Text>
        </Flex>
      </Link>
    </Flex>
  );
}
