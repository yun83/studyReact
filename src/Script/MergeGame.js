import React, { useEffect, useRef } from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";

const MergeGame = () => {
  const unityRef = useRef(null);

  // const navigateToPurchase = () => {
  //   // navigate("/");
  //   navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
  // };

  const { unityProvider, UNSAFE__detachAndUnloadImmediate: detachAndUnloadImmediate } = useUnityContext({
    loaderUrl: "WebGL_MergeGame/WebGL_MergeGame.loader.js",
    dataUrl: "WebGL_MergeGame/WebGL_MergeGame.data",
    frameworkUrl: "WebGL_MergeGame/WebGL_MergeGame.framework.js",
    codeUrl: "WebGL_MergeGame/WebGL_MergeGame.wasm",
    companyName: "TOM N TOMS",
    productName: "MergeGame",
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

export default MergeGame;
