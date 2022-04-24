import styled from "styled-components";

const FooterWrapper = styled.footer`
  height: 120px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>Copyright Ivo Schouten</p>
    </FooterWrapper>
  );
};

export default Footer;
