import { Flex, Card, Text, Heading, Button, Code } from '@radix-ui/themes'
import { ArrowLeft, Share, Copy } from 'lucide-react'

const FactoryArticleContent = () => {
  return (
    <Flex direction="column" gap="6" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      {/* Back Navigation */}
      <Flex align="center" gap="2" style={{ cursor: 'pointer' }}>
        <ArrowLeft size={16} />
        <Text size="2" color="gray">GO BACK</Text>
      </Flex>

      {/* Article Header */}
      <Flex direction="column" gap="4">
        <Heading size="9" style={{ lineHeight: '1.1', fontWeight: 'bold' }}>
          Droid: The #1 Software Development Agent on Terminal-Bench
        </Heading>
        
        <Flex align="center" gap="4">
          <Text size="2" color="gray">SEPTEMBER 25, 2025 - 8 MINUTE READ -</Text>
          <Flex align="center" gap="2">
            <Text size="2" color="gray">SHARE</Text>
            <Share size={14} />
            <Copy size={14} />
          </Flex>
        </Flex>

        <Flex gap="2">
          <Button variant="solid" size="1" style={{ background: 'var(--gray-12)', fontSize: '11px' }}>
            ENGINEERING
          </Button>
          <Button variant="solid" size="1" style={{ background: 'var(--orange-9)', fontSize: '11px' }}>
            AGENT NATIVE DEVELOPMENT
          </Button>
          <Button variant="solid" size="1" style={{ background: 'var(--orange-6)', fontSize: '11px' }}>
            NEW
          </Button>
        </Flex>
      </Flex>

      {/* Article Summary */}
      <Card size="3" style={{ background: 'var(--gray-2)', border: 'none' }}>
        <Text size="4" weight="medium" style={{ lineHeight: '1.6' }}>
          With a score of 58.75%, Droid sets the new state-of-the-art on Terminal-Bench. 
          Agent design, not just choice of model, is the decisive factor as we achieve 
          leading performance on every model.
        </Text>
      </Card>

      {/* Content Sections */}
      <Flex direction="column" gap="6">
        <section>
          <Heading size="6" style={{ marginBottom: '1rem' }}>
            Terminal-Bench
          </Heading>
          <Text size="3" style={{ lineHeight: '1.7', color: 'var(--gray-11)' }}>
            Terminal‑Bench is an open benchmark that measures AI agents' ability to complete 
            complex end‑to‑end tasks in a terminal environment. The Core set (v0.1.1) has 80 
            human‑verified, Dockerized tasks spanning coding, build/test and dependency management, 
            data and ML workflows, systems and networking, security, and core CLI workflows.
          </Text>
        </section>

        <section>
          <Heading size="6" style={{ marginBottom: '1rem' }}>
            Results
          </Heading>
          
          {/* Performance Chart Placeholder */}
          <Card size="4" style={{ background: 'var(--gray-1)', border: '1px solid var(--gray-4)' }}>
            <Flex direction="column" gap="3" align="center" justify="center" style={{ height: '300px' }}>
              <Text size="6" weight="bold">58.75%</Text>
              <Text size="3" color="gray">Droid Performance Score</Text>
              <Text size="2" color="gray">Terminal-Bench Leaderboard #1</Text>
            </Flex>
          </Card>

          <Text size="3" style={{ lineHeight: '1.7', color: 'var(--gray-11)', marginTop: '1rem' }}>
            Droid achieves 58.8% on Terminal-Bench, placing first among all agents. Factory agents 
            occupy three of the top five positions—with Opus 4.1 (no thinking) (58.8%), 
            GPT-5 (medium reasoning) (52.5%), and Sonnet 4 (no thinking) (50.5%).
          </Text>
        </section>

        <section>
          <Heading size="6" style={{ marginBottom: '1rem' }}>
            Agent design drives performance for all models
          </Heading>
          
          <Text size="3" style={{ lineHeight: '1.7', color: 'var(--gray-11)' }}>
            Droid's model-agnostic agent design drives state-of-the-art performance for all 
            frontier models. Although models ultimately drive agentic capabilities, we find 
            that the right agent framework can lead to greater improvements than model selection.
          </Text>

          {/* Code Example */}
          <Card size="3" style={{ background: 'var(--gray-2)', marginTop: '1.5rem' }}>
            <Code size="2" style={{ display: 'block', whiteSpace: 'pre-wrap' }}>
{`curl: (7) Failed to connect to example.com port 443 after 0 ms: 
Connection refused

I can't access example.com, can you figure out why and what 
I should do to fix it?`}
            </Code>
          </Card>
        </section>
      </Flex>

      {/* CTA Section */}
      <Card size="4" style={{ background: 'var(--gray-12)', color: 'white', textAlign: 'center' }}>
        <Flex direction="column" gap="4" align="center">
          <Heading size="6" style={{ color: 'white' }}>
            Try Factory
          </Heading>
          <Text size="3" style={{ color: 'var(--gray-3)', maxWidth: '600px' }}>
            With Factory, developers can choose to use any model, including their own custom ones, 
            and get the best possible results across a wide variety of tasks without changing their workflows.
          </Text>
          <Button 
            variant="solid" 
            size="3"
            style={{ 
              background: 'var(--orange-9)', 
              color: 'white',
              fontWeight: '500'
            }}
          >
            Try Droid Today
          </Button>
        </Flex>
      </Card>
    </Flex>
  )
}

export default FactoryArticleContent
