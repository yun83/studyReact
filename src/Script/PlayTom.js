import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Unity, useUnityContext } from "react-unity-webgl";

const PlayTom = () => {
    const navigate = useNavigate();
    const { unityContext, unityContent } = useUnityContext();

    const navigateToPurchase = () => {
      // Unity 컨텐츠 종료 또는 초기화 수행
    //   unityContent.quitUnityInstance();
      navigate("/");
    };

    useEffect(() => {
      // 컴포넌트가 언마운트될 때 Unity 컨텐츠 종료 또는 초기화 수행
      return () => {
        unityContent.quitUnityInstance();
      }
    }, []);

    const { unityProvider } = useUnityContext({
      loaderUrl: "build/PlayTomWebGL.loader.js",
      dataUrl: "build/PlayTomWebGL.data",
      frameworkUrl: "build/PlayTomWebGL.framework.js",
      codeUrl: "build/PlayTomWebGL.wasm",
    });

    return (
      <div>
          <button onClick={navigateToPurchase}>뒤로가기</button>
          <div style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
          }}>
          <Unity unityProvider={unityProvider} style={{ width: 336, height: 560 }}/>
          </div>
      </div>
    );
}

export default PlayTom;
