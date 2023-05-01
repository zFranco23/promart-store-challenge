import styled from "styled-components";

import type { ReactNode } from "react";
const Wrapper = styled.main`
  padding: 1rem;
  @media (min-width: 768px) {
    max-width: 80%;
    margin: 0 auto;
  }
`;

type Props = {
  children: ReactNode;
};
const CenterContent = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default CenterContent;
