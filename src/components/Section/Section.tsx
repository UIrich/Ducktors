import React from 'react';
import Article from './Article.js'
import ArticleWithImage from './ArticleWithImage.js';
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
    <Container maxW={'7xl'} p="12">
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
      </Box>
      <Heading as="h2" marginTop="5">
        Postagem mais lida
      </Heading>
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">
      <ArticleWithImage/>
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
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">
        <SimpleGrid columns={[2, null, 3]} spacing='40px'>
          <Box w="100%">
                <Article/>
          </Box>
          <Box w="100%">
                <Article/>
        </Box>
        <Box w="100%">
                <Article/>
        </Box>
        
          </SimpleGrid>
          <SimpleGrid columns={[2, null, 3]} spacing='40px'>
          <Box w="100%">
                <Article/>
          </Box>
          <Box w="100%">
                <Article/>
        </Box>
        <Box w="100%">
                <Article/>
        </Box>
          </SimpleGrid>
      </Wrap>
    </Container>
  );
};

export default ArticleList;