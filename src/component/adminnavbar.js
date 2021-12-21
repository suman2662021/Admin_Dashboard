import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Heading,
  MenuList,
  FormControl,
  FormLabel,
  Input,
  Select
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';


export default function Adminnavbar() {

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} marginBottom={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box><Heading>admin@gmail.com</Heading></Box>
          </HStack>
          <Flex alignItems={'center'}>
          <Menu>
            <MenuButton>
                <Button
                    variant={'solid'}
                    colorScheme={'teal'}
                    size={'sm'}
                    mr={4}
                    leftIcon={<AddIcon />}>
                    Add users
                </Button>
            </MenuButton>
            <MenuList>
                <FormControl isRequired m={1} p={4}>
                    <FormLabel htmlFor='user-name'>User name</FormLabel>
                    <Input id='User-name' placeholder='User name' />
                </FormControl>
                <FormControl isRequired m={1} p={4}>
                    <FormLabel htmlFor='Email'>User Email</FormLabel>
                    <Input id='Email' placeholder='User Email' />
                </FormControl>
                <FormControl m={1} p={4}>
                    <FormLabel htmlFor='plan'>Plan</FormLabel>
                    <Select id='plan' placeholder='Select plan'>
                        <option>Free</option>
                        <option>Basic</option>
                        <option>Premium</option>
                        <option>Professional</option>
                    </Select>
                </FormControl>
            <Button marginTop={4} marginLeft={3} color={'white'} bg={'blue.400'}>Submit</Button>
        </MenuList>
    </Menu>
            
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://cdn1.vectorstock.com/i/1000x1000/71/90/blank-avatar-photo-icon-design-vector-30257190.jpg'
                  }
                />
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}