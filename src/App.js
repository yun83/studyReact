import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from 'react-router-dom';

import Main from './Script/Main';
import Product from './Script/Product';
import Login from './Script/Login';
import Test from './Script/TestPage';
import PlayTom from './Script/PlayTom';
import NotFound from './Script/NotFound';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div className="App" >
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="/Login" element={<Login />}></Route>
              <Route path="/Test" element={<Test />}></Route>
              
              <Route path="/PlayTom" element={<PlayTom />}></Route>

              <Route path="/product/:ItemId" element={<Product />}></Route>
              {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
              <Route path="/*" element={<NotFound />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;