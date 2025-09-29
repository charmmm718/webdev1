import { Flex } from '@radix-ui/themes'
import SarasotaNavigation from '../components/SarasotaNavigation'
import SarasotaSidebar from '../components/SarasotaSidebar'
import SarasotaMainContent from '../components/SarasotaMainContent'
import SarasotaRightSidebar from '../components/SarasotaRightSidebar'

const SarasotaLayout = () => {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--gray-1)' }}>
      <SarasotaNavigation />
      
      <Flex style={{ minHeight: 'calc(100vh - 80px)' }}>
        <SarasotaSidebar />
        <SarasotaMainContent />
        <SarasotaRightSidebar />
      </Flex>
    </div>
  )
}

export default SarasotaLayout
