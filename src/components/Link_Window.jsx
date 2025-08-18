import * as React from "react";
import youtubeIcon from "../assets/youtube.png";
import instagramIcon from "../assets/instagram.png";
import discordIcon from "../assets/discord.png";

const LinkWindow = ({ isVisible, onClose }) => {
  const [activePopup, setActivePopup] = React.useState(null);

  const links = {
    youtube: [
      { label: "My Edits 😸❤️", url: "https://www.youtube.com/@Queen_Pie_whispers-pie/shorts" },
      { label: "My learnings 🥸🎀", url: "https://www.youtube.com/@FabulousPie_2211" },
      { label:  " My tiktok 😸", url: "https://www.tiktok.com/@pie__pet"}  
    ],

    instagram: [
      { label: "Instagram", url: "https://www.instagram.com/pie_whispers/" },
    ],
    discord: [
      { label: "Coming Soon! Perhaps Never 😸", url: "#" }, // Placeholder
    ],
  };

  const handleClick = (platform) => {
    setActivePopup((prev) => (prev === platform ? null : platform));
  };

  const renderPopup = (platform, linksArray) => {
    if (activePopup !== platform) return null;

    return (
      <div
        style={{
          position: "absolute",
          bottom: "110px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "#fff",
          padding: "12px 18px",
          borderRadius: "12px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.14)",
          fontFamily: "Quicksand, sans-serif",
          fontSize: "14px",
          zIndex: 20,
          minWidth: "180px",
        }}
      >
        {linksArray.map((item, index) => (
          <div key={index} style={{ margin: "6px 0" }}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#ee00ffff",
                textDecoration: "none",
                fontWeight: "600",
                display: "block",
              }}
            >
              {item.label}
            </a>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: isVisible ? "flex" : "none",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        overflow: "hidden",
        borderRadius: "20px",
        background: "#D5C5FF",
        position: "relative",
        padding: "40px 20px 20px 20px",
        boxSizing: "border-box",
      }}
    >
      {/* 🌸 Top Bar with Close */}
      <div
        style={{
          backgroundColor: "#FBD0FF",
          width: "100%",
          height: "39px",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            right: "10px",
            top: "8px",
            background: "none",
            border: "none",
            fontSize: "18px",
            fontWeight: "bold",
            color: "#944A9A",
            cursor: "pointer",
          }}
        >
          ❤️
        </button>
      </div>

      {/* 🧠 Title */}
      <div
        style={{
          marginTop: "-35px",
          fontSize: "22px",
          fontWeight: "700",
          color: "#944A9A",
          zIndex: 2,
          fontFamily: "'Quicksand', sans-serif",
        }}
      >
        Pie's - <span style={{ fontWeight: "600" }}>links</span>
      </div>

      {/* 🌈 Icon Row */}
      <div
        style={{
          marginTop: "60px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "50px",
          zIndex: 5,
        }}
      >
        {Object.entries(links).map(([platform, linksArray]) => (
          <div key={platform} style={{ position: "relative" }}>
            <img
              src={
                platform === "youtube"
                  ? youtubeIcon
                  : platform === "instagram"
                  ? instagramIcon
                  : discordIcon
              }
              alt={platform}
              onClick={() => handleClick(platform)}
              style={{
                width: "100px",
                height: "100px",
                objectFit: "contain",
                cursor: "pointer",
                transition: "transform 0.3s",
                transform:
                  activePopup === platform ? "translateY(-10px)" : "translateY(0)",
              }}
            />
            {renderPopup(platform, linksArray)}
          </div>
        ))}
      </div>

      {/* 🍰 Text Bubble */}
      <div
        style={{
          marginTop: "50px",
          background: "rgba(50, 50, 70, 0.6)",
          padding: "14px 28px",
          borderRadius: "20px",
          backdropFilter: "blur(12px)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          zIndex: 10,
          fontSize: "16px",
          fontWeight: "700",
          color: "#fff",
          fontFamily: "'Quicksand', sans-serif",
          textAlign: "center",
          lineHeight: "1.6",
          whiteSpace: "pre-line",
        }}
      >
        Some links are warming up in the oven... 🐱🧁{"\n"}
        A little more time and they’ll be ready to serve!
      </div>
    </div>
  );
};

export default LinkWindow;
