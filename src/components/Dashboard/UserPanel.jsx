import React from 'react';
import { useEffect, useState } from 'react';
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
  Button,
  IconButton,
  useDisclosure,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';
import UserModal from './UserModal.jsx';
import Axios from 'axios';

import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [dataEdit, setDataEdit] = useState({});

  const borderColor = useColorModeValue("gray.200", "gray.600");
  const tableHeadColor = useColorModeValue("gray.200", "gray.600");

  const isLgVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const isMdVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  const asButton = useBreakpointValue({ base: IconButton, md: Button })

  function LoadUsers() {
    Axios.get("http://localhost:5000/user/get").then((res) => {
      setUsers(res.data.reverse());
    });
  }

  useEffect(() => {
    LoadUsers();
  }, []);

  function DeleteUser(id_user) {
    Axios.delete(`http://localhost:5000/user/delete/${id_user}`).then(history.go(0));
  }

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
            onClick={() => [setDataEdit({}), onOpen()]}
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
                <Th width="8"></Th>
                <Th width="8"></Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
                {users.map((data, index) => (
                  <Tr key={index}>
                    <Td borderColor={borderColor}>{data.nick}</Td>
                    {isMdVersion && <Td borderColor={borderColor}>{data.email}</Td>}
                    {isLgVersion && <Td borderColor={borderColor}></Td>}
                    <Td borderColor={borderColor}>
                    </Td>
                    <Td borderColor={borderColor}>
                      <Button
                        as={asButton}
                        variant="outline"
                        size="sm"
                        fontSize="sm"
                        leftIcon={<Icon as={FaTrash} fontSize="16" />}
                        icon={<Icon as={FaTrash} fontSize="16"/>}
                        onClick={()=>DeleteUser(data.id_user)}
                        title="Apagar usuário"
                      >
                        {isMdVersion && <Text>Apagar</Text>}
                      </Button>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
              <Tfoot>
                <Tr>
                </Tr>
              </Tfoot>
          </Table>
        </Box>
      </Box>
      {isOpen && (
        <UserModal
          isOpen={isOpen}
          onClose={onClose}
          data={data}
          setData={setData}
          dataEdit={dataEdit}
        />
      )}
    </Flex>
    </Box>
  )
}