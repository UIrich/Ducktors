import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { Link as RouteLink, useNavigate } from "react-router-dom";
  import Axios from 'axios';
  import React from 'react';
  
  export default function SignupCard() {
    const [showPassword, setShowPassword] = useState(false);
    
    const [values, setValues] = useState();

    const navigate = useNavigate()

    const HandleSubmit = (e) => {
      e.preventDefault();
  };

    const HandleChangeValues = (value) => {
        setValues(prevValue =>({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    };

    const HandleClickButton = () => {
        Axios.post("http://localhost:5000/user/insert", {
          nick: values.nick,
          email: values.email,
          senha: values.senha
        }).then(navigate('/login', {replace: true}));
    }
  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Cadastrar
            </Heading>
          </Stack>
          <form onSubmit={HandleSubmit}>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
                  <FormControl isRequired>
                    <FormLabel>Nick</FormLabel>
                    <Input onChange={HandleChangeValues} type="text" autoComplete="username" name="nick" id="nick" placeholder='Nick'/>
                  </FormControl>
              <FormControl isRequired>
                <FormLabel>E-mail</FormLabel>
                <Input onChange={HandleChangeValues} type="email" autoComplete="current-email" name="email" id="email" placeholder="E-mail"/>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Senha</FormLabel>
                <InputGroup>
                  <Input onChange={HandleChangeValues} type={showPassword ? 'text' : 'password'} autoComplete="current-password" name="senha" id="senha" placeholder='Senha'/>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  onClick={()=>HandleClickButton()}
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Cadastrar
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Já é um usuário? <Link as={RouteLink} to='/login' color={'blue.400'}>Logar</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
          </form>
        </Stack>
      </Flex>
    );
  }