import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Unity, useUnityContext } from "react-unity-webgl";

const Puzzle = () => {
  const navigate = useNavigate();
  const { unload } = useUnityContext();

  const navigateToPurchase = () => {
    // Unity 컨텐츠 종료 또는 초기화 수행
    handleClick();
    navigate("/");
  };

  async function handleClick() {
    // alert("--------------111--------------");
    await unload();
  }
  
  useEffect(() => {
    const body = document.body;
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const setBodyBackgroundColor = () => {
      body.style.backgroundColor = darkModeMediaQuery.matches ? '#1a1a1a' : '#fff';
    };
    setBodyBackgroundColor();
    darkModeMediaQuery.addListener(setBodyBackgroundColor);
    return () => {
      darkModeMediaQuery.removeListener(setBodyBackgroundColor);
    };
  }, []);


  const { unityProvider, isLoaded, loadingProgression  } = useUnityContext({
    loaderUrl: "Puzzle/Puzzle.loader.js",
    dataUrl: "Puzzle/Puzzle.data",
    frameworkUrl: "Puzzle/Puzzle.framework.js",
    codeUrl: "Puzzle/Puzzle.wasm",
    companyName: "TOM N TOMS",
    productName: "PuzzleGame",
    productVersion: "1.1.223",
  });

  const loadingPercentage = Math.round(loadingProgression * 100);

  return (
    <div
        style={{
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
      <button style={{ marginLeft: '5px' , marginTop: '5px'}} onClick={navigateToPurchase}>뒤로가기</button><br />
      <div style={{ 
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'}}>
        {
          isLoaded === false && (
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

export default Puzzle;
