import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './LeftMenu.css';

class LeftMenu extends Component {
  render() {
    return (
        <Fragment>
            <div className="side-menu-link" onClick={ ()=> this.props.history.push('/buttons') }>Buttons</div>
            <div className="side-menu-link" onClick={ ()=> this.props.history.push('/layouts') }>Layout</div>
        </Fragment>
    );
  }
}

export default LeftMenu;
