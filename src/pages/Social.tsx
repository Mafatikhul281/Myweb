import React from "react";
import { FaFacebook, FaXTwitter, FaTiktok, FaGithub } from "react-icons/fa6";

const Social: React.FC = () => (
  <section>
    <h1>My Social Media</h1>
    <p>
      <FaFacebook style={{ fontSize: '1em', verticalAlign: 'middle', marginRight: '5px' }} />
      Facebook: <a href="https://www.facebook.com/share/1ARCkDgjQj/" target="_blank" rel="noopener noreferrer">Mafatikhul Huda</a>
    </p>
    <p>
      <FaXTwitter style={{ fontSize: '1em', verticalAlign: 'middle', marginRight: '5px' }} />
      X: <a href="https://x.com/HudaCihuyy" target="_blank" rel="noopener noreferrer">@HudaCihuyy</a>
    </p>
    <p>
      <FaTiktok style={{ fontSize: '1em', verticalAlign: 'middle', marginRight: '5px' }} />
      TikTok: <a href="https://www.tiktok.com/@mafatikhul_huda?_t=ZS-8wYumvWtuT4&_r=1" target="_blank" rel="noopener noreferrer">@mafatikhul_huda</a>
    </p>
    <br />
    <h1>Other</h1>
    <p>
      <FaGithub style={{ fontSize: '1em', verticalAlign: 'middle', marginRight: '5px' }} />
      GitHub: <a href="https://github.com/Mafatikhul281" target="_blank" rel="noopener noreferrer">HudaCihuyy</a>
    </p>
  </section>
);

export default Social;