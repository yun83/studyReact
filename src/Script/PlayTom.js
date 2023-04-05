import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Unity, useUnityContext } from "react-unity-webgl";

const PlayTom = () => {
  const navigate = useNavigate();
  // const { unityContent } = useUnityContext();
  const { unload } = useUnityContext();

  const navigateToPurchase = () => {
    // Unity 컨텐츠 종료 또는 초기화 수행
    handleClick();
    navigate("/");
  };

  // useEffect(() => {
  //   // 컴포넌트가 언마운트될 때 Unity 컨텐츠 종료 또는 초기화 수행
  //   return () => {
  //     alert("--------------222--------------");
  //     unityContent.quitUnityInstance();
  //   }
  // }, [unityContent]);

  async function handleClick() {
    alert("--------------111--------------");
    await unload();
  }

  const { unityProvider, isLoaded, loadingProgression  } = useUnityContext({
    loaderUrl: "build/PlayTomWebGL.loader.js",
    dataUrl: "build/PlayTomWebGL.data",
    frameworkUrl: "build/PlayTomWebGL.framework.js",
    codeUrl: "build/PlayTomWebGL.wasm",
    companyName: "TOM N TOMS",
    productName: "PlayTom",
    productVersion: "1.1.223",
  });

  const loadingPercentage = Math.round(loadingProgression * 100);

  return (
    <div
        style={{
            height: '100vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -10,
        }}
    >
      <button onClick={navigateToPurchase}>뒤로가기</button><br />
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}>
        {isLoaded === false && (
          // We'll conditionally render the loading overlay if the Unity
          // Application is not loaded.
          <div className="loading-overlay">
            <p>Loading... ({loadingPercentage}%)</p>
          </div>
        )}
        <Unity unityProvider={unityProvider} 
          style={{ width: 336, height: 560 }} />
      </div>
    </div>
  );
}

export default PlayTom;
