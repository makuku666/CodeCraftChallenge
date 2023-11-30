import { Center, Spinner } from '@chakra-ui/react'

const LoadSpinner = () => {
  return (
    <Center h="100vh">
      <Spinner
        size="xl"
        color="blue.500"
        emptyColor="gray.200"
        thickness="4px"
      />
    </Center>
  )
}

export default LoadSpinner
