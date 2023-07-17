import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Unity, useUnityContext } from "react-unity-webgl";

const Puzzle = () => {
  const navigate = useNavigate();
  const unityRef = useRef(null);

  const navigateToPurchase = () => {
    // navigate("/");
    navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
  };

  const { unityProvider,UNSAFE__detachAndUnloadImmediate: detachAndUnloadImmediate, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "Puzzle/Puzzle.loader.js",
    dataUrl: "Puzzle/Puzzle.data",
    frameworkUrl: "Puzzle/Puzzle.framework.js",
    codeUrl: "Puzzle/Puzzle.wasm",
    companyName: "TOM N TOMS",
    productName: "PuzzleGame",
    productVersion: "1.1.223",
  });
  const loadingPercentage = Math.round(loadingProgression * 100);

  useEffect(() => {
    function handleResize() {
      if (unityRef.current) {
        unityRef.current.style.width = `${window.innerWidth}px`;
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
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
          <div className="loading-overlay" >
            <p>Loading... ({loadingPercentage}%)</p>
          </div>
        )}
        <Unity ref={unityRef} unityProvider={unityProvider} />
      </div>
    </div>
  );
}

export default Puzzle;
