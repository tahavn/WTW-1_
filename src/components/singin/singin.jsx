import React, {PureComponent} from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import {connect} from 'react-redux';
import {getUser, getAuthStatus} from '../../store/user/user-selector';
import {ActionCreator, Operations} from '../../store/user/user-reducer';

class Singin extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      email: ``,
      password: ``,
    };
    console.log(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.singIn({
      email: this.state.email,
      password: this.state.password,
    });
  }
  handleChange(event) {
    event.preventDefault();
    const {name, value} = event.target;
    this.setState({
      [name]: value,
    });
  }
  render() {
    const {auth} = this.props;
    const isInvalidRequest = auth.error ? (
      <React.Fragment>
        <div className="sign-in__message">
          <p>Please enter a valid email address</p>
        </div>
      </React.Fragment>
    ) : (
      ``
    );

    return (
      <div className="user-page">
        <Header className={`user-page__head`} />

        <div className="sign-in user-page__content">
          {!this.props.user && (
            <form onSubmit={this.handleSubmit} action="#" className="sign-in__form">
              {isInvalidRequest}
              <div className="sign-in__fields">
                <div className="sign-in__field">
                  <input
                    className="sign-in__input"
                    type="email"
                    placeholder="Email address"
                    name="email"
                    id="user-email"
                    onChange={this.handleChange}
                  />
                  <label className="sign-in__label visually-hidden" htmlFor="user-email">
                    Email address
                  </label>
                </div>
                <div className="sign-in__field">
                  <input
                    className="sign-in__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="user-password"
                    onChange={this.handleChange}
                  />
                  <label className="sign-in__label visually-hidden" htmlFor="user-password">
                    Password
                  </label>
                </div>
              </div>
              <div className="sign-in__submit">
                <button className="sign-in__btn" type="submit">
                  Sign in
                </button>
              </div>
            </form>
          )}
        </div>

        <Footer />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  singIn: (user) => {
    dispatch(Operations.login(user));
  },
});
const mapStateToProps = (state) => ({
  user: getUser(state),
  auth: getAuthStatus(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(Singin);
