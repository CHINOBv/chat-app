import React from 'react';
import Routes from './components/Routes.jsx'
import Session from './components/Session.jsx';

function App({ refetch, session }) {
  return (
    <Routes refetch={refetch} session={session}/>
  );
}

const RootSession = Session(App);

export { RootSession }
