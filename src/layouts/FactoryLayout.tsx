import { Flex } from '@radix-ui/themes'
import FactoryNavigation from '../components/FactoryNavigation'
import FactoryTableOfContents from '../components/FactoryTableOfContents'
import FactoryArticleContent from '../components/FactoryArticleContent'
import FactoryFooter from '../components/FactoryFooter'

const FactoryLayout = () => {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <FactoryNavigation />
      
      <Flex gap="4" style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {/* Table of Contents - Left Sidebar */}
        <div className="mobile-hidden">
          <FactoryTableOfContents />
        </div>
        
        {/* Main Article Content */}
        <div style={{ flex: 1 }}>
          <FactoryArticleContent />
        </div>
      </Flex>

      <FactoryFooter />
    </div>
  )
}

export default FactoryLayout
