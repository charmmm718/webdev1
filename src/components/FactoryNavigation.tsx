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
        <Settings size={18} color="var(--gray-12)" />
        <Text size="3" weight="bold" style={{ 
          color: 'var(--gray-12)', 
          fontSize: '12px',
          fontFamily: 'var(--font-family-mono)'
        }}>
          FACTORY
        </Text>
      </Flex>

      {/* Navigation Links */}
      <Flex align="center" gap="8" className="mobile-hidden">
        <Flex align="center" gap="1">
          <Text size="2" weight="medium" style={{ 
            cursor: 'pointer', 
            fontSize: '12px',
            fontFamily: 'var(--font-family-mono)'
          }}>
            PRODUCT
          </Text>
          <Text size="1" style={{ transform: 'rotate(90deg)', fontSize: '10px' }}>›</Text>
        </Flex>
        <Text size="2" weight="medium" style={{ 
          cursor: 'pointer', 
          fontSize: '12px',
          fontFamily: 'var(--font-family-mono)'
        }}>
          ENTERPRISE
        </Text>
        <Text size="2" weight="medium" style={{ 
          cursor: 'pointer', 
          fontSize: '12px',
          fontFamily: 'var(--font-family-mono)'
        }}>
          PRICING
        </Text>
        <Text size="2" weight="medium" style={{ 
          cursor: 'pointer', 
          fontSize: '12px',
          fontFamily: 'var(--font-family-mono)'
        }}>
          NEWS
        </Text>
        <Text size="2" weight="medium" style={{ 
          cursor: 'pointer', 
          fontSize: '12px',
          fontFamily: 'var(--font-family-mono)'
        }}>
          COMPANY
        </Text>
        <Text size="2" weight="medium" style={{ 
          cursor: 'pointer', 
          fontSize: '12px',
          fontFamily: 'var(--font-family-mono)'
        }}>
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
            fontWeight: '500',
            fontSize: '12px',
            fontFamily: 'var(--font-family-mono)'
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
            fontWeight: '500',
            fontSize: '12px',
            fontFamily: 'var(--font-family-mono)'
          }}
        >
          CONTACT SALES
        </Button>
      </Flex>
    </Flex>
  )
}

export default FactoryNavigation
