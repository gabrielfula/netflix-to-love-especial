import React from "react";
import Navbar from "../../components/navbar/Navbar";
import videoCouple from "../../assets/coupleVideo.mp4";
import { Button } from "../home/Styled";
import { BsFillPlayFill } from "react-icons/bs";

export default function Video() {
  return (
    <>
      <Navbar />
      <section>
        <video
          src={videoCouple}
          autoPlay
          loop
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "contain",
          }}
        />
      </section>
    </>
  );
}
