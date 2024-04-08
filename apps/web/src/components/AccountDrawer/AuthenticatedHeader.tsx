import { BrowserEvent, InterfaceElementName, SharedEventName } from '@uniswap/analytics-events'
import { useWeb3React } from '@web3-react/core'
import { TraceEvent } from 'analytics'
import { Power } from 'components/Icons/Power'
import { Settings } from 'components/Icons/Settings'
import { getConnection } from 'connection'
import useENSName from 'hooks/useENSName'
import { useCallback, useState } from 'react'
import { useAppDispatch } from 'state/hooks'
import { setRecentConnectionDisconnected } from 'state/user/reducer'
import styled from 'styled-components'
import { useUnitagByAddressWithoutFlag } from 'uniswap/src/features/unitags/hooksWithoutFlags'
import IconButton, { IconHoverText, IconWithConfirmTextButton } from './IconButton'
import { Status } from './Status'

const AuthenticatedHeaderWrapper = styled.div`
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  flex: 1;
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  & > a,
  & > button {
    margin-right: 8px;
  }

  & > button:last-child {
    margin-right: 0px;
    ${IconHoverText}:last-child {
      left: 0px;
    }
  }
`

const HeaderWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export default function AuthenticatedHeader({ account, openSettings }: { account: string; openSettings: () => void }) {
  const { connector } = useWeb3React()
  const { ENSName } = useENSName(account)
  const dispatch = useAppDispatch()

  const connection = getConnection(connector)
  const disconnect = useCallback(() => {
    connector.deactivate?.()
    connector.resetState()
    dispatch(setRecentConnectionDisconnected())
  }, [connector, dispatch])

  const [showDisconnectConfirm, setShowDisconnectConfirm] = useState(false)

  const { unitag } = useUnitagByAddressWithoutFlag(account, Boolean(account))

  return (
    <AuthenticatedHeaderWrapper>
      <HeaderWrapper>
        <Status account={account} ensUsername={ENSName} uniswapUsername={unitag?.username} connection={connection} />
        <IconContainer>
          <IconButton
            hideHorizontal={showDisconnectConfirm}
            data-testid="wallet-settings"
            onClick={openSettings}
            Icon={Settings}
          />
          <TraceEvent
            events={[BrowserEvent.onClick]}
            name={SharedEventName.ELEMENT_CLICKED}
            element={InterfaceElementName.DISCONNECT_WALLET_BUTTON}
          >
            <IconWithConfirmTextButton
              data-testid="wallet-disconnect"
              onConfirm={disconnect}
              onShowConfirm={setShowDisconnectConfirm}
              Icon={Power}
              text="Disconnect"
              dismissOnHoverOut
            />
          </TraceEvent>
        </IconContainer>
      </HeaderWrapper>
    </AuthenticatedHeaderWrapper>
  )
}
