import { Flex, Card, Text, Heading } from '@radix-ui/themes'

const tableOfContents = [
  'Droid: The #1 Software Development Agent',
  'Terminal-Bench', 
  'Results',
  'Agent design drives performance',
  'Agentic system design',
  'Hierarchical prompting',
  'Model-specific optimizations',
  'Tool design principles',
  'Try Factory',
  'What\'s Next',
  'References'
]

const FactoryTableOfContents = () => {
  return (
    <Card 
      size="3" 
      style={{ 
        position: 'sticky',
        top: '100px',
        width: '250px',
        height: 'fit-content',
        background: 'var(--gray-1)',
        border: '1px solid var(--gray-4)'
      }}
    >
      <Flex direction="column" gap="3">
        <Heading size="4" style={{ marginBottom: '0.5rem' }}>
          TABLE OF CONTENTS
        </Heading>
        
        <Flex direction="column" gap="2">
          {tableOfContents.map((item, index) => (
            <Text 
              key={index}
              size="2" 
              style={{ 
                cursor: 'pointer',
                padding: '0.25rem 0',
                color: index === 0 ? 'var(--orange-9)' : 'var(--gray-11)',
                fontWeight: index === 0 ? '500' : '400'
              }}
            >
              {item}
            </Text>
          ))}
        </Flex>
      </Flex>
    </Card>
  )
}

export default FactoryTableOfContents
