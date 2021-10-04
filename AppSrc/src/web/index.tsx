import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.scss';

const App = (): JSX.Element => {
  return (
    <div>
      <h1>Hello.</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));