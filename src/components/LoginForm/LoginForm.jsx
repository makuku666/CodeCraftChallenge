import { useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input
} from '@chakra-ui/react'

const inputDefault = ''

/**
 * A component that renders a login form.
 * @param {Object} props - The props for the LoginForm component.
 * @param {Function} props.onSubmit - The function to be called on form submission.
 * @returns {JSX.Element} JSX element representing the login form.
 */
const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState(inputDefault)
  const [password, setPassword] = useState(inputDefault)

  /**
   * Handles the form submission.
   * @param {Event} e - The form submit event.
   */
  const handleFormSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email, password })
  }

  return (
    <Box
      maxW="md"
      mx="auto"
      mt={8}
      p={6}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
    >
      <Heading as="h2" mb={4} textAlign="center">
        Login
      </Heading>
      <form onSubmit={handleFormSubmit}>
        <FormControl id="email" mb={4}>
          <FormLabel>Email:</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </FormControl>
        <FormControl id="password" mb={4}>
          <FormLabel>Password:</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" width="full">
          Login
        </Button>
      </form>
    </Box>
  )
}

export default LoginForm
