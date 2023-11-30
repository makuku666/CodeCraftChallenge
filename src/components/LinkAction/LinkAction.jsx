import { Link as RouterLink } from 'react-router-dom'
import { Text } from '@chakra-ui/react'

const LinkAction = ({ to, label, textProps, linkProps }) => {
  return (
    <Text
      as="span"
      fontSize="medium"
      fontWeight="bold"
      m="1"
      p={1.5}
      borderWidth="1px"
      borderRadius="md"
      boxShadow="md"
      color="blue.500"
      {...textProps}
    >
      <RouterLink to={to} {...linkProps}>
        {label}
      </RouterLink>
    </Text>
  )
}

export default LinkAction
