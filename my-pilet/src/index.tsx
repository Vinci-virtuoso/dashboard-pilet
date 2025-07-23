import * as React from 'react';
import { PiletApi } from 'my-app';
import { NavLink } from 'react-router-dom';
import { DashboardPage } from './pages/DashboardPage';
import { Post } from './types';
import './injectTailwind';


const DetailPage = React.lazy(() => import('./pages/DetailPage'));
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

export function setup(app: PiletApi) {
  const connect = app.createConnector<Array<Post>>(() =>
    fetch(apiUrl).then(res => res.json())
  );

  app.registerMenu(() => (
    <NavLink to="/dashboard">Dashboard</NavLink>
  ));

  app.registerPage('/dashboard', connect(DashboardPage));

  app.registerPage('/dashboard/:id', DetailPage);
}
