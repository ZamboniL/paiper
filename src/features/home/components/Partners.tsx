import Ticker from 'components/Ticker';

const images = ['/img/bmp.png', '/img/rodobens.png', '/img/plenum.png', '/img/btg.png'];

export default function Partners() {
  return (
    <div className="relative mx-auto mt-20 flex max-w-full flex-col items-center gap-8 md:max-w-[970px]">
      <h3 className="max-w-3xl text-center text-base">As melhores empresas acreditam na Paiper</h3>
      <div className="max-w-full">
        <Ticker
          containerWidth={970}
          style={{
            maskImage:
              'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)'
          }}
        >
          {images.map((image) => (
            <div key={`${image}`}>
              <img src={image} alt="" className="max-w-fit px-4" loading="eager" />
            </div>
          ))}
        </Ticker>
      </div>
    </div>
  );
}
