import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MovieNavLink from './movie-nav-link';

class MovieTabBar extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      activeTab: null,
    };
    this.setActiveTab = this.setActiveTab.bind(this);
  }

  componentDidMount() {
    const {children = []} = this.props;
    const activeTab = this.getChildrenLabels(children)[0];
    this.setActiveTab(activeTab);
  }

  getChildrenLabels(children) {
    return children.map(({props}) => props.label);
  }

  setActiveTab(activeTab, event) {
    if (event) {
      event.preventDefault();
    }
    const {activeTab: currentTab} = this.state;
    if (currentTab !== activeTab) {
      this.setState({
        activeTab,
      });
    }
  }

  renderTabs() {
    const {children = []} = this.props;
    const {activeTab} = this.state;

    return this.getChildrenLabels(children).map((link) => {
      return (
        <MovieNavLink
          key={link}
          link={link}
          className={{active: activeTab === link}}
          onChangeActiveTab={this.setActiveTab}
        />
      );
    });
  }

  render() {
    const {activeTab} = this.state;
    const {children} = this.props;

    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">{this.renderTabs()}</ul>
        </nav>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {activeTab})
        )}
      </div>
    );
  }
}
MovieTabBar.propTypes = {
  children: PropTypes.node,
};
export default MovieTabBar;
