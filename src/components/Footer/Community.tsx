import React from 'react';
import {
  Box,
  Heading,
  Divider,
  Text,
  Wrap,
  Container,
} from '@chakra-ui/react';

const Community = () => {
  return (
    <Container maxW={'6xl'} p="12">
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
      </Box>
      <Heading as="h2" marginTop="5">
        Política de comunidade
      </Heading>
      <Divider marginTop="5" maxW="5xl"/>
      <Wrap spacing="30px" marginTop="5">
        <Text fontWeight={400} lineHeight={1.8} fontSize={'lg'}>
            As comunidades da Ducktors foram criadas para proporcionar às pessoas um espaço especial para se conectarem, compartilharem e ficarem mais próximas dos debates mais importantes para elas.
        <Text fontWeight={400} lineHeight={1.8} fontSize={'lg'}>
            As comunidades são criadas e administradas pelas pessoas na Ducktors – administradores e moderadores que implementam as regras da Comunidade e mantêm as conversas informativas, relevantes e agradáveis. As pessoas que aceitam os convites para participar da Comunidade tornam-se membros.
        <Text fontWeight={400} fontSize={'lg'}>
            As postagens nas comunidades podem ser vistos por qualquer pessoa na Ducktors, mas somente outros membros da própria comunidade podem se envolver e participar da discussão.
        </Text>
        </Text>
        </Text>
      </Wrap>
    </Container>
  );
};

export default Community;