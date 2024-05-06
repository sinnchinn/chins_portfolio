"use client"
import { useEffect, useState } from "react";

const GhibliComponent = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <div>
          <iframe frameBorder="0" src="https://itch.io/embed-upload/10363822?color=333333" allowFullScreen width="760" height="460">
            <a href="https://schin.itch.io/studioghibli-trivia">Play studioghibli_trivia on itch.io</a>
          </iframe>
        </div>
      )}
    </>
  );
};

export default GhibliComponent;
