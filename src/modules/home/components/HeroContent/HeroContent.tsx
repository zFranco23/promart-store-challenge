import Slider from '../../../../common/components/Slider/Slider';
import { FromMobileElem, MobileElem } from '../../../../utils/responsive';
import useMediaQuery from '../../../../utils/responsive/useMediaQuery';

//Implement get banners logic, e.g from a rest api or harcoded in front.
const BANNERS = [
  {
    mobileUrl: 'https://i.ibb.co/1J9CSPc/imagen.png',
    desktopUrl:
      'https://promart.vteximg.com.br/arquivos/dv-diadelamadre-02052023.png?v=638186434004170000',
  },
  {
    desktopUrl:
      'https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg',
  },
  {
    mobileUrl: 'https://i.ibb.co/vHzMLj0/imagen.png',
    desktopUrl:
      'https://static.vecteezy.com/system/resources/previews/002/294/859/original/flash-sale-web-banner-design-e-commerce-online-shopping-header-or-footer-banner-free-vector.jpg',
  },
];
const HeroContent = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <div className='mt-10'>
      <h1 className='text-center mb-10 font-bold leading-tight text-4xl md:text-5xl md:text-left'>
        En{' '}
        <span className='text-orange'>
          <b>PROMART</b>
        </span>{' '}
        <br />
        tenemos los mejores productos <br />
        para ti y tu familia.
      </h1>
      <Slider height={isDesktop ? '325px' : '200px'}>
        {BANNERS.map((b, idx: number) => {
          return (
            <div key={'banner-' + idx} className='h-full rounded-xl overflow-hiden'>
              <MobileElem>
                <img className='h-full w-full rounded-xl' src={b.mobileUrl || b.desktopUrl} />
              </MobileElem>
              <FromMobileElem>
                <img className='h-full w-full rounded-xl' src={b.desktopUrl} />
              </FromMobileElem>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default HeroContent;
