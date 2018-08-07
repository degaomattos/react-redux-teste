import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';
import Logo from './components/Logo';
import Header from './components/Header/Header';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CardPeople from './components/CardPeople/CardPeople';

class App extends Component {
  state = {
    inputValue: ''
  }

  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    const {
      clickButton,
      newValue
    } = this.props;

    const { inputValue } = this.state;

    return (
      <div className="App" style={{ paddingTop: '10px' }}>
        <Grid 
          container 
          spacing={24} 
          direction="row"
          justify="center"
          alignItems="center" 
        >
          <Grid item xs={12}>
            <Header logo="Solera" />
          </Grid >
          <Grid item xs={4}>
            <CardPeople />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Nome do Usuário:"
              onChange={this.inputChange}
              value={inputValue}
            />
            <Button
              onClick={() => clickButton(inputValue)}
              color="primary"
            >
              Cadastrar Usuário
          </Button>
          </Grid>
        </Grid >
      </div>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
