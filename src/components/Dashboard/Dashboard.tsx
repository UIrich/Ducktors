import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { useState } from 'react';
import {
  Flex,
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Icon,
  Text,
  Input,
  Button,
  IconButton,
  useColorMode,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FaEdit, FaTrash, FaPlus, FaSearch } from 'react-icons/fa';

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const [valueSearch, setValueSearch] = useState('');

  const isLgVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const isMdVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  const asButton = useBreakpointValue({ base: IconButton, md: Button })

  return (
    <Flex
      w="100%"
      maxWidth={1220}
      mx="auto"
      px="6"
      my="6"
      direction="column"
    >
      <Button
        maxWidth={120}
        my="4"
        ml="auto"
        colorScheme="gray"
        onClick={toggleColorMode}
      >
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>

      <Box
        flex="1"
        p="4"
        bg={colorMode === "light" ? "white" : "gray.700"}
        borderRadius="md"
      >
        <Heading
          py="2"
          fontSize={["sm", "lg", "xl"]}
          fontWeight="black"
          color={colorMode === "light" ? "gray.600" : "gray.200"}
        >
          Gerenciador de usuários
        </Heading>

        <Flex
          justify="space-between"
          align="center"
          py="2"
        >
          <Flex
            flex="1"
            direction="row"
            align="center"
            border="1px"
            borderRadius="md"
            borderColor={borderColor}
           >
            <IconButton
              size="sm"
              borderRadius="0"
              aria-label="pesquisar-usuario"
              icon={<Icon as={FaSearch} fontSize="16" />}
            />

            <Input
              size="sm"
              border="0"
              focusBorderColor="blue.500"
              placeholder="Pesquisar..."
              value={valueSearch}
            />
          </Flex>

          <Button
            as={asButton}
            ml="4"
            size="sm"
            fontSize="sm"
            colorScheme="blue"
            leftIcon={<Icon as={FaPlus} fontSize="16" />}
            icon={<Icon as={FaPlus} fontSize="16" />}
            title="Cadastrar usuário"
          >
            {isMdVersion && <Text>Novo usuário</Text>}
          </Button>
        </Flex>

        <Box
          border="1px"
          borderRadius="sm"
          borderColor={borderColor}
        >
          <Table size="sm">
            <Thead bg={colorMode === "light" ? "gray.200" : "gray.600"}>
              <Tr>
                <Th>Nick</Th>
                {isMdVersion && <Th>E-mail</Th>}
                {isLgVersion && <Th>Senha</Th>}
                <Th width="8"></Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
                  <Tr>
                    <Td borderColor={borderColor}></Td>
                    {isMdVersion && <Td borderColor={borderColor}></Td>}
                    {isLgVersion && <Td borderColor={borderColor}></Td>}
                    <Td borderColor={borderColor}>
                      <Button
                        as={asButton}
                        variant="outline"
                        size="sm"
                        fontSize="sm"
                        leftIcon={<Icon as={FaEdit} fontSize="16"/>}
                        icon={<Icon as={FaEdit} fontSize="16"/>}
                        title="Editar usuário"
                      >
                        {isMdVersion && <Text>Editar</Text>}
                      </Button>
                    </Td>
                    <Td borderColor={borderColor}>
                      <Button
                        as={asButton}
                        variant="outline"
                        size="sm"
                        fontSize="sm"
                        leftIcon={<Icon as={FaTrash} fontSize="16" />}
                        icon={<Icon as={FaTrash} fontSize="16"/>}
                        title="Apagar usuário"
                      >
                        {isMdVersion && <Text>Apagar</Text>}
                      </Button>
                    </Td>
                  </Tr>
            </Tbody>
              <Tfoot>
                <Tr>
                </Tr>
              </Tfoot>
          </Table>
        </Box>
      </Box>
    </Flex>
  )
}