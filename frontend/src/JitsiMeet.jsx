import React, { useEffect, useRef } from "react";

export default function JitsiMeet({ roomName }) {
  const jitsiContainerRef = useRef(null);

  useEffect(() => {
    // Dynamically load the Jitsi script
    const script = document.createElement("script");
    script.src = "https://meet.jit.si/external_api.js";
    script.async = true;
    script.onload = () => {
      const domain = "meet.jit.si";
      const options = {
        roomName: roomName || "MyPropertyManagementRoom",
        parentNode: jitsiContainerRef.current,
        width: "100%",
        height: 600,
        interfaceConfigOverwrite: {
          TOOLBAR_BUTTONS: [
            "microphone",
            "camera",
            "hangup",
            "chat",
            "fullscreen",
            "raisehand",
            "tileview",
          ],
        },
        configOverwrite: {
          startWithAudioMuted: true,
          startWithVideoMuted: false,
        },
      };
      new window.JitsiMeetExternalAPI(domain, options);
    };
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      if (window.JitsiMeetExternalAPI) {
        jitsiContainerRef.current.innerHTML = "";
      }
    };
  }, [roomName]);

  return <div ref={jitsiContainerRef} style={{ marginTop: "20px" }} />;
}
