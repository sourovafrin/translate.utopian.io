import Wrapper from '../client/Wrapper';

import Drafts from '../client/post/Write/Drafts';
import Editor from '../client/post/Write/Write';
import Post from '../client/post/Post';
import Error404 from '../client/statics/Error404';
import ExitPage from '../client/statics/ExitPage';

const routes = [
  {
    component: Wrapper,
    routes: [
      {
        path: '/drafts',
        exact: true,
        component: Drafts,
      },
      {
        path: '/editor',
        component: Editor,
      },
      {
        path: '/exit',
        component: ExitPage,
      },
      {
        path: '/',
        exact: true,
        component: Editor,
      },
      {
        path: '*',
        component: Error404,
      },
    ],
  },
];

export default routes;
