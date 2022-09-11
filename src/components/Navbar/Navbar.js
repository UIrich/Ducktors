import React from 'react';
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  Menu,
  Avatar,
  MenuButton,
  MenuItem,
  MenuDivider,
  MenuList,
  Text,
  Link,
  useColorMode,
} from '@chakra-ui/react';
import { Link as RouteLink } from "react-router-dom";
import { QuestionIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import UnknownAvatarImage from '../../assets/grayduck.svg';

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue('white', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box mr='5'>
            <Text
            fontWeight={'bold'}>
            <Link as={RouteLink} to='/'>
            Ducktors
            </Link>
            </Text>
            </Box>
              <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'/login'}>
            Logar
          </Button>
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'blue.400'}
            href='/signup'
            _hover={{
              bg: 'blue.600',
            }}>
            Cadastrar
          </Button>
          <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={UnknownAvatarImage}
                />
              </MenuButton>
              <MenuList>
                <MenuItem as="a" href="/help">
                <QuestionIcon mr='2'></QuestionIcon>Central de ajuda
                </MenuItem>
                <MenuDivider />
                <MenuItem onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                  <Box p='8px'>Modo escuro</Box>
                </MenuItem>
              </MenuList>
            </Menu>
          </Stack>
          </Flex>
      </Box>

    </>
  );
}                                                                               