/**
 * 路由配置
 * react-router 和 react-router-dom
 * 区别是react-router-dom除了提供了router的核心api外（BrowserRouter、Route、Link），还提供了通过dom触发事件控制路由。
 */
'use strict';

import React from 'react';
import dysView from '../views/dys';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function router () {
  return (
    <Router>
      <Route path="/dys" components={dysView}></Route>
    </Router>
  );
}

export default router;
