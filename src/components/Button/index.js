import Button from './Button';
import Styler from 'hocs/Styler';
import WidgetStoreConnector from 'hocs/WidgetStoreConnector';
import theme from './theme';

const styleConfig ={
    classList: [
        'button',
        'button__content',
        'button__text'
    ],
    theme
};

export default WidgetStoreConnector(Styler(Button, styleConfig));