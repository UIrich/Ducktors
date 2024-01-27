import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Text,
    Link,
    Button,
    Heading,
    useColorModeValue,
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
  import { Link as RouteLink } from "react-router-dom";
  import { AxiosUser }  from '../../services/Axios.jsx';
  
  export default function SimpleCard() {
    const [values, setValues] = useState();

    const HandleChangeValues = (value) => {
        setValues(prevValue =>({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    };

    const HandleClickButton = () => {
      if(!values.email || !values.senha){
        console.error("Certifique de que preencheu todos os campos!");
    } else {
        new AxiosUser().AxiosLogin(values.email, values.senha)
    }
}

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Faça acesso na sua conta</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>E-mail</FormLabel>
                <Input type="email" name="email" id="email" placeholder="E-mail" maxlength="30" onChange={HandleChangeValues} />
              </FormControl>
              <FormControl>
                <FormLabel>Senha</FormLabel>
                <Input type="password" name="senha" id="senha" placeholder="Senha" maxlength="128" onChange={HandleChangeValues} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Lembre-me</Checkbox>
                </Stack>
                <Button
                  type="button"
                  onClick={() => HandleClickButton()}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Logar
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Não tem uma conta? <Link as={RouteLink} to='/signup' color={'blue.400'}>Cadastrar</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }