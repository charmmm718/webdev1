import { useState } from 'react'
import { Button, Flex, Text, Heading } from '@radix-ui/themes'
import SarasotaLayout from './layouts/SarasotaLayout'
import FactoryLayout from './layouts/FactoryLayout'

type LayoutType = 'sarasota' | 'factory'

function App() {
  const [currentLayout, setCurrentLayout] = useState<LayoutType>('factory')

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Layout Switcher */}
      <Flex 
        direction="column" 
        align="center" 
        gap="4" 
        style={{ 
          padding: '2rem',
          background: 'var(--gray-2)',
          borderBottom: '1px solid var(--gray-6)'
        }}
      >
        <Heading size="6">WebDev1 - Radix UI Layout Showcase</Heading>
        <Text size="3" color="gray">
          基于Radix UI实现的现代Web布局设计
        </Text>
        
        <Flex gap="3">
          <Button 
            variant={currentLayout === 'sarasota' ? 'solid' : 'outline'}
            onClick={() => setCurrentLayout('sarasota')}
          >
            Sarasota Tech Style
          </Button>
          <Button 
            variant={currentLayout === 'factory' ? 'solid' : 'outline'}
            onClick={() => setCurrentLayout('factory')}
          >
            Factory.ai Style
          </Button>
        </Flex>
      </Flex>

      {/* Layout Content */}
      {currentLayout === 'sarasota' && <SarasotaLayout />}
      {currentLayout === 'factory' && <FactoryLayout />}
    </div>
  )
}

export default App
