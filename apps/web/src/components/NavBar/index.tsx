import { Trans } from '@lingui/macro'
import { useWeb3React } from '@web3-react/core'
import { HemiLogo } from 'components/Logo/HemiLogo'
import Web3Status from 'components/Web3Status'
import { useIsNftPage } from 'hooks/useIsNftPage'
import { useIsPoolsPage } from 'hooks/useIsPoolsPage'
import { Box } from 'nft/components/Box'
import { Row } from 'nft/components/Flex'
import { useProfilePageState } from 'nft/hooks'
import { ProfilePageStateType } from 'nft/types'
import { ReactNode, useCallback } from 'react'
import { NavLink, NavLinkProps, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { useAccountDrawer } from 'components/AccountDrawer/MiniPortfolio/hooks'
import { Z_INDEX } from 'theme/zIndex'
import { Bag } from './Bag'
import { ChainSelector } from './ChainSelector'
import * as styles from './style.css'

const Nav = styled.nav`
  padding: ${({ theme }) => `${theme.navVerticalPad}px 12px`};
  width: 100%;
  height: ${({ theme }) => theme.navHeight}px;
  z-index: ${Z_INDEX.sticky};
`

interface MenuItemProps {
  href: string
  id?: NavLinkProps['id']
  isActive?: boolean
  children: ReactNode
  dataTestId?: string
}

const MenuItem = ({ href, dataTestId, id, isActive, children }: MenuItemProps) => {
  return (
    <NavLink
      to={href}
      className={isActive ? styles.activeMenuItem : styles.menuItem}
      id={id}
      style={{ textDecoration: 'none' }}
      data-testid={dataTestId}
    >
      {children}
    </NavLink>
  )
}

// @TODO: Currently unused, consider using it when /pool page is added. Ref.: https://github.com/hemilabs/interface/issues/24
export const PageTabs = () => {
  const { pathname } = useLocation()
  const isPoolActive = useIsPoolsPage()

  return (
    <>
      <MenuItem href="/" isActive={pathname.startsWith('/swap')}>
        <Trans>Swap</Trans>
      </MenuItem>
      <Box display={{ sm: 'flex', lg: 'none', xxl: 'flex' }} width="full">
        <MenuItem href="/pool" dataTestId="pool-nav-link" isActive={isPoolActive}>
          <Trans>Pool</Trans>
        </MenuItem>
      </Box>
    </>
  )
}

const Navbar = () => {
  const isNftPage = useIsNftPage()
  const sellPageState = useProfilePageState((state) => state.state)
  const navigate = useNavigate()

  const { account } = useWeb3React()
  const [accountDrawerOpen, toggleAccountDrawer] = useAccountDrawer()
  const handleUniIconClick = useCallback(() => {
    if (account) {
      return
    }
    if (accountDrawerOpen) {
      toggleAccountDrawer()
    }
    navigate({
      pathname: '/',
      search: '?intro=true',
    })
  }, [account, accountDrawerOpen, navigate, toggleAccountDrawer])

  return (
    <>
      <Nav>
        <Box display="flex" height="full" flexWrap="nowrap">
          <Box className={styles.leftSideContainer}>
            <Box className={styles.logoContainer}>
              <HemiLogo
                width="112"
                height="36"
                data-testid="uniswap-logo"
                className={styles.logo}
                clickable={!account}
                onClick={handleUniIconClick}
              />
            </Box>
          </Box>
          <Box className={styles.rightSideContainer}>
            <Row gap="12">
              {isNftPage && sellPageState !== ProfilePageStateType.LISTING && <Bag />}
              {!isNftPage && (
                <Box display={{ sm: 'none', lg: 'flex' }}>
                  <ChainSelector />
                </Box>
              )}
              <Web3Status />
            </Row>
          </Box>
        </Box>
      </Nav>
    </>
  )
}

export default Navbar
