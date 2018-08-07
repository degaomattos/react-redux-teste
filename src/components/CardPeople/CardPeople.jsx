import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import CardHeader  from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

class CardPeople extends React.Component { 
    render () {
        const { 
            newValue
        } = this.props;
        return ( 
            <div>
                <Card >
                    <CardHeader 
                        avatar={
                            <Avatar aria-label="Recipe">
                                {newValue.slice(0,1)}
                            </Avatar>
                        }
                        title={newValue}
                        subheader="07/08/2018"
                    />
                        
                    <CardContent> 
                        <Typography>
                            Nome: {newValue}
                        </Typography>
                    </CardContent>
                </Card> 
            </div>
        )
    }
}

const mapStateToProps = store => ({
    newValue: store.clickState.newValue
});
  
export default connect(mapStateToProps)(CardPeople);