import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import history from '../../utils/history';

import Header from './Header';
import DarkToggle from '../DarkToggle';

class Layout extends PureComponent {
    render() {
        const {
            children,
            isDarkSet,
        } = this.props;
        return (
            <div className={`all ${isDarkSet ? 'body-dark' : ''}`}>
                <Header />
                <div className="body">
                    <DarkToggle />
                    {children}
                </div>
            </div>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.element.isRequired,
    isDarkSet: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
    return {
        isDarkSet: state.darkTheme.isDarkSet,
    };
}

export default withRouter(connect(mapStateToProps, null)(Layout));
