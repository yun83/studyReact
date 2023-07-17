import React, { useEffect, useRef } from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";

const PlayTom = () => {
  const unityRef = useRef(null);

  // const navigateToPurchase = () => {
  //   // navigate("/");
  //   navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
  // };

  const { unityProvider, UNSAFE__detachAndUnloadImmediate: detachAndUnloadImmediate } = useUnityContext({
    loaderUrl: "Unity/PlayTomWebGL.loader.js",
    dataUrl: "Unity/PlayTomWebGL.data",
    frameworkUrl: "Unity/PlayTomWebGL.framework.js",
    codeUrl: "Unity/PlayTomWebGL.wasm",
    companyName: "TOM N TOMS",
    productName: "PlayTom",
    productVersion: "1.1.223",
  });

  useEffect(() => {

    function handleResize() {
      if (unityRef.current) {
        unityRef.current.style.width = `${window.innerWidth}px`;
        unityRef.current.style.height = `${window.innerHeight}px`;
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      detachAndUnloadImmediate().catch((reason) => {
        console.log(reason);
      });
    };
  }, [detachAndUnloadImmediate]);


  return (
    <div
        style={{
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundColor: 'green',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -10,
        }}
    >
      <div style={{ 
          display: 'flex',
          marginbtop : '20px',
          marginbottom : '20px',
          marginLeft : '20px',
          marginRight : '20px',
          justifyContent: 'center',
          alignItems: 'center'}}>
          <Unity ref={unityRef} unityProvider={unityProvider} />
      </div>
    </div>
  );
}

export default PlayTom;
