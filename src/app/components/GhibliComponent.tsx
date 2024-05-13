"use client"
import { useEffect, useState } from "react";

const GhibliComponent = () => {
  const [isClient, setIsClient] = useState(false);
  const [pageSize, setPageSize] = useState<boolean>(false);


  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setPageSize(window.innerWidth > 768)
    }

    handleResize();

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [pageSize])

  return (
    <>
      {isClient && (
        <div>
          <iframe frameBorder="0" src="https://itch.io/embed-upload/10363822?color=333333" allowFullScreen width={pageSize ? "700" : '385'} height={pageSize ? "460" : '300'}>
            <a href="https://schin.itch.io/studioghibli-trivia">Play studioghibli_trivia on itch.io</a>
          </iframe>
        </div>
      )}
    </>
  );
};

export default GhibliComponent;
