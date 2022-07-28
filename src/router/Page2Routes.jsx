import { Page2 } from '../components5/Page2';
import { UrlParameter } from '../components5/UrlParameter';
export const page2Routes = [
  {
    path: '/',
    exact: true,
    childlen: <Page2 />,
  },
  {
    path: '/:id',
    exact: false,
    childlen: <UrlParameter />,
  },
];
