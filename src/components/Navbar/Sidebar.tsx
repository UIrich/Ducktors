import {
  Avatar,
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  Button,
  MenuList,
  Link,
  MenuDivider,
  MenuItem,
  useColorMode,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
import { FaClipboardCheck, FaRss } from "react-icons/fa";
import { FiUserX, FiMenu, FiSearch } from "react-icons/fi";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { HiCollection } from "react-icons/hi";
import { MdHome } from "react-icons/md";
import React from "react";

export default function App(){
  const sidebar = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue("gray.600", "gray.300");

  const NavItem = (props) => {
    const { icon, children, ...rest } = props;
    return (
      <Flex
        align="center"
        px="4"
        pl="4"
        py="3"
        cursor="pointer"
        color="inherit"
        _dark={{ color: "gray.400" }}
        _hover={{
          bg: "gray.100",
          _dark: { bg: "gray.900" },
          color: "gray.900",
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        {...rest}
      >
        {icon && (
          <Icon
            mx="2"
            boxSize="4"
            _groupHover={{
              color: color,
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
  };

  const SidebarContent = (props) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="white"
      _dark={{ bg: "gray.800" }}
      color="inherit"
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        <Text
          fontSize="2xl"
          ml="2"
          color="brand.500"
          _dark={{ color: "white" }}
          fontWeight="semibold"
        >
          Ducktors
        </Text>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <Link as={RouteLink} to='/admin/dashboard'><NavItem icon={MdHome}>Dashboard</NavItem></Link>
        <Link as={RouteLink} to='/admin/dashboard/users'><NavItem icon={FaRss}>Users</NavItem></Link>
        <Link as={RouteLink} to='/admin/dashboard/communities'><NavItem icon={HiCollection}>Community</NavItem></Link>
        <Link as={RouteLink} to='/admin/dashboard/posts'><NavItem icon={FaClipboardCheck}>Posts</NavItem></Link>
      </Flex>
    </Box>
  );
  return (
    <Box as="section">
      <SidebarContent display={{ base: "none", md: "unset" }} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="4"
          bg="white"
          _dark={{ bg: "gray.800" }}
          borderBottomWidth="1px"
          color="inherit"
          h="14"
        >
          <IconButton
            aria-label="Menu"
            display={{ base: "inline-flex", md: "none" }}
            onClick={sidebar.onOpen}
            icon={<FiMenu />}
            size="sm"
          />
          <InputGroup w="96" >
            <InputLeftElement color="gray.500">
              <FiSearch />
            </InputLeftElement>
            <Input placeholder="Pesquisar..." />
          </InputGroup>

          <Flex align="center">
          <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
            <Avatar
              size="sm"
              name="Admin"
              src="https://i.imgur.com/gcCkdGg.png"
              cursor="pointer"
            />
              </MenuButton>
              <MenuList>
                <MenuItem color="gray.600" fontWeight="semibold" _dark={{ color: "gray.400" }} as="a" href="#">
                <FiUserX/><Text mr='2'/>Sair
                </MenuItem>
                <MenuDivider />
                <MenuItem color="gray.600" fontWeight="semibold" _dark={{ color: "gray.400" }} onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                  <Text mr='2'/>Modo escuro
                </MenuItem>
              </MenuList>
            </Menu>

          </Flex>
        </Flex>

        <Box as="main" p="4">
          {/* Content */}
          <Box rounded="md" h="96" />
        </Box>
      </Box>
    </Box>
  );
};
