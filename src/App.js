import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import Main from './Script/Main';
import Product from './Script/Product';
import Login from './Script/Login';
import Test from './Script/TestPage';
import T02 from './Script/T02Page';
import PlayTom from './Script/PlayTom';
import Puzzle from './Script/PuzzleGame';
import MergeGame from './Script/MergeGame';
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
              <Route path="/Test" element={<Test />}></Route>``
              <Route path="/T02" element={<T02 />}></Route>
              
              <Route path="/PlayTom" element={<PlayTom />}></Route>
              <Route path="/Puzzle" element={<Puzzle />}></Route>
              <Route path="/MergeGame" element={<MergeGame />}></Route>

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
