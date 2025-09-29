import { Flex, Text, Avatar, TextField } from '@radix-ui/themes'
import { Search, ChevronLeft, ChevronRight } from 'lucide-react'

const members = [
  { name: 'Raymmar', avatar: '👨‍💻' },
  { name: 'Lou Franco', avatar: '👨‍🔬' },
  { name: 'Josh Murack', avatar: '👨‍💼' },
  { name: 'Allan MacKinnon', avatar: '👨‍🎨' },
  { name: 'Pete Petersen', avatar: '👨‍🚀' },
]

const SarasotaSidebar = () => {
  return (
    <Flex 
      direction="column" 
      gap="4" 
      style={{ 
        width: '280px',
        padding: '1.5rem',
        background: 'var(--gray-1)',
        borderRight: '1px solid var(--gray-4)',
        height: '100vh',
        position: 'sticky',
        top: '0'
      }}
    >
      {/* Search */}
      <TextField.Root placeholder="Search all members..." size="2">
        <TextField.Slot>
          <Search size={16} />
        </TextField.Slot>
      </TextField.Root>

      {/* Members List */}
      <Flex direction="column" gap="3">
        {members.map((member, index) => (
          <Flex key={index} align="center" gap="3" style={{ cursor: 'pointer' }}>
            <Avatar 
              size="2" 
              fallback={member.avatar}
              radius="full"
            />
            <Text size="3" weight="medium">{member.name}</Text>
          </Flex>
        ))}
      </Flex>

      {/* Pagination */}
      <Flex justify="between" align="center" style={{ marginTop: 'auto' }}>
        <Flex align="center" gap="2">
          <ChevronLeft size={16} style={{ cursor: 'pointer' }} />
          <Text size="2" color="gray">Previous</Text>
        </Flex>
        
        <Text size="2" color="gray">1 of 33</Text>
        
        <Flex align="center" gap="2">
          <Text size="2" color="gray">Next</Text>
          <ChevronRight size={16} style={{ cursor: 'pointer' }} />
        </Flex>
      </Flex>

      <Text size="1" color="gray" align="center">
        Showing 50 of 1622 members
      </Text>
    </Flex>
  )
}

export default SarasotaSidebar
