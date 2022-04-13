import React, { lazy } from 'react';
// 引入antd图标
import {
  HomeOutlined,
  UserOutlined
} from '@ant-design/icons';

import Home from '../pages/home'
const User = lazy(() => import('../pages/user'));
 
export const routes = [
  {
    path: '',
    title: '首页',
    component: <Home />,
    icon: <HomeOutlined />
  },
  {
    path: 'user',
    title: '用户管理',
    component: <User />,
    icon: <UserOutlined />
  }
]