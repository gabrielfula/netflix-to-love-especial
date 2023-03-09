import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Grid from "../../components/Pictures/Grid";
import { Button, Container } from "./Styled";
import { BsFillPlayFill } from "react-icons/bs";
import Viagem from "../../components/Viagens/Viagem";
import Family from "../../components/Family/Family";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <div>
          <h3>E foi aqui que a nossa história começou</h3>
          <Button href="/video">
            <BsFillPlayFill size={30} />
            Assistir
          </Button>
        </div>
      </Container>
      <Grid />
      <Viagem />
      <Family />
    </>
  );
}
