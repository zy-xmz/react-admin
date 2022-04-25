import React, { lazy } from 'react';
// 引入antd图标
import {
  HomeOutlined,
  SmileOutlined,
  CoffeeOutlined,
  SendOutlined,
} from '@ant-design/icons';

import Home from '../pages/home'
const Free = lazy(() => import('../pages/free'));
const Happy = lazy(() => import('../pages/happy'));
const Simple = lazy(() => import('../pages/simple'));
 
export const routes = [
  {
    path: '',
    title: '首页',
    component: <Home />,
    icon: <HomeOutlined />
  },
  {
    path: 'happy',
    title: '开心',
    component: <Happy />,
    icon: <SmileOutlined />
  },
  {
    path: 'simple',
    title: '简单',
    component: <Simple />,
    icon: <CoffeeOutlined />
  },
  {
    path: 'free',
    title: '自由',
    component: <Free />,
    icon: <SendOutlined />
  }
]