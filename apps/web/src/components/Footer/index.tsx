import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { DiscordLogo } from '../Icons/Discord'
import { GithubLogo } from '../Icons/Github'
import { LinkedInLogo } from '../Icons/LinkedIn'
import { TwitterXLogo } from '../Icons/TwitterX'
import { HemiLogo } from '../Logo/HemiLogo'

const StyledFooter = styled.footer`
  width: 100%;
  margin-top: 7rem;
  padding: 24px 36px;
  line-height: 26px;
  border-top: 1px solid ${({ theme }) => theme.mainBorderColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
`

const Footer = () => {
  const iconColor = '#AFADAE'
  const iconSize = 24

  return (
    <StyledFooter>
      <Link to="/">
        <HemiLogo width="74" data-testid="uniswap-logo" fill={iconColor} />
      </Link>
      <SocialLinks>
        <a href="https://twitter.com/hemi_xyz/" target="_blank" rel="noopener noreferrer">
          <TwitterXLogo width={iconSize} height={iconSize} fill={iconColor} />
        </a>
        <a href="https://discord.gg/hemixyz" target="_blank" rel="noopener noreferrer">
          <DiscordLogo width={iconSize} height={iconSize} fill={iconColor} />
        </a>
        <a href="https://github.com/HemiLabs" target="_blank" rel="noopener noreferrer">
          <GithubLogo width={iconSize} height={iconSize} fill={iconColor} />
        </a>
        <a href="https://www.linkedin.com/company/hemi-xyz" target="_blank" rel="noopener noreferrer">
          <LinkedInLogo width={iconSize} height={iconSize} fill={iconColor} />
        </a>
      </SocialLinks>
    </StyledFooter>
  )
}

export default Footer
