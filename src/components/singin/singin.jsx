import React, {PureComponent} from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';

class Singin extends PureComponent {
  constructor() {
    super();
    this.state = {
      [`user-email`]: ``,
      [`user-password`]: ``,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  handleChange(event) {
    event.preventDefault();
    const {name, value} = event.target;
    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <div className="user-page">
        <Header className={`user-page__head`}/>

        <div className="sign-in user-page__content">
          <form
            onSubmit={this.handleSubmit}
            action="#"
            className="sign-in__form"
          >
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  type="email"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email"
                  onChange={this.handleChange}
                />
                <label
                  className="sign-in__label visually-hidden"
                  htmlFor="user-email"
                >
                  Email address
                </label>
              </div>
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  id="user-password"
                  onChange={this.handleChange}
                />
                <label
                  className="sign-in__label visually-hidden"
                  htmlFor="user-password"
                >
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
        </div>

        <Footer/>
      </div>
    );
  }
}

export default Singin;
