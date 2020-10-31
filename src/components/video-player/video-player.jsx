import React, {PureComponent} from 'react';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super();

    this.videoRef = React.createRef();
  }
  componentDidMount() {
    const {muted,src,isPlaying} = this.props;
    const video = this.videoRef.current;
    video.muted = muted || false;
    if (isPlaying) {
      video.src = src;
      video.play();
    } else {
      video.src = ``;
      // video.pause();
    }
  }

  componentDidUpdate() {
    const video = this.videoRef.current;
    const {src, isPlaying} = this.props;
    video.src = src;


    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }
  componentWillUnmount() {
    const video = this.videoRef.current;

    video.src = ``;

    video.muted = null;
    video.onplay = null;
  }

  render() {
    const {poster} = this.props;
    return (
      <video poster={poster} width="280" height="175" ref={this.videoRef}>
        your browser doesn`t support embedded videos
      </video>
    );
  }
}

export default VideoPlayer;
