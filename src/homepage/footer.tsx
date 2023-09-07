import { Text, Flex, Anchor, Button } from '@/primitives'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

type SectionTitleProps = {
  title: string
}

function SectionTitle({ title }: SectionTitleProps) {
  return (
    <Text style="subtitle1" css={{ color: '$gray12', mb: 8 }}>
      {title}
    </Text>
  )
}

type SectionLinkProps = {
  name: string
  href: string
}

function SectionLink({ name, href }: SectionLinkProps) {
  return (
    <Anchor
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      weight="medium"
      css={{ fontSize: 14, mt: 16 }}
    >
      {name}
    </Anchor>
  )
}

const developerSectionLinks = [
  {
    name: 'Docs',
    href: 'https://docs.reservoir.tools/docs',
  },
  {
    name: 'API Reference',
    href: 'https://docs.reservoir.tools/reference/overview',
  },
  {
    name: 'Github',
    href: 'https://github.com/reservoirprotocol',
  },
  {
    name: 'Testnets',
    href: 'https://testnets.reservoir.tools',
  },
]

const companySectionLinks = [
  {
    name: 'Jobs',
    href: 'https://jobs.ashbyhq.com/reservoir',
  },
  {
    name: 'Terms of Use',
    href: 'https://reservoir.tools/terms',
  },
  {
    name: 'Privacy Policy',
    href: 'https://reservoir.tools/privacy',
  },
]

export function Footer() {
  return (
    <Flex
      justify="between"
      css={{
        borderTop: '1px solid $gray7',
        borderStyle: 'solid',
        pt: '$5',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 36,
        '@bp600': {
          flexDirection: 'row',
          gap: 0,
        },
      }}
    >
      <Flex css={{ gap: 80, '@bp600': { gap: 136 } }}>
        <Flex direction="column">
          <SectionTitle title="Developers" />
          {developerSectionLinks.map((props) => (
            <SectionLink key={props.name} {...props} />
          ))}
        </Flex>
        <Flex direction="column">
          <SectionTitle title="Company" />
          {companySectionLinks.map((props) => (
            <SectionLink key={props.name} {...props} />
          ))}
        </Flex>
      </Flex>
      <Flex
        direction="column"
        css={{ alignItems: 'flex-start', '@bp600': { alignItems: 'flex-end' } }}
      >
        <SectionTitle title="Join NFTGo Community" />
        <Flex css={{ gap: '$4', mt: 16 }}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/reservoir0x"
          >
            <Button size="xs" color="gray3">
              <FontAwesomeIcon icon={faTwitter} width={14} height={14} />
            </Button>
          </a>
        </Flex>
      </Flex>
    </Flex>
  )
}