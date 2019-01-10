import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Home extends PureComponent {
    render() {
        const { isDarkSet } = this.props;
        const darkClass = isDarkSet ? 'dark-font' : 'light';
        return (
            <div className={`home ${darkClass}`}>
                Welcome To Electron, React, and Redux!
            </div>
        );
    }
}

Home.propTypes = {
    isDarkSet: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
    return {
        isDarkSet: state.darkTheme.isDarkSet,
    };
}

export default connect(mapStateToProps, null)(Home);
