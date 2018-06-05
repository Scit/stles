import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    const { widgets = {} } = state;
    const properties = {
        'stylesheets': [],
        'cssStyle': {},
        'classes': [],
        ...widgets[ownProps.id]
    };

    return {
        properties
    }
};

export default function(Component) {
    return connect(
        mapStateToProps,
    )(Component);
}
