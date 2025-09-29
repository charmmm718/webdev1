import { Flex, Card, Text, Heading, Button, TextField } from '@radix-ui/themes'
import { Linkedin, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react'

const SarasotaRightSidebar = () => {
  return (
    <Flex 
      direction="column" 
      gap="4" 
      style={{ 
        width: '300px',
        padding: '2rem 1.5rem',
        background: 'var(--gray-1)'
      }}
    >
      {/* Links Section */}
      <Card size="3">
        <Flex direction="column" gap="3">
          <Heading size="4">Links</Heading>
          
          <Flex direction="column" gap="2">
            <Text size="3" style={{ cursor: 'pointer' }}>About Sarasota Tech</Text>
            <Text size="3" style={{ cursor: 'pointer' }}>Tech Summit</Text>
            <Text size="3" style={{ cursor: 'pointer' }}>Event Calendar</Text>
            <Text size="3" style={{ cursor: 'pointer' }}>Get More Involved</Text>
            <Text size="3" style={{ cursor: 'pointer' }}>Media Kit</Text>
          </Flex>
        </Flex>
      </Card>

      {/* Social Links */}
      <Flex gap="3" justify="center">
        <Linkedin size={20} color="var(--gray-9)" style={{ cursor: 'pointer' }} />
        <Facebook size={20} color="var(--gray-9)" style={{ cursor: 'pointer' }} />
        <Instagram size={20} color="var(--gray-9)" style={{ cursor: 'pointer' }} />
        <Twitter size={20} color="var(--gray-9)" style={{ cursor: 'pointer' }} />
        <MessageCircle size={20} color="var(--gray-9)" style={{ cursor: 'pointer' }} />
      </Flex>

      {/* Newsletter Signup */}
      <Card size="3">
        <Flex direction="column" gap="4">
          <Heading size="4">Sarasota.Tech</Heading>
          <Text size="3" color="gray">
            We're connecting Sarasota's tech community and driving the city forward.
          </Text>
          
          <Flex direction="column" gap="3">
            <TextField.Root placeholder="Email" size="2" />
            <Button variant="solid" size="2">
              Subscribe
            </Button>
          </Flex>
          
          <Text size="2" color="gray">
            Enter your email for an invite to our next event along with occasional 
            updates about our growing community.
          </Text>
        </Flex>
      </Card>

      {/* Welcome Button */}
      <Button 
        variant="outline" 
        size="3" 
        style={{ 
          background: 'var(--orange-2)',
          borderColor: 'var(--orange-6)',
          color: 'var(--orange-9)'
        }}
      >
        👋 Welcome
      </Button>
    </Flex>
  )
}

export default SarasotaRightSidebar
