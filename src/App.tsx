import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import PdfViewer from './components/PdfViewer';
import GoogleDocumentViewer from './components/GoogleDocsViewer';

function App() {
  return <GoogleDocumentViewer />
  // return <PdfViewer />;
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
