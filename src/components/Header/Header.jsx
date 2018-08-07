import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Logo from './../Logo';

class Header extends React.Component {
    render() {
        return (
            <div>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            {this.props.logo}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Header;