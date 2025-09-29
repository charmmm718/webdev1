import { Flex, Text, Heading } from '@radix-ui/themes'

const FactoryArticleContent = () => {
  return (
    <Flex direction="column" gap="8" style={{ maxWidth: 'none', margin: '0', padding: '0' }}>
      {/* Article Summary */}
      <Text size="4" weight="medium" style={{ 
        lineHeight: '1.6',
        color: 'var(--gray-11)',
        marginBottom: '2rem'
      }}>
        With a score of 58.75%, Droid sets the new state-of-the-art on Terminal-Bench. 
        Agent design, not just choice of model, is the decisive factor as we achieve 
        leading performance on every model.
      </Text>

      {/* Content Sections */}
      <Flex direction="column" gap="8">
        <section>
          <Heading size="6" style={{ 
            marginBottom: '1.5rem',
            color: 'var(--gray-12)',
            fontWeight: '600',
            fontFamily: 'var(--font-family-mono)'
          }}>
            • Terminal-Bench
          </Heading>
          <Text size="3" style={{ lineHeight: '1.7', color: 'var(--gray-11)' }}>
            <strong>Terminal‑Bench</strong> is an open benchmark that measures AI agents' ability to complete 
            complex end‑to‑end tasks in a terminal environment. The Core set (v0.1.1) has 80 
            human‑verified, Dockerized tasks spanning coding, build/test and dependency management, 
            data and ML workflows, systems and networking, security, and core CLI workflows. Some examples include 
            modernizing a Fortran build process, configuring a git web server, training RL agents and text 
            classifiers, resolving Conda environment dependency conflicts, and scrubbing a repo of 
            secrets. Each task is time-boxed and only considered resolved when all post-run tests pass. 
            The benchmark reports the task-resolution rate.
          </Text>
          <br />
          <Text size="3" style={{ lineHeight: '1.7', color: 'var(--gray-11)' }}>
            As a software development benchmark, Terminal-Bench evaluates more than just coding 
            ability. Each task requires the agent to comprehensively reason, explore a new environment, 
            accurately complete the specification, and robustly validate its solution within the time limit. 
            This breadth and rigor make it a good proxy for agentic performance in production.
          </Text>
        </section>

        <section>
          <Heading size="6" style={{ 
            marginBottom: '1.5rem',
            color: 'var(--gray-12)',
            fontWeight: '600',
            fontFamily: 'var(--font-family-mono)'
          }}>
            • Results
          </Heading>
          
          {/* Performance Chart Placeholder */}
          <div style={{ 
            background: 'var(--gray-1)', 
            border: '1px solid var(--gray-4)',
            borderRadius: '8px',
            padding: '3rem',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <Text size="8" weight="bold" style={{ display: 'block', marginBottom: '0.5rem' }}>58.75%</Text>
            <Text size="3" color="gray">Droid Performance Score</Text>
            <br />
            <Text size="2" color="gray">Terminal-Bench Leaderboard #1</Text>
          </div>

          <Text size="3" style={{ lineHeight: '1.7', color: 'var(--gray-11)' }}>
            Droid achieves 58.8% on Terminal-Bench, placing first among all agents. Factory agents 
            occupy three of the top five positions—with Opus 4.1 (no thinking) (58.8%), 
            GPT-5 (medium reasoning) (52.5%), and Sonnet 4 (no thinking) (50.5%). All three of our 
            single-model configurations surpass every other single-model agent by significant margins, 
            and with Opus 4.1 and GPT-5, Droid exceeds multi-model agents' performance, achieving these 
            results while preserving developers' freedom to choose their preferred model.
          </Text>
        </section>

        <section>
          <Heading size="6" style={{ 
            marginBottom: '1.5rem',
            color: 'var(--gray-12)',
            fontWeight: '600',
            fontFamily: 'var(--font-family-mono)'
          }}>
            • Agent design drives performance for all models
          </Heading>
          
          <Text size="3" style={{ lineHeight: '1.7', color: 'var(--gray-11)', marginBottom: '1.5rem' }}>
            Droid's model-agnostic agent design drives state-of-the-art performance for all 
            frontier models. Although models ultimately drive agentic capabilities, we find 
            that the right agent framework can lead to greater improvements than model selection. 
            The combination of prompting and tool design, systematic environment exploration, and speed 
            optimizations enables cheaper models to outperform more expensive ones: Droid with Sonnet 
            outperforms all other agents using Opus.
          </Text>

          {/* Code Example */}
          <div style={{ 
            background: 'var(--gray-2)', 
            padding: '1.5rem',
            borderRadius: '8px',
            fontFamily: 'var(--font-family-mono)',
            fontSize: '14px',
            lineHeight: '1.4',
            color: 'var(--gray-11)',
            marginTop: '1.5rem'
          }}>
{`curl: (7) Failed to connect to example.com port 443 after 0 ms: 
Connection refused

I can't access example.com, can you figure out why and what 
I should do to fix it?`}
          </div>
          
          <Text size="3" style={{ lineHeight: '1.7', color: 'var(--gray-11)', marginTop: '1rem' }}>
            Droid quickly fixes the immediate problem with curl regardless of which of LLM is used. In most cases, 
            it can identify that this task also requires fixing a deeper root cause - simulated malware that undoes 
            the immediate fix to curl. When using Opus 4.1, Droid is able to fix this root cause more reliably in all trials.
          </Text>
        </section>
      </Flex>
    </Flex>
  )
}

export default FactoryArticleContent
