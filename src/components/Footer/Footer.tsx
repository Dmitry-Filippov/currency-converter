const Footer = () => {
  const date = new Date();

  return (
    <footer>
      <p>Dmitry Filippov, {date.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
