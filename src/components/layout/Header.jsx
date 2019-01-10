import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends PureComponent {
    render() {
        const { isDarkSet } = this.props;
        const darkClass = isDarkSet ? 'dark-font' : 'light';
        return (
            <div className="header">
                <Link to="/">
                    <div className={`${darkClass}`}>I am in the header</div>
                </Link>
            </div>
        );
    }
}

Header.propTypes = {
    isDarkSet: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
    return {
        isDarkSet: state.darkTheme.isDarkSet,
    };
}

export default connect(mapStateToProps, null)(Header);

