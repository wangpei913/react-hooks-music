import React, { lazy } from 'react';

const LayoutIndex = lazy(() => import('./layout'));
const HeaderContainer = lazy(() => import('./layout/header'));
const Loading = () => <div>loading....</div>

class App extends React.PureComponent {
  render () {
    return (
      <React.Suspense fallback={<Loading />}>
        <LayoutIndex>
          <HeaderContainer />
          11111111111111111111111111111
        </LayoutIndex>
      </React.Suspense>
    )
  }
}

export default App;
