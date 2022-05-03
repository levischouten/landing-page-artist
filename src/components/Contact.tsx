import styled from "styled-components";

const Title = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
`;

const Paragraph = styled.p`
  margin-top: 0.2rem;
  margin-bottom: 1.5rem;
`;

const Contact = () => {
  return (
    <div>
      <Title>email</Title>
      <Paragraph>ivoschouten.werk@gmail.com</Paragraph>

      <Title>instagram</Title>
      <Paragraph>@_ivoschouten</Paragraph>

      <Title>website</Title>
      <Paragraph>Levi Schouten</Paragraph>

      <Title>font</Title>
      <Paragraph>Space Grotesk, Florian Karsten</Paragraph>
    </div>
  );
};

export default Contact;
