import React from 'react';
import { useState } from 'react';
import {
  Flex,
  Box,
  chakra,
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
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';

import { FaEdit, FaTrash, FaPlus, FaSearch } from 'react-icons/fa';

export default function Home() {
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const boxColor = useColorModeValue("white", "gray.700");
  const tableHeadColor = useColorModeValue("gray.200", "gray.600");
  const headingColor = useColorModeValue("gray.600", "gray.200");

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
    <Box maxW="9xl" mx={'auto'} pt={5} ml={{ base: 0, md: 60 }} px={{ base: 2, sm: 12, md: 17 }}>
    <Flex
      w="100%"
      maxWidth='7xl'
      mx="auto"
      px={{ base: 2, sm: 12, md: 17 }}
      my="6"
      direction="column"
    >

    <chakra.h1
          textAlign={'left'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}>
          Users
    </chakra.h1>

      <Box
        flex="1"
        bg={boxColor}
        borderRadius="md"
      >

        <Flex
          justify="space-between"
          align="center"
          py="2"
        >
          <Flex
            flex="1"
            direction="row"
            align="center"
            borderColor={borderColor}
           >
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
            <Thead bg={tableHeadColor}>
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
    </Box>
  )
}