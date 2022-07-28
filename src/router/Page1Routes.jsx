import { Page1 } from '../components5/Page1';
import { Page1DetailA } from '../components5/Page1DetailA';
import { Page1DetailB } from '../components5/Page1DetailB';
export const page1Routes = [
  {
    path: '/',
    exact: 'true',
    childlen: <Page1 />,
  },
  {
    path: '/detailA',
    exact: 'false',
    childlen: <Page1DetailA />,
  },
  {
    path: '/detailB',
    exact: 'false',
    childlen: <Page1DetailB />,
  },
];
