import React from 'react';
import { useState, useEffect } from 'react';
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
import GroupModal from './GroupModal.jsx';
import Axios from "axios";

import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});
  const [communities, setCommunities] = useState([]);
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const tableHeadColor = useColorModeValue("gray.200", "gray.600");

  const isMdVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  const asButton = useBreakpointValue({ base: IconButton, md: Button })

  function LoadCommunity() {
    Axios.get("http://localhost:5000/community/get").then((res) => {
      setCommunities(res.data.reverse());
    });
  }

  useEffect(() => {
    LoadCommunity();
  }, []);

  function DeleteCommunity(id_comunidade) {
    Axios.delete(`http://localhost:5000/community/delete/${id_comunidade}`).then(history.go(0));
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
          Groups
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
            size="sm"
            fontSize="sm"
            colorScheme="blue"
            leftIcon={<Icon as={FaPlus} fontSize="16" />}
            icon={<Icon as={FaPlus} fontSize="16" />}
            onClick={() => [setDataEdit({}), onOpen()]}
            title="Criar grupo"
          >
            {isMdVersion && <Text>Criar grupo</Text>}
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
                <Th>Nome</Th>
                {isMdVersion &&<Th></Th>}
                <Th width="8"></Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
            {communities.map((data, index) => (
                  <Tr key={index}>
                    <Td borderColor={borderColor}>{data.nome}</Td>
                    {isMdVersion && <Td borderColor={borderColor}></Td>}
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
                        onClick={()=>DeleteCommunity(data.id_comunidade)}
                        title="Apagar grupo"
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
        {isOpen && (
        <GroupModal
          isOpen={isOpen}
          onClose={onClose}
          data={data}
          setData={setData}
          dataEdit={dataEdit}
        />
      )}
      </Box>
    </Flex>
    </Box>
  )
}