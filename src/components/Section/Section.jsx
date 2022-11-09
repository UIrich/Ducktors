import React from 'react';
import Article from './Article.jsx'
import {
  Box,
  Heading,
  SimpleGrid,
  Divider,
  Wrap,
  WrapItem,
  Container,
} from '@chakra-ui/react';

const ArticleList = () => {
  return (
    <Container maxW={'6xl'} p="12">
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
      </Box>
      <Wrap spacing="30px" marginTop="5">
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
            </Box>
          </Box>
        </WrapItem>
      </Wrap>
      <Heading as="h2" marginTop="5">
        Postagens recentes
      </Heading>
      <Divider marginTop="5" maxW="5xl" />
      <Wrap spacing="30px" marginTop="5">
        <SimpleGrid minChildWidth='250px' spacing="70px">
                <Article/>
          </SimpleGrid>
      </Wrap>
    </Container>
  );
};

export default ArticleList;