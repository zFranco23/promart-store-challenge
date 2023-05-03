import logoImg from '../../../assets/logo.png';
import logoOrangeImg from '../../../assets/logo-orange.png';

type Props = {
  color?: 'white' | 'orange';
  className?: string;
};
const Logo = (props: Props) => {
  const { color = 'white', className = '' } = props;
  return (
    <img
      src={color === 'white' ? logoImg : logoOrangeImg}
      className={`max-w-full w-full object-contain h-12 ${className}`}
    />
  );
};

export default Logo;
