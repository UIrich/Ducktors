import React from 'react';
import {
  Box,
  Heading,
  Divider,
  Text,
  Wrap,
  Container,
} from '@chakra-ui/react';

const Terms = () => {
  return (
    <Container maxW={'6xl'} p="12">
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
      </Box>
      <Heading as="h2" marginTop="5">
        Termos de serviço
      </Heading>
      <Divider marginTop="5" maxW="5xl"/>
      <Wrap spacing="30px" marginTop="5">
        <Text 
        fontWeight={400}
        lineHeight={1.8}
        fontSize={'lg'}>
            Estes termos de serviço refletem a maneira como a Ducktors funciona, as leis que se aplicam à nossa empresa e determinados pontos em que sempre acreditamos. Como resultado, estes termos ajudam a definir a relação da Ducktors com você na medida da sua interação com os nossos serviços.
        </Text>

      </Wrap>
    </Container>
  );
};

export default Terms;