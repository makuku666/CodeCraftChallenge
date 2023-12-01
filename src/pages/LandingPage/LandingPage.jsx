import { Center, Heading, Highlight, Stack, Text } from '@chakra-ui/react'
import gqlPic from 'public/graphql.png'

/**
 * Component for the landing page displaying information about GraphQL content.
 * @returns {JSX.Element} JSX element for the landing page.
 */
function LandingPage() {
  return (
    <Center
      w="100%"
      h="100%"
      bgImage={`url(${gqlPic})`}
      bgSize="20%"
      bgRepeat="no-repeat"
      bgPos="center 10rem"
    >
      <Stack direction={['column']}>
        <Heading
          as="h1"
          textAlign="center"
          fontSize={{ base: '3xl', md: '5xl' }}
          mb="4"
          fontFamily="cursive"
        >
          Welcome
        </Heading>
        <Text fontSize={{ base: 'lg', md: 'xl' }} fontStyle="italic" mb="4">
          <Highlight
            query={['about', 'GraphQL']}
            styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
          >
            This page is about rendering content from a GraphQL server.
          </Highlight>
        </Text>
        <Text fontSize={{ base: 'lg', md: 'xl' }} fontStyle="italic" mb="4">
          <Highlight
            query={['explore']}
            styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
          >
            Login and explore the incredible stuff.
          </Highlight>
        </Text>
      </Stack>
    </Center>
  )
}

export default LandingPage
