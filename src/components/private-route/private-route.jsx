import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {AuthorizationStatus} from '../../store/user/user-reducer';
import {getAuthStatus} from '../../store/user/user-selector';
import Loading from '../loading/loading';

const PrivateRouter = (props) => {
  const {auth, render} = props;

  const isAuth = auth.status === AuthorizationStatus.AUTH;
  const isProgress = auth.isProgress;

  return (
    <Route
      {...props}
      render={(routerProps) => {
        if (isAuth && !isProgress) {
          return render(routerProps);
        }
        if (isProgress) {
          return <Loading />;
        }

        return <Redirect to="/singin" />;
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  auth: getAuthStatus(state),
});

PrivateRouter.propTypes = {
  auth: PropTypes.shape({
    status: PropTypes.string,
    error: PropTypes.bool,
    isProgress: PropTypes.bool,
  }),
  render: PropTypes.func,
};

export {PrivateRouter};
export default connect(mapStateToProps)(PrivateRouter);
