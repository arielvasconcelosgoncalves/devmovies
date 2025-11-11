import { ButtonRed, ButtonWhite } from './styles';

const Button = ({ children, red }) => {
  return <>{red ? <ButtonRed>{children}</ButtonRed> : <ButtonWhite>{children}</ButtonWhite>}</>;
};

export default Button;
