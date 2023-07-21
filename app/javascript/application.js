// Entry point for the build script in your package.json
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <h1 className="bg-slate-800 text-white">Hello World!</h1>;
}

ReactDOM.render(<App />, document.getElementById('root'));
