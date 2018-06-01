import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.css';

export default class Button extends  React.Component {
    static propTypes = {
        theme: PropTypes.shape({
            button: PropTypes.string,
            button__content: PropTypes.string,
            button__text: PropTypes.string
        }),
        children: PropTypes.node
    };

    render() {
        const { props } = this;
        const { theme } = props;

        const classes = {
            button: classnames('button', theme.button),
            content: classnames('button__content', theme.button__content),
            text: classnames('button__text', theme.button__text)
        };

        return (
            <div className={classes.button}>
                <div className={classes.content}>
                    <div className={classes.text}>
                        {props.children}
                    </div>
                </div>
            </div>
        );
    }
}