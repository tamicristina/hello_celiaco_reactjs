import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <span className="footer_empty"></span>
      <span className="footer_text">
        <p>Desenvolvido por Tamires Cristina</p>
      </span>
      <span className="footer_redes">
      <a 
        
        href="https://www.instagram.com/taami.cristina/"
        target="_blank"
      >
        <img src="https://i.ibb.co/ySTzCmP/instagram-icon.png" />
      </a>
      <a
        target="_blank"
        href="https://twitter.com/taamicristina_"
      >
        <img src="https://i.ibb.co/G0pdBsy/icone-twitter.png" />
      </a>
      <a
        target="_blank"
        href="https://www.facebook.com/profile.php?id=1296987168"
      >
        <img src="https://i.ibb.co/Lv2gJ49/facebook.png" />
      </a>
      </span>
    </footer>
  );
}

export default Footer;
