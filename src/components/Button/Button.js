import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.css';

export default class Button extends  React.Component {
    static propTypes = {
        cssClasses: PropTypes.shape({
            container: PropTypes.string,
            content: PropTypes.string,
            text: PropTypes.string
        }),
        children: PropTypes.node
    };

    render() {
        const { props } = this;
        const { cssClasses } = props;

        const classes = {
            button: classnames('button', cssClasses.container),
            content: classnames('button__content', cssClasses.content),
            text: classnames('button__text', cssClasses.text)
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