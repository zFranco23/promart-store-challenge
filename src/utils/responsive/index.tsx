import { Fragment } from 'react'
import useMediaQuery from './useMediaQuery'

import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const MobileElem = ({ children }: Props) => {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  return <Fragment>{isDesktop ? null : children}</Fragment>
}

export const FromMobileElem = ({ children }: Props) => {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  return <Fragment>{isDesktop ? children : null}</Fragment>
}
