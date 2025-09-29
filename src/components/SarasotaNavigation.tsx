import { Flex, Text, Button } from '@radix-ui/themes'
import { Star } from 'lucide-react'

const SarasotaNavigation = () => {
  return (
    <Flex 
      justify="between" 
      align="center" 
      style={{ 
        padding: '1rem 2rem',
        background: 'white',
        borderBottom: '1px solid var(--gray-4)'
      }}
    >
      {/* Logo and Brand */}
      <Flex align="center" gap="2">
        <Star size={24} color="var(--orange-9)" />
        <Text size="4" weight="medium">Sarasota Tech</Text>
      </Flex>

      {/* Navigation Links */}
      <Flex align="center" gap="6" className="mobile-hidden">
        <Text size="3" weight="medium" style={{ cursor: 'pointer' }}>
          Directory
        </Text>
        <Text size="3" weight="medium" style={{ cursor: 'pointer' }}>
          News
        </Text>
      </Flex>

      {/* Action Buttons */}
      <Flex align="center" gap="3">
        <Button variant="solid" size="2">
          Join Us
        </Button>
        <Button variant="outline" size="2">
          Log in
        </Button>
      </Flex>
    </Flex>
  )
}

export default SarasotaNavigation
