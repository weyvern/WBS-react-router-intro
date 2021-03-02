const Home = ({ header, img }) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{header}</h1>
      <img src={img} alt='mexico city' width='100%' />
    </div>
  );
};

export default Home;
