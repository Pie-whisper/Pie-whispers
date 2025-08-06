// 🧠 WorkWindow.jsx — fully updated and mobile-safe
import * as React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import queenGPT from "../assets/QueenGPT.png";
import comicsPie from "../assets/ComicsPie.png";
import butterflyLottie from "../assets/butterfly.json";
import blurLottie from "../assets/blur.json";
import piePresets from "../assets/pie-presets.png";

const WorkWindow = () => {
  const [bounce, setBounce] = React.useState(false);

  const handleButterflyClick = () => {
    setBounce(true);
    setTimeout(() => setBounce(false), 600);
    window.open("https://mail.google.com/mail/?view=cm&to=piewhispers@gmail.com");
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
        overflow: "hidden",
        fontFamily: "'Quicksand', sans-serif",
        background: "#D5C5FF",
      }}
    >
      {/* 🌈 Top Bar */}
      <div
        style={{
          height: "42px",
          backgroundColor: "#FBD0FF",
          padding: "8px 16px",
          flexShrink: 0,
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "clamp(18px, 2.5vw, 22px)",
            fontWeight: "600",
            color: "#333",
          }}
        >
          Work - Pie
        </h2>
      </div>

      {/* 📜 Scrollable Content */}
<div
  style={{
    flexGrow: 1,
    overflowY: "hidden",
    background: "#EBAFFF",
    padding: "8px",
    position: "relative",
  }}
>
  {/* 📦 Pie Presets Link */}
  <div style={{ textAlign: "center", marginBottom: "80px" }}>
    <img
  src={piePresets}
  alt="Pie Presets"
  onClick={() =>
    window.open(
      "https://drive.google.com/file/d/19nKXEp71C9Y6ng7f_Jh16BTwUIHy-m2E/view?usp=sharing",
      "_blank"
    )
  }
  style={{
    width: "450px",
    height: "420px",
    objectFit: "contain",
    cursor: "pointer",
    transition: "transform 0.3s ease",
  }}
  onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-8px)")}
  onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
/>
    <div
      style={{
        marginTop: "-34px",
        fontSize: "16px",
        fontWeight: "700",
        color: "#333",
        fontFamily: "'anime kids', sans-serif",
      }}
    >
      Download The <span style={{ color: "#FF1493" }}>Pie Presets For After effects</span>
    </div>
  </div>

<div style={{ textAlign: "center", marginTop: "20px" }}>
  <h2 style={{
    fontFamily: "'anime kids', sans-serif",
    fontSize: "1.8rem",
    fontWeight: "700",
    color: "#ff69b4", // cute pink!
    marginBottom: "12px",
  }}>
    🎀 Pie's CCs – Demo Video 🎀
  </h2>

  <iframe
    width="100%"
    height="315"
    src="https://www.youtube.com/embed/8cMAA1PuPDo"
    title="Pie CCs"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    style={{
      borderRadius: "16px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
    }}
  ></iframe>
</div>

  {/* 💌 Email */}
  <div
    style={{
      fontSize: "clamp(20px, 4vw, 28px)",
      fontWeight: "700",
      color: "purple",
      marginBottom: "30px",
      textAlign: "center",
    }}
  >
    Accepting work offers via my work e-mail ;)
  </div>

  {/* 🦋 Butterfly */}
  <div
    onClick={handleButterflyClick}
    style={{
      width: "300px",
      height: "300px",
      margin: "0 auto 60px",
      cursor: "pointer",
      animation: bounce ? "bounce 0.6s ease-in-out" : "none",
    }}
  >
    <Player autoplay loop src={butterflyLottie} style={{ width: "100%", height: "100%" }} />
  </div>

  {/* 🌙 Others Section */}
  <div
    style={{
      position: "relative",
      width: "100%",
      height: "300px",
      marginBottom: "60px",
    }}
  >
    {/* ✨ Text */}
    <div
      style={{
        position: "absolute",
        top: "-88px",
        left: "50%",
        transform: "translateX(-50%)",
        fontSize: "clamp(14px, 2.2vw, 19px)",
        fontWeight: "600",
        lineHeight: "1.6",
        color: "#2D2D2D",
        maxWidth: "720px",
        textAlign: "left",
        zIndex: 2,
        width: "calc(100% - 6vw)",
      }}
    >
      <p>
        <strong>Others?</strong>
        <br />
        Some things aren’t meant to be shared. <br />
        Not yet... Maybe never... <br />
        But if you’re here… maybe you’re meant to see what’s coming Next ;)
      </p>
    </div>
  </div>
</div>

      {/* ✨ Bounce Animation */}
      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
        `}
      </style>
    </div>
  );
};

export default WorkWindow;
