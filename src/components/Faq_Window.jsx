import * as React from "react";

const FaqWindow = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundColor: "#D5C5FF",
        fontFamily: "'Quicksand', sans-serif",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        padding: "5vw",
        boxSizing: "border-box",
        color: "#2e005f",
      }}
    >
      {/* 🌸 Top Bar */}
      <div
        style={{
          backgroundColor: "#FBD0FF",
          padding: "12px 20px",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "clamp(16px, 4vw, 26px)",
            fontWeight: "700",
            color: "#944A9A",
            textShadow: "0 1px 2px rgba(0,0,0,0.1)",
          }}
        >
          FAQ – <span style={{ fontWeight: "600" }}>Real Ones Only</span>
        </div>
      </div>

      {/* 📚 Real Questions */}
      <div
        style={{
          marginTop: "4vw",
          fontSize: "clamp(14px, 2.4vw, 18px)",
          fontWeight: "500",
          lineHeight: "1.85",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <p>
          <strong>Q1: Who built this website?</strong>
          <br />
          A: Me — Pie. A 16 y/o who's learning code, design, AE, Unity and building my own empire from scratch 😸🫠
        </p>

        <p>
          <strong>Q2: What do you use to make your projects?</strong>
          <br />
          A: After Effects, Figma, React, Tailwind, Unity, Studio Code, and whatever gets the job done. I’m always learning new stuff🥸🎀
        </p>

        <p>
          <strong>Q3: Can I use your presets or assets?</strong>
          <br />
          A: Yup — check the Work tab. If it's posted, it's free to use (with credit if you vibe). Some stuff I keep exclusive tho ;)
        </p>

        <p>
          <strong>Q4: How can I contact?</strong>
          <br />
          A: Email me at <strong>piewhispers@gmail.com</strong> or use the butterfly in the Work window 😺🦋
        </p>

        <p>
          <strong>Q5: What are you working on now?</strong>
          <br />
          A: Learning Unity, try to make my own anime storydriven game and AE for edits, I'm learning coding as well🫠
        </p>

        <p>
          <strong>Q6: Are you on social media?</strong>
          <br />
          A: Yes! You’ll find all the links in the links window Homie. I drop previews, builds, and random chaos 🥸✨
        </p>

        <p>
          <strong>Q7: Can we collab?</strong>
          <br />
          A: Perhaps — if you’re serious, creative, and not just wasting time. Show me what you got!😺🎀
        </p>
      </div>
    </div>
  );
};

export default FaqWindow;
