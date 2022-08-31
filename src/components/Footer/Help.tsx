import React from 'react';
import {
  Box,
  Heading,
  Divider,
  Text,
  Button,
  Wrap,
  Container,
} from '@chakra-ui/react';

const Help = () => {
  return (
    <Container maxW={'6xl'} p="12">
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
      </Box>
      <Heading as="h2" marginTop="5">
        Central de ajuda
      </Heading>
      <Divider marginTop="5" maxW="5xl"/>
      <Wrap spacing="30px" marginTop="5">
        <Text 
        fontWeight={400}
        lineHeight={1.8}
        fontSize={'lg'}>
            Como podemos ajudar você? Na central de ajuda da Ducktors, pesquise informações sobre como solucionar problemas, e saiba o que fazer se estiver com problemas para entrar novamente.

        </Text>
        <Button as={'a'} bg='blue.400' _hover={{bg: 'blue.600'}} color='white' href='/contact'>Obter ajuda</Button>
      </Wrap>
    </Container>
  );
};

export default Help;