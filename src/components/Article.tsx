import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  Container,
} from '@chakra-ui/react';

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="blue" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://i.pinimg.com/474x/42/e3/b5/42e3b5d28b8754b17c4f6b9937dc615e.jpg"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

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
        Postagens recentes
      </Heading>
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  src={
                    'https://occ-0-586-590.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfgIGiaJ-tp1c4rvM6Z-RKoCamah-7EBQmlf3FY818saiYEQvlgzzrcTZ8i0sqbzoh34jUNGjSDbWALY6NKG2n31MvAl-34ZgORe.jpg?r=12f'
                  }
                  alt="Trigun"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Link>
            </Box>
            <BlogTags tags={['Anime']} marginTop="3" />
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Um clássico dos animes
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
            Trigun é um anime de 1998, adaptado do mangá de Yasuhiro Nightow, é um western de ficção científica e rock'n roll, e um clássico amado por muitos fãs.
            </Text>
            <BlogAuthor 
              name="Ulrich"
              date={new Date('2022-06-08T19:01:27Z')}
            />
          </Box>
        </WrapItem>
      </Wrap>
    </Container>
  );
};

export default ArticleList;