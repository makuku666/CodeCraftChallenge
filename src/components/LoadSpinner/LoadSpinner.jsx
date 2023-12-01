import { Center, Spinner } from '@chakra-ui/react'

/**
 * A component that displays a centered spinner indicating loading or processing.
 * @returns {JSX.Element} JSX element representing the centered spinner.
 */
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
