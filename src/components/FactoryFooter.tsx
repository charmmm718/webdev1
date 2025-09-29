import { Flex, Text, Heading } from '@radix-ui/themes'
import { ArrowRight, Twitter, Linkedin, Github } from 'lucide-react'

const FactoryFooter = () => {
  return (
    <footer style={{ 
      background: 'var(--gray-12)', 
      color: 'white',
      marginTop: '4rem'
    }}>
      {/* CTA Section */}
      <Flex 
        direction="column" 
        align="center" 
        gap="4" 
        style={{ 
          padding: '4rem 2rem',
          borderBottom: '1px solid var(--gray-8)'
        }}
      >
        <Heading size="6" style={{ color: 'white', textAlign: 'center' }}>
          Ready to build the software of the future?
        </Heading>
        
        <Flex align="center" gap="2" style={{ cursor: 'pointer' }}>
          <Text size="3" weight="medium" style={{ color: 'var(--orange-9)' }}>
            Start building
          </Text>
          <ArrowRight size={16} color="var(--orange-9)" />
        </Flex>
      </Flex>

      {/* Footer Links */}
      <Flex 
        justify="between" 
        style={{ 
          padding: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        <Flex gap="8">
          <Flex direction="column" gap="3">
            <Text size="3" weight="medium" style={{ color: 'white' }}>
              Resources
            </Text>
            <Flex direction="column" gap="2">
              <Text size="2" style={{ color: 'var(--gray-9)', cursor: 'pointer' }}>News</Text>
              <Text size="2" style={{ color: 'var(--gray-9)', cursor: 'pointer' }}>Docs</Text>
              <Text size="2" style={{ color: 'var(--gray-9)', cursor: 'pointer' }}>Contact Sales</Text>
            </Flex>
          </Flex>

          <Flex direction="column" gap="3">
            <Text size="3" weight="medium" style={{ color: 'white' }}>
              Company
            </Text>
            <Flex direction="column" gap="2">
              <Text size="2" style={{ color: 'var(--gray-9)', cursor: 'pointer' }}>Careers</Text>
              <Text size="2" style={{ color: 'var(--gray-9)', cursor: 'pointer' }}>Enterprise</Text>
              <Text size="2" style={{ color: 'var(--gray-9)', cursor: 'pointer' }}>Security</Text>
            </Flex>
          </Flex>

          <Flex direction="column" gap="3">
            <Text size="3" weight="medium" style={{ color: 'white' }}>
              Legal
            </Text>
            <Flex direction="column" gap="2">
              <Text size="2" style={{ color: 'var(--gray-9)', cursor: 'pointer' }}>Privacy Policy</Text>
              <Text size="2" style={{ color: 'var(--gray-9)', cursor: 'pointer' }}>Terms of Service</Text>
              <Text size="2" style={{ color: 'var(--gray-9)', cursor: 'pointer' }}>SLA</Text>
              <Text size="2" style={{ color: 'var(--gray-9)', cursor: 'pointer' }}>DPA</Text>
              <Text size="2" style={{ color: 'var(--gray-9)', cursor: 'pointer' }}>BAA</Text>
            </Flex>
          </Flex>
        </Flex>

        {/* Social Links */}
        <Flex gap="4">
          <Twitter size={20} color="var(--gray-9)" style={{ cursor: 'pointer' }} />
          <Linkedin size={20} color="var(--gray-9)" style={{ cursor: 'pointer' }} />
          <Github size={20} color="var(--gray-9)" style={{ cursor: 'pointer' }} />
        </Flex>
      </Flex>

      {/* Copyright */}
      <Flex 
        justify="center" 
        style={{ 
          padding: '1rem',
          borderTop: '1px solid var(--gray-8)'
        }}
      >
        <Text size="2" style={{ color: 'var(--gray-9)' }}>
          @Factory 2025. All rights reserved.
        </Text>
      </Flex>
    </footer>
  )
}

export default FactoryFooter
