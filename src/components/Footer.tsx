import React from "react";

const Footer: React.FC = () => (
  <footer style={{ textAlign: "center", marginTop: "40px", color: "#565f89", fontSize: "0.9rem" }}>
    © {new Date().getFullYear()} HudaCihuyy. Made with React, TypeScript & Vite.
  </footer>
);

export default Footer;
