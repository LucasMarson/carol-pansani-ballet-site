import { useEffect, useState } from 'react';

export default function HeroBanner() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Verifica na primeira vez
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const bannerImage = isMobile 
    ? '/images/bannermobile.png' 
    : '/images/banner.png';

  return (
    <section 
      className="relative w-full overflow-hidden flex items-center justify-center mt-26"
      style={{
        backgroundImage: `url('${bannerImage}')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        aspectRatio: isMobile ? '1350 / 1920' : '2560 / 1440',
      }}
    >
      {/* Seu conteúdo aqui */}
    </section>
  );
}
