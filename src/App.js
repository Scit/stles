import React, { Component } from 'react';
import StyleProvider from 'containers/StyleProvider';
import Button from 'components/Button';

class App extends Component {
    render() {
        return (
            <StyleProvider>
                <Button>Hello</Button>
            </StyleProvider>
        );
    }
}

export default App;
