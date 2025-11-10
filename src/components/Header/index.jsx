import Logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div>
      <img src={Logo} alt="Logo do DevMovies" style={{ height: 20 }} />
    </div>
  );
};

export default Header;
