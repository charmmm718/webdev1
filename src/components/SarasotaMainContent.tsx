import { Flex, Card, Text, Heading, Button } from '@radix-ui/themes'
import { Calendar, Users } from 'lucide-react'

const SarasotaMainContent = () => {
  return (
    <Flex direction="column" gap="6" style={{ flex: 1, padding: '2rem' }}>
      {/* Hero Section */}
      <Card size="4" style={{ 
        background: 'linear-gradient(135deg, var(--orange-3) 0%, var(--orange-5) 100%)',
        border: 'none',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Flex direction="column" gap="4">
          <Heading size="8" style={{ color: 'white' }}>
            Sarasota Tech Intro
          </Heading>
          <Text size="4" style={{ color: 'white', opacity: 0.9 }}>
            Welcome to Sarasota Tech
          </Text>
          <Button variant="solid" size="3" style={{ alignSelf: 'flex-start', background: 'white', color: 'var(--orange-9)' }}>
            Read More
          </Button>
        </Flex>
        
        {/* Carousel Dots */}
        <Flex gap="2" justify="center" style={{ marginTop: '2rem' }}>
          {[1, 2, 3, 4].map((dot) => (
            <div 
              key={dot}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: dot === 1 ? 'white' : 'rgba(255,255,255,0.5)'
              }}
            />
          ))}
        </Flex>
      </Card>

      {/* Next Event Card */}
      <Card size="3">
        <Flex direction="column" gap="3">
          <Text size="2" weight="medium" color="gray">Next Event</Text>
          
          <Flex gap="3">
            <div style={{ 
              width: '80px', 
              height: '80px', 
              background: 'var(--orange-3)',
              borderRadius: '8px',
              flexShrink: 0
            }} />
            
            <Flex direction="column" gap="2" style={{ flex: 1 }}>
              <Heading size="4">October Tech JAM</Heading>
              
              <Flex align="center" gap="2">
                <Calendar size={14} color="var(--gray-9)" />
                <Text size="2" color="gray">Oct 16, 5:00 PM GMT-4</Text>
              </Flex>
              
              <Flex align="center" gap="2">
                <Users size={14} color="var(--gray-9)" />
                <Text size="2" color="gray">139 attending</Text>
              </Flex>
              
              <Text size="2" color="gray" style={{ marginTop: '0.5rem' }}>
                We're headed back to Aloft Sarasota for our October Tech JAM. We will have a live DJ, cash...
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  )
}

export default SarasotaMainContent
