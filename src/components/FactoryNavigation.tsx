import { Flex, Text, Button } from '@radix-ui/themes'
import { Settings } from 'lucide-react'

const FactoryNavigation = () => {
  return (
    <Flex 
      justify="between" 
      align="center" 
      style={{ 
        padding: '1rem 2rem',
        background: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}
    >
      {/* Logo and Brand */}
      <Flex align="center" gap="2">
        <Settings size={20} color="var(--gray-12)" />
        <Text size="4" weight="bold" style={{ color: 'var(--gray-12)' }}>
          FACTORY
        </Text>
      </Flex>

      {/* Navigation Links */}
      <Flex align="center" gap="8" className="mobile-hidden">
        <Flex align="center" gap="1">
          <Text size="3" weight="medium" style={{ cursor: 'pointer' }}>
            PRODUCT
          </Text>
          <Text size="2" style={{ transform: 'rotate(90deg)' }}>›</Text>
        </Flex>
        <Text size="3" weight="medium" style={{ cursor: 'pointer' }}>
          ENTERPRISE
        </Text>
        <Text size="3" weight="medium" style={{ cursor: 'pointer' }}>
          PRICING
        </Text>
        <Text size="3" weight="medium" style={{ cursor: 'pointer' }}>
          NEWS
        </Text>
        <Text size="3" weight="medium" style={{ cursor: 'pointer' }}>
          COMPANY
        </Text>
        <Text size="3" weight="medium" style={{ cursor: 'pointer' }}>
          DOCS
        </Text>
      </Flex>

      {/* Action Buttons */}
      <Flex align="center" gap="3">
        <Button 
          variant="solid" 
          size="2"
          style={{ 
            background: 'var(--gray-12)', 
            color: 'white',
            fontWeight: '500'
          }}
        >
          START BUILDING
        </Button>
        <Button 
          variant="outline" 
          size="2"
          style={{ 
            borderColor: 'var(--gray-6)',
            color: 'var(--gray-12)',
            fontWeight: '500'
          }}
        >
          CONTACT SALES
        </Button>
      </Flex>
    </Flex>
  )
}

export default FactoryNavigation
