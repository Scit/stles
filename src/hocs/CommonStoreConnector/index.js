import * as actions from 'actions';
import { connect } from 'react-redux';

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

export default function(Component) {
    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(Component);
}
