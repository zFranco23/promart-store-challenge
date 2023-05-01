import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const InlineLoader = styled.a`
  width: 48px;
  height: 48px;
  border: 5px solid #ff6e00;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotate} 1s linear infinite;
`;

const LoaderWrap = styled.div`
  z-index: 10;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgb(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loader = () => {
  return (
    <LoaderWrap>
      <div>
        <InlineLoader />
      </div>
    </LoaderWrap>
  );
};

export default Loader;
