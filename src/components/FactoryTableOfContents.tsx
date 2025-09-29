import { Flex, Text, Heading } from '@radix-ui/themes'

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
    <div>
      <Heading size="3" style={{ 
        marginBottom: '1rem',
        color: 'var(--gray-12)',
        fontWeight: '500'
      }}>
        TABLE OF CONTENTS
      </Heading>
      
      <Flex direction="column" gap="1">
        {tableOfContents.map((item, index) => (
          <Text 
            key={index}
            size="2" 
            style={{ 
              cursor: 'pointer',
              padding: '0.25rem 0',
              color: index === 0 ? 'var(--orange-9)' : 'var(--gray-9)',
              fontWeight: index === 0 ? '500' : '400',
              lineHeight: '1.4'
            }}
          >
            {item}
          </Text>
        ))}
      </Flex>
    </div>
  )
}

export default FactoryTableOfContents
