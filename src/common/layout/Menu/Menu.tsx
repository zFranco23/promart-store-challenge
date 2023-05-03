import styled from 'styled-components';
import { useAuth } from '../../../modules/auth/hooks';
import { useAppDispatch } from '../../../hooks/store';

import { actions as authActions } from '../../../modules/auth/duck';

const MenuWrapper = styled.div<{ show: boolean }>`
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100%;
  top: ${(props) => (props.show ? 0 : '-100%')};
  background: #ffe6d7;
  opacity: ${(props) => (props.show ? 1 : '0')};
  transition: 0.6s ease-in-out;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const MenuItem = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-family: Nunito, sans-serif;
  font-size: 2rem;
  margin-top: 2rem;

  &:disabled {
    opacity: 0.5;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 25px;
  left: 12px;
`;

type Props = {
  show: boolean;
  handleShow: () => void;
};

const Menu = ({ show, handleShow }: Props) => {
  const { isLoggedIn } = useAuth();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <MenuWrapper show={show}>
      <Content className='relative'>
        <CloseButton onClick={handleShow}>
          <i className='material-icons'>close</i>
        </CloseButton>
        <Content>
          <MenuItem disabled>Productos</MenuItem>
          <MenuItem disabled>Categorías</MenuItem>
          {isLoggedIn && <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>}
        </Content>
      </Content>
    </MenuWrapper>
  );
};

export default Menu;
