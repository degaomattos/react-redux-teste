import React, { Component } from 'react';
import { connect } from 'react-redux';
import cssLogo from './Logo.module.scss';

class Logo extends Component { 
    render () {
        const { 
            newValue
        } = this.props;
        
        return (
            <div classname={cssLogo}>
                <h1>{newValue}</h1>
            </div>
        )
    }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

export default connect(mapStateToProps)(Logo);