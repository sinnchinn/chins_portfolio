"use client"

import { useEffect, useState } from "react";

const OuranComponent = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
    {isClient && (
      <div className="border-0">
        <iframe className="rounded-lg border-0" frameBorder="0" src="https://itch.io/embed-upload/10362716?color=333333" allowFullScreen width="760" height="460">
          <a href="https://schin.itch.io/cyoa-ouran-fixed">Play cyoa_ouran_fixed on itch.io</a>
        </iframe>
      </div>
    )}
    </>
  )
}
export default OuranComponent;