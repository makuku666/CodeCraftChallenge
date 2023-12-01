import { Link as RouterLink } from 'react-router-dom'
import { Text } from '@chakra-ui/react'

/**
 * A component that creates a stylized link using Chakra UI and React Router.
 * @param {Object} props - The props for the LinkAction component.
 * @param {string} props.to - The URL the link should navigate to.
 * @param {string} props.label - The text content of the link.
 * @param {Object} props.textProps - Additional props for the Text component.
 * @param {Object} props.linkProps - Additional props for the RouterLink component.
 * @returns {JSX.Element} JSX element representing the stylized link.
 */
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
