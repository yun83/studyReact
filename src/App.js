import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Routes
  } from 'react-router-dom';

import Header from './Script/Header';
import Main from './Script/Main';
import NotFound from './Script/NotFound';
import Product from './Script/Product';

class App extends React.Component {
  render() {
    return (
			<BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Main />}> </Route>
          <Route path="/Product/:ItemId" element={<Product />}> </Route>
          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
          <Route path="/*" element={<NotFound />}> </Route>
        </Routes>
      </div>
			</BrowserRouter>
    );
  }
}

export default App;