import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  const NAVBAR = {
    backgroundColor: '#DC191B',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    fontFamily: 'sans-serif',
    padding: '0',
    height: '20px',
    minWidth: '625px',
    color: 'white'
  };
  const HEADER = {
    height: '40px',
    fontFamily: 'sans-serif',
    color: 'white',
    backgroundColor: 'black',
    padding: '2%',
    display: 'flex',
    justifyContent: 'space-between'
  };
  const TITLE = {
    display: 'flex',
    alignItems: 'baseline'
  }
  const RED = {
    backgroundColor: '#DC191B'
  }


  return (
    <div>
      <div style={HEADER}>
        <div style={TITLE}>
          <h1>
            <span style={RED}>PC</span>GAMER
            </h1>
            <h5>THE GLOBAL AUTHORITY ON PC GAMES</h5>
        </div>
        <p>SOCIAL MEDIA ICONS</p>
      </div>
      <div style={NAVBAR}>
        <Link to='/nowhere'>
          <h6>News</h6>
        </Link>
        <Link to='/nowhere'>
          <h6>Hardware</h6>
        </Link>
        <Link to='/nowhere'>
          <h6>Indie</h6>
        </Link>
        <Link to='/nowhere'>
          <h6>Pro</h6>
        </Link>
        <Link to='/nowhere'>
          <h6>Best Of</h6>
        </Link>
        <Link to='/nowhere'>
          <h6>Magazine</h6>
        </Link>
        <Link to='/nowhere'>
          <h6>Board Games</h6>
        </Link>
        <h6><label>More<select>
          <option value=""></option>
          <option value="">Podcasts</option>
          <option value="">Meet the team</option>
          <option value="">Newsletter Signup</option>
          <option value="">Community Guidelines</option>
          <option value="">Affiliate Links</option>
          <option value="">About PC Gamer</option>
        </select></label></h6>
      </div>
    </div>
  );
}

export default Header;
