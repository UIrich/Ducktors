import React from 'react';
import {
  Box,
  Heading,
  Divider,
  Text,
  Wrap,
  ListItem,
  UnorderedList,
  Container,
} from '@chakra-ui/react';

const Cookies = () => {
  return (
    <Container maxW={'6xl'} p="12">
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
      </Box>
      <Heading as="h2" marginTop="5">
        Política de cookies
      </Heading>
      <Divider marginTop="5" maxW="5xl"/>
      <Wrap spacing="30px" marginTop="5">
        <Text 
        lineHeight={1.8}
        fontWeight={400}
        fontSize={'lg'}>
          Cookies e tecnologias similares, como pixels e armazenamento local, te fornecem uma experiência melhor, mais rápida e segura na Ducktors. Cookies também são usados para operar nossos serviços, o que inclui nossos sites, aplicativos, pixels, código de incorporação e comunicações de e-mail. A Ducktors usa essas tecnologias, especificamente, para:
          <UnorderedList
          p={5}
          spacing={2}
          >
          <ListItem>Manter você conectado na Ducktors.</ListItem>
          <ListItem>Entregar recursos e funcionalidades dos serviços do Ducktors.</ListItem>
          <ListItem>Salvar e atender as suas preferências.</ListItem>
          <ListItem>Personalizar o conteúdo que você vê.</ListItem>
          <ListItem>Fornecer recursos de assinatura e distribuir determinados conteúdos.</ListItem>
          <ListItem>Entender como você interage com nossos serviços e em que podemos melhorar.</ListItem>
          <ListItem>Medir a eficiência de nossa publicidade e marketing.</ListItem>
          </UnorderedList>
        </Text>
      </Wrap>
    </Container>
  );
};

export default Cookies;