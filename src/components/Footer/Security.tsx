import React from 'react';
import {
  Box,
  Heading,
  Divider,
  Text,
  Wrap,
  SlideFade,
  Container,
} from '@chakra-ui/react';

const Security = () => {
  return (
    <Container maxW={'6xl'} p="12">
      <SlideFade in offsetX={60}>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
      </Box>
      <Heading as="h2" marginTop="5">
        Segurança
      </Heading>
      <Divider marginTop="5" maxW="5xl"/>
      <Wrap spacing="30px" marginTop="5">
        <Text 
        fontWeight={400}
        lineHeight={1.8}
        fontSize={'lg'}>
            A finalidade da Ducktors é proporcionar um espaço que pessoas possam compartilhar sua arte. Violência, assédio e outros tipos de comportamentos semelhantes impedem que as pessoas se expressem e diminuem o valor da arte. Nossas regras foram criadas para garantir que todas as pessoas possam participar da cultura com liberdade e segurança.
        </Text>
      </Wrap>
      </SlideFade>
    </Container>
  );
};

export default Security;