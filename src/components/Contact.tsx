import styled from "styled-components";

const Title = styled.h3`
  font-size: 17px;
  font-weight: 500;
  margin: 0;
`;

const Paragraph = styled.p`
  margin-top: 0.2rem;
  margin-bottom: 17px;
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
`

const Contact = () => {
  return (
    <div>
      <Title>email</Title>
      <Paragraph><Link href="mailto:ivoschouten.werk@gmail.com" target="_blank">ivoschouten.werk@gmail.com</Link></Paragraph>

      <Title>instagram</Title>
      <Paragraph><Link href="https://instagram.com/_ivoschouten" target="_blank">@_ivoschouten</Link></Paragraph>

      <Title>website</Title>
      <Paragraph>Levi Schouten</Paragraph>

      <Title>font</Title>
      <Paragraph>Space Grotesk, Florian Karsten</Paragraph>
    </div>
  );
};

export default Contact;
