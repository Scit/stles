import React from 'react';
import ThemeContext from 'context/ThemeContext';

export default (Styler) => (...stylerArgs) => {
    const StylarizedComponent = Styler(...stylerArgs);

    return class ContextConsumer extends React.Component {
        render() {
            return (
                <ThemeContext.Consumer>
                    {context => (
                        <StylarizedComponent
                            {...this.props}
                            theme={context}
                        />
                    )}
                </ThemeContext.Consumer>
            );
        }
    }
}