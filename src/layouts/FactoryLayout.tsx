import { Flex, Text, Heading } from '@radix-ui/themes'
import FactoryNavigation from '../components/FactoryNavigation'
import FactoryTableOfContents from '../components/FactoryTableOfContents'
import FactoryArticleContent from '../components/FactoryArticleContent'
import FactoryFooter from '../components/FactoryFooter'

const FactoryLayout = () => {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <FactoryNavigation />
      
      {/* True Two-Column Layout */}
      <div className="factory-grid-layout" style={{ 
        display: 'grid',
        gridTemplateColumns: '400px 1fr',
        minHeight: 'calc(100vh - 80px)',
        maxWidth: '1600px',
        margin: '0 auto'
      }}>
        {/* Left Column - Article Title and TOC */}
        <div className="factory-left-column" style={{ 
          padding: '2rem',
          borderRight: '1px solid var(--gray-3)',
          position: 'relative'
        }}>
          {/* Article Title on Left */}
          <div style={{ marginBottom: '2rem' }}>
            <Flex align="center" gap="2" style={{ cursor: 'pointer', marginBottom: '1.5rem' }}>
              <Text size="2" color="gray">← GO BACK</Text>
            </Flex>
            
            <Heading size="8" style={{ 
              lineHeight: '1.1', 
              fontWeight: 'bold',
              marginBottom: '1rem',
              fontFamily: 'var(--font-family-mono)'
            }}>
              Droid: The #1 Software Development Agent on Terminal-Bench
            </Heading>
            
            <Text size="2" color="gray" style={{ marginBottom: '1rem' }}>
              SEPTEMBER 25, 2025 - 8 MINUTE READ -
            </Text>
            
            <Flex gap="2" style={{ marginBottom: '1rem' }}>
              <Text size="2" color="gray">SHARE</Text>
              <Text size="2" color="gray">X</Text>
              <Text size="2" color="gray">📋</Text>
            </Flex>
            
            <Flex gap="2" wrap="wrap">
              <span style={{ 
                background: 'var(--gray-12)', 
                color: 'white', 
                padding: '0.25rem 0.5rem', 
                fontSize: '11px',
                borderRadius: '4px',
                fontFamily: 'var(--font-family-mono)'
              }}>
                ENGINEERING
              </span>
              <span style={{ 
                background: 'var(--orange-9)', 
                color: 'white', 
                padding: '0.25rem 0.5rem', 
                fontSize: '11px',
                borderRadius: '4px',
                fontFamily: 'var(--font-family-mono)'
              }}>
                AGENT NATIVE DEVELOPMENT
              </span>
              <span style={{ 
                background: 'var(--orange-6)', 
                color: 'white', 
                padding: '0.25rem 0.5rem', 
                fontSize: '11px',
                borderRadius: '4px',
                fontFamily: 'var(--font-family-mono)'
              }}>
                NEW
              </span>
            </Flex>
          </div>
          
          {/* Table of Contents at Bottom */}
          <div className="factory-toc-bottom" style={{ 
            position: 'absolute',
            bottom: '2rem',
            left: '2rem',
            right: '2rem'
          }}>
            <FactoryTableOfContents />
          </div>
        </div>
        
        {/* Right Column - Main Content */}
        <div className="factory-right-column" style={{ 
          padding: '2rem 3rem',
          overflow: 'auto'
        }}>
          <FactoryArticleContent />
        </div>
      </div>

      <FactoryFooter />
    </div>
  )
}

export default FactoryLayout
