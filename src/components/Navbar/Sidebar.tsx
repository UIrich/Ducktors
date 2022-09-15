import {
  Avatar,
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Divider,
  Button,
  Link,
  useColorMode,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
import { FaUserTimes, FaClipboardCheck, FaUserAlt } from "react-icons/fa";
import { FiMenu, FiSearch } from "react-icons/fi";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { HiUserGroup } from "react-icons/hi";
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
        <Link as={RouteLink} to='/admin/dashboard/users'><NavItem icon={FaUserAlt}>Users</NavItem></Link>
        <Link as={RouteLink} to='/admin/dashboard/groups'><NavItem icon={HiUserGroup}>Groups</NavItem></Link>
        <Link as={RouteLink} to='/admin/dashboard/posts'><NavItem icon={FaClipboardCheck}>Posts</NavItem></Link>
        <Divider mt={2}/>
        <NavItem icon={FaUserTimes}>Log out</NavItem>
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
            mr='3'
            aria-label="Menu"
            display={{ base: "inline-flex", md: "none" }}
            onClick={sidebar.onOpen}
            variant="ghost"
            icon={<FiMenu />}
            size="md"
          />

          <Box w="96" >
          </Box>

          <Flex align="center">
          <Button variant='ghost' mr="3" ml="2" onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            <Avatar
              size="sm"
              name="Admin"
              rounded={'full'}
              src="https://i.imgur.com/gcCkdGg.png"
              cursor="pointer"
            />
          </Flex>
        </Flex>
        </Box>
      </Box>
  );
};
