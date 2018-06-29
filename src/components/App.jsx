import React from 'react';
import Error404 from './Error404';
import Header from './Header';
import Content from './Content';
import { Switch, Route } from 'react-router-dom';

function App(){

  const main = {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr 1fr',
    gridGap: '10px',
    padding: '10px',
  };
  const BACKGROUND = {
      backgroundImage: 'url(https://tpc.googlesyndication.com/pagead/imgad?id=CICAgKCb1PHAYBABGAEyCCKl03Vg27vT&quot;)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
  }

  return (
    <div style={BACKGROUND}>
      <Header/>
      <div style={main}>
        <div>
        </div>
        <Switch>
          <Route exact path='/' component={Content}/>
          <Route component={Error404} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
