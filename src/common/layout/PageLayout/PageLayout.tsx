import CenterContent from '../../components/CenterContent/CenterContent'
import Navbar from '../Navbar/Navbar'

import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

/**
 *
 * @returns Page layout style wrapper
 */
const PageLayout = ({ children }: Props) => {
  return (
    <div className='inline-block'>
      <Navbar />
      <div className='w-full mt-20'>
        <CenterContent>{children}</CenterContent>
      </div>
    </div>
  )
}

export default PageLayout
