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
  Image,
  MenuDivider,
  MenuList,
  useColorMode,
} from '@chakra-ui/react';
import { getToken } from '../../contexts/TokenAuth.jsx';
import { Link as RouteLink } from "react-router-dom";
import { EditIcon, QuestionIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import AvatarImage from '../../assets/duck.svg';
import Logo from '../../assets/logo.svg';
import UnknownAvatarImage from '../../assets/grayduck.svg';

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  if(getToken()){
    return (
      <Box bg={useColorModeValue('white', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Box mr='5'>
          <RouteLink to="/">
          <Image src={Logo} w="10em"/>
          </RouteLink>
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
          href={'/'}>
          Sair
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
                src={AvatarImage}
              />
            </MenuButton>
            <MenuList>
              <MenuItem icon={<EditIcon/>} as="a" href={`/profile/${getToken().nick}`}>
              Perfil
              </MenuItem>
              <MenuItem icon={<QuestionIcon/>} as="a" href="/help">
              Central de ajuda
              </MenuItem>
              <MenuDivider />
              <MenuItem icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode}>
                Modo escuro
              </MenuItem>
            </MenuList>
          </Menu>
        </Stack>
        </Flex>
    </Box>
    );
  } else {
  return (
      <Box bg={useColorModeValue('white', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box mr='5'>
            <RouteLink to="/">
            <Image src={Logo} w="10em"/>
            </RouteLink>
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
                <MenuItem icon={<QuestionIcon/>} as="a" href="/help">
                Central de ajuda
                </MenuItem>
                <MenuDivider />
                <MenuItem icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode}>
                  Modo escuro
                </MenuItem>
              </MenuList>
            </Menu>
          </Stack>
          </Flex>
      </Box>
    );
  }
}                                                                               