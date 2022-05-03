import styled from "styled-components";

const FooterWrapper = styled.footer`
  height: 120px;
  text-align: right;
  font-size: 12px;
`;

const Paragraph = styled.p`
  color: #585858;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <hr />
      <Paragraph>Copyright © 2022</Paragraph>
    </FooterWrapper>
  );
};

export default Footer;
