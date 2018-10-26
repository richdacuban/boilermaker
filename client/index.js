import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
// import Root from './components/root';

//with redux store:
render(
  <Provider store={store}>
    {/* <Root /> // only if we have a root component to load, if not just load a dummy div or something for now: */}
    <div>Hello WORLD!</div>
  </Provider>,
  document.getElementById('app')
);

// without redux store:
// render(<div>Hello WORLD!</div>, document.getElementById('app'));
