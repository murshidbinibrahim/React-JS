const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(14)
        .fill("")
        .map((item, index) => (
          <div className="shimmer-card" key={index}>
            <img />
            <h1></h1>
            <h2></h2>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
