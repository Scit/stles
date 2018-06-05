import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CommonStoreConnector from 'hocs/CommonStoreConnector';
import StyleProvider from 'containers/StyleProvider';
import Button from 'components/Button';
import './App.css';

class App extends Component {
    static propTypes = {
        resetConfiguration: PropTypes.func.isRequired,
        loadConfiguration: PropTypes.func.isRequired,
        store: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            value: stringify(props.store),
            store: props.store,
            error: false
        }
    }

    componentDidMount() {
        this.props.resetConfiguration();
    }

    static getDerivedStateFromProps(nextProps, prevStore) {
        let result;
        if (nextProps.store !== prevStore.state) {
            result = {
                value: stringify(nextProps.store),
                state: nextProps.store,
                error: false
            };
        } else {
            result = null;
        }
        return result;
    }

    onTextAreaChanged = (e) => {
        const { value } = e.target;
        const objectValue = parse(value);
        const newState = {
            value: value,
            error: false
        };

        if (objectValue !== undefined) {
            this.props.loadConfiguration(objectValue);
        } else {
            newState.error = true;
        }

        this.setState(newState);

    };

    onResetButtonClick = () => {
        this.props.resetConfiguration();
    };

    renderButtons() {
        const { widgets = {} } = this.props.store;
        return Object.keys(widgets).map(widgetId => {
            return (
                <Button id={widgetId} key={widgetId}>Hello</Button>
            );
        });
    }

    render() {
        const textAreaClassName = classnames('pane__textarea', {
            'pane__textarea--invalid': this.state.error
        });

        return (
            <div className="pane">
                <div className="pane__left">
                    <StyleProvider>
                        {this.renderButtons()}
                    </StyleProvider>
                </div>
                <div className="pane__right">
                    <div className="pane__buttonContainer">
                        <button onClick={this.onResetButtonClick}>Reset</button>
                    </div>
                    <textarea
                        className={textAreaClassName}
                        value={this.state.value}
                        onChange={this.onTextAreaChanged}
                    />
                </div>
            </div>
        );
    }
}

function parse(string) {
    let result;
    try {
        result = JSON.parse(string);
    } catch (e) {
        result = undefined;
    }
    return result;
}

function stringify(object) {
    return JSON.stringify(object, null, 2);
}

export default CommonStoreConnector(App);
