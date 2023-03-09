import React from "react";
import Navbar from "../../components/navbar/Navbar";
import videoCouple from "/public/coupleVideo.mp4";

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
