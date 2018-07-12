import React from 'react';
import Error404 from './Error404';
import Header from './Header';
import ContentControl from './ContentControl';
import { Switch, Route } from 'react-router-dom';

function App(){

  const BACKGROUND = {
    backgroundImage: 'url(https://tpc.googlesyndication.com/pagead/imgad?id=CICAgKCb1PHAYBABGAEyCCKl03Vg27vT&quot;)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  };

  return (
    <section style={BACKGROUND}>
      <style jsx>
        {`
          .main {
            display: grid;
            grid-template-columns: 1fr 3fr 1fr;
            grid-gap: 10px;
            padding: 10px;
            color: white;
          }

          `}
      </style>
      <Header/>
      <div className="main">
        <div>
        </div>
        <Switch>
          <Route exact path='/' component={ContentControl}/>
          <Route path='/story' render={(props)=><Article articleList={this.state.ARTICLE_LIST} currentRouterPath={props.location.pathname} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    </section>
  );
}

export default App;
