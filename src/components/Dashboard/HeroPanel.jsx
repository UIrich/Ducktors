import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
} from '@chakra-ui/react';

export default function CallToActionWithAnnotation() {
  return (
    <>
    <Box maxW="9xl" mx={'auto'} pt={5} ml={{ base: 0, md: 60 }} px={{ base: 2, sm: 12, md: 17 }}>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Bem-vindo ao painel administrativo! 
            <Text as={'span'} color={'blue.400'}>
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Por meio desse painel, é possível gerenciar conteúdo escrito e visual, mídias adicionadas no site.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
          </Stack>
        </Stack>
      </Container>
      </Box>
    </>
  );
}