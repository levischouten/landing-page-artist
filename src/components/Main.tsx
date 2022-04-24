import styled from "styled-components";

interface Props {
  children: JSX.Element;
}

const MainWrapper = styled.main`
  flex: auto;
  display: block;
  overflow: auto;
  width: 100%;
  max-width: 700px;
  margin-inline: auto;
`;

const Main = ({ children }: Props) => {
  return <MainWrapper>{children}</MainWrapper>;
};

export default Main;
