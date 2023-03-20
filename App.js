import React from "react";
import ReactDOM from "react-dom/client";

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

const mcDonalds = {
  image:
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/0e8f93a56b93e43d7627c2c21bc1106c",
  name: "Mc.Donalds",
  cuisines: ["Burgers", "Cafe", "Desserts"],
  rating: 4.5,
};

const RestuarantCard = () => {
  return (
    <div className="card">
      <img src={mcDonalds.image} />
      <h2>{mcDonalds.name}</h2>
      <h3>{mcDonalds.cuisines.join(", ")}</h3>
      <h4>{mcDonalds.rating} stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      <RestuarantCard />
      <RestuarantCard />
      <RestuarantCard />
      <RestuarantCard />
      <RestuarantCard />
      <RestuarantCard />
      <RestuarantCard />
    </div>
  );
};

const Footer = () => {
  return <h1>Footer</h1>;
};

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
