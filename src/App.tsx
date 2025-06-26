import "./styles/themes.css";
import "./styles/global.css";
import { Container } from "./components/Container";
import { Heading } from "./components/Heading";

export function App() {
  return (
    <>
      <Container>
        <Heading>Logo</Heading>
      </Container>
      <Container>
        <Heading>Logo</Heading>
      </Container>
    </>
  );
}
