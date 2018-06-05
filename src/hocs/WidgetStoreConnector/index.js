import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    const { widgets = {} } = state;
    return {
        properties: widgets[ownProps.id] || {
            'stylesheets': [],
            'cssStyle': {}
        }
    }
};

export default function(Component) {
    return connect(
        mapStateToProps,
    )(Component);
}
