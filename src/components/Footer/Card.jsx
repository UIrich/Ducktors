import {
    Heading,
    Avatar,
    Box,
    Text,
    SimpleGrid,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function SocialProfileSimple() {
    return (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3}} maxChildWidth='6xl' spacing='3em'>
        <Box
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'md'}
          rounded={'lg'}
          p={6}
          maxW="6xl"
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={
              'https://i.imgur.com/HRDAYZp.png'
            }
            alt={'Avatar'}
            mb={4}
            pos={'relative'}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            Ana Clara de Moraes
          </Heading>
          <Text fontWeight={600} color={'gray.500'}>
            @pacxmg
          </Text>
        </Box>

        <Box
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'md'}
          rounded={'lg'}
          p={6}
          maxW="6xl"
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={
              'https://i.imgur.com/Nucmdou.png'
            }
            alt={'Avatar'}
            mb={4}
            pos={'relative'}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            Eduardo Panzeri
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            @eduisthename
          </Text>
        </Box>

        <Box
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'md'}
          rounded={'lg'}
          p={6}
          maxW="6xl"
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={
              'https://i.imgur.com/H9M9tyY.png'
            }
            alt={'Avatar'}
            mb={4}
            pos={'relative'}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            Eduardo Modesto 
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            @duhmodesto
          </Text>
        </Box>

        <Box
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'md'}
          rounded={'lg'}
          p={6}
          maxW="6xl"
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={
              'https://i.imgur.com/iMJMgmv.jpg'
            }
            alt={'Avatar'}
            mb={4}
            pos={'relative'}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            Fábio Alexandre Elias
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            @madebyfabio
          </Text>
        </Box>
        
        <Box
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'md'}
          rounded={'lg'}
          p={6}
          maxW="6xl"
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={
              'https://i.imgur.com/vNihWp9.png'
            }
            alt={'Avatar'}
            mb={4}
            pos={'relative'}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            Gabriel Bernardo da Luz
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            @_berrrrshit
          </Text>
        </Box>
        </SimpleGrid>
    );
  }