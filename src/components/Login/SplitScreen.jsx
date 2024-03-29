import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Image,
  } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

  export default function SplitScreen() {
    const [values, setValues] = useState();

    const navigate = useNavigate()

    const HandleChangeValues = (value) => {
        setValues(prevValue =>({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    };

    const HandleClickButton = () => {
        navigate('/admin/dashboard')
}

    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Faça acesso na sua conta</Heading>
            <FormControl>
              <FormLabel>E-mail</FormLabel>
              <Input type="email" name="email" id="email" placeholder="E-mail" onChange={HandleChangeValues} />
            </FormControl>
            <FormControl>
              <FormLabel>Senha</FormLabel>
              <Input type="password" name="senha" id="senha" placeholder="Senha" onChange={HandleChangeValues} />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
              </Stack>
              <Button type="button" colorScheme={'blue'} onClick={() => HandleClickButton()} variant={'solid'}>
                Logar
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
            }
          />
        </Flex>
      </Stack>
    );
  }