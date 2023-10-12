// generate.js
import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { USERS, EVENTS, REGISTRATIONS } from "./constants/constants";
import Link from "next/link";

function Generate() {
  const [qrCodeValue, setQrCodeValue] = useState("");

  useEffect(() => {
    // this will load the currently logged in user's ID in QR code form
    // the user will show this to the event organizer to scan
    setQrCodeValue(USERS[0].userID);
  }, []);

  return (
    <div>
      <div>Generate QR</div>

      {qrCodeValue != "" && (
        <>
          <QRCode value={qrCodeValue} />
          {/* This will be a 'read only' field when actually implemented */}
          <input
            value={qrCodeValue}
            onChange={(e) => {
              setQrCodeValue(e.target.value);
            }}
          />
          <Link href="/scan">
            <h2>Scan a qr code&rarr;</h2>
            <p>Scan a qr code with your camera</p>
          </Link>
        </>
      )}

    </div>
  );
}

export default Generate;
