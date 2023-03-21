const Title = () => (
  <a href="/">
    <img
      alt="logo"
      src="https://www.freepnglogos.com/uploads/logo-ifood-png/logo-client-ifood-hd-black-symbol-png-4.png"
      className="logo"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
