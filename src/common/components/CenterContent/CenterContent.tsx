import styled from "styled-components";

import type { ReactNode } from "react";
const Wrapper = styled.main`
  padding: 1rem;
  max-width: 100% !important;
  @media (min-width: 768px) {
    max-width: 80% !important;
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
