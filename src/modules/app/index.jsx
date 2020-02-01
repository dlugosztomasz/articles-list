import React, { Suspense } from 'react';
import { messages } from 'config';
const ArticlesView = React.lazy(() => import('../articles-view'));

const App = () => (
  <>
    <Suspense fallback={
      <div>{messages.LOADING}</div>
    }>
      <ArticlesView />
    </Suspense>
  </>
);

export default App;
