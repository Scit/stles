import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from 'actions';
import StyleProvider from 'containers/StyleProvider';
import Button from 'components/Button';
import './App.css';

class App extends Component {
    static propTypes = {
        resetConfiguration: PropTypes.func,
        loadConfiguration: PropTypes.func,
        store: PropTypes.object
    };

    componentDidMount() {
        this.props.resetConfiguration();
    }

    render() {
        const value = JSON.stringify(this.props.store, null, 2);

        return (
            <div className="pane">
                <div className="pane__left">
                    <StyleProvider>
                        <Button>Hello</Button>
                    </StyleProvider>
                </div>
                <div className="pane__right">
                    <textarea className="pane__textarea" value={value} onChange={() => {}} />
                    <div className="pane__buttonContainer">
                        <button>Reset</button>
                        <button>Apply</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        store: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        resetConfiguration: () => {
            dispatch(actions.resetConfiguration())
        },
        loadConfiguration: (newConfiguration) => {
            dispatch(actions.updateConfiguration(newConfiguration))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
