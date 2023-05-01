import { useState, useEffect } from 'react'
import styled from 'styled-components'
// import usePrevious from "../../../hooks/usePrevious";

type Props = {
  type: 'success' | 'error' | 'neutral'
  message?: string
  timeout?: number
}

type StyledProps = {
  type: 'success' | 'error' | 'neutral'
  show: boolean
}

const SNACK_BG_COLORS = {
  success: '#4caf50',
  error: '#f44336',
  neutral: '#FDFDFD',
}

const StyledSnackbar = styled.div<StyledProps>`
  position: fixed;
  bottom: 20px;
  background-color: ${(props) => SNACK_BG_COLORS[props.type]};
  color: #ffffff;
  padding: 16px;
  border-radius: 4px;
  font-size: 1.5rem;
  font-weigth: bold;
  z-index: 9999;
  transition: all 0.3s ease-in-out;
  left: ${(props) => (props.show ? '20px' : '-100%')};
  opacity: ${(props) => (props.show ? 1 : 0)};
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
`

const Snackbar = (props: Props) => {
  const { type, message, timeout = 3000 } = props
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (message) setShow(true)
    else setShow(false)
  }, [message])

  useEffect(() => {
    if (show) {
      const id = setTimeout(() => {
        setShow(false)
      }, timeout)
      return () => {
        clearTimeout(id)
      }
    }
  }, [show, timeout])

  return (
    <StyledSnackbar show={show} type={type}>
      <p className='font-bold'>{message}</p>
    </StyledSnackbar>
  )
}

export default Snackbar
