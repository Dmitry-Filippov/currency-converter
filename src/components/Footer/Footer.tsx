const Footer = () => {
  const date = new Date();

  return (
    <footer style={{ display: "flex", justifyContent: "center" }}>
      <p>Dmitry Filippov, {date.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
