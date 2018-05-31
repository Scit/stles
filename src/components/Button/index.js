import Button from './Button';
import Styler from 'hocs/Styler';
import theme from './theme';

const styleConfig ={
    classList: [
        'button',
        'button__content',
        'button__text'
    ],
    selfTheme: theme,
    widget: true // tells to use stylesheets and cssStyle styles
};

export default Styler(Button, styleConfig); // TODO: add own styles: from props and static css + variables