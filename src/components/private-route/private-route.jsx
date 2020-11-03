import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {AuthorizationStatus} from '../../store/user/user-reducer';
import {getAuthStatus} from '../../store/user/user-selector';
import Loading from '../loading/loading';

const PrivateRouter = (props) => {
  const {exact, auth, render, path} = props;

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
  auth: getAuthStatus(state)
});

export default connect(mapStateToProps)(PrivateRouter);
