//scan.js

import React, { useState, useEffect } from "react";
import QrReader from "react-qr-scanner";
import Link from "next/link";

function Scan() {
  const [data, setData] = useState("No result");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleScan = (result) => {
    if (result) {
      setData(result.text);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <div>
      <div>
        {isClient &&
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: "40%", height: "40%" }}
          />
        }
      </div>
      <p>{data}</p>
      <Link href="/generate">
        <h2> Generate a qr code&rarr;</h2>
        <p> Generate a qr code with text or a link</p>
      </Link>
    </div>
  );
}

export default Scan;
