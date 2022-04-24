import Paragraph from "./styles/Paragraph";
import Title from "./styles/Title";
import { ReactComponent as Instagram } from "./icons/instagram.svg";
import styled from "styled-components";

const IconLink = styled.a``;

const Contact = () => {
  return (
    <div>
      <Title>Contact</Title>
      <Paragraph>ivoschouten.werk@gmail.com</Paragraph>
      <Paragraph>
        <IconLink
          href="https://www.instagram.com/_ivoschouten/"
          target="_blank"
        >
          <Instagram></Instagram>
        </IconLink>
      </Paragraph>
    </div>
  );
};

export default Contact;
