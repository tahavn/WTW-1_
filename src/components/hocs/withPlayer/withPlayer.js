import React, {PureComponent} from 'react';
import {films} from '../../../../mocks/films';
import {connect} from 'redux';
const withPlayerControl = (Component) => {
  class WithPlayerControl extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
      };

      this.videoRef = React.createRef();

      this._handleIsPlayingChange = this._handleIsPlayingChange.bind(this);
    }

    componentDidMount() {
      const {selectedID} = this.props;
      const video = this.videoRef.current;
      if(selectedID){
        let selectedFilm = films.find((item) => item.id === selectedID);
      }
      if (this.state.isPlaying) {
        video.src = this.props.film.srcMovie;
        video.play();
      } else {
        video.src = ``;
        video.pause();
      }
    
      
    }

    componentDidUpdate() {
      const video = this.videoRef.current;
      if (document.fullscreenElement === null) {
        video.controls = false;
      }
      if (this.state.isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    componentWillUnmount() {
      const video = this.videoRef.current;
      video.src = ``;
      video.onplay = null;
      video.onloadedmetadata = null;
      video.ontimeupdate = null;
      video.controls = null;
    }

    _handleIsPlayingChange() {
      const {isPlaying} = this.state;
      this.setState({
        isPlaying: !isPlaying,
      });
    }
   

    // const playerToggler = (currentTime * 100) / duration + `%`;

    render() {
      return (
        <Component
          {...this.props}
          video={this.videoRef}
          onIsPlayingChange={this._handleIsPlayingChange}
          isPlaying={this.state.isPlaying}
        >
          <video poster={this.props.film.src} className="player__video" ref={this.videoRef}>
            your browser doesn`t support embedded videos
          </video>
        </Component>
      );
    }
  }
  return WithPlayerControl;
};

export default withPlayerControl;
