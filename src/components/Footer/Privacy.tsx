import React from 'react';
import {
  Box,
  Heading,
  Divider,
  Text,
  Link,
  Wrap,
  SlideFade,
  Container,
} from '@chakra-ui/react';
import { Link as RouteLink } from "react-router-dom";

const Privacy = () => {
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
        Política de privacidade
      </Heading>
      <Divider marginTop="5" maxW="5xl"/>
      <Wrap spacing="30px" marginTop="5">
        <Text fontWeight={400} lineHeight={1.8} fontSize={'lg'}>
            A Ducktors é pública e as postagens são imediatamente visíveis e pesquisáveis por qualquer pessoa em todo o mundo.
        <Text fontWeight={400} lineHeight={1.8} fontSize={'lg'}>
            Quando você usar a Ducktors, mesmo que esteja somente olhando postagens, recebemos algumas informações pessoais de você, como o tipo de dispositivo que você está usando e o seu endereço IP.
        <Text fontWeight={400} lineHeight={1.8} fontSize={'lg'}>
            Além das informações que você compartilha conosco, usamos suas postagens, o conteúdo que você leu e outras informações para determinar em quais tópicos você está interessado.
        <Text fontWeight={400} fontSize={'lg'}>
            Se você tiver dúvidas sobre esta política, sobre como coletamos ou processamos seus dados pessoais ou sobre qualquer outra coisa relacionada a nossas práticas de privacidade, gostaríamos de saber a sua opinião. Você pode <Link as={RouteLink} to='/contact' color='blue.400'>entrar em contato conosco</Link> a qualquer momento.
        </Text>
        </Text>
        </Text>
        </Text>
      </Wrap>
      </SlideFade>
    </Container>
  );
};

export default Privacy;