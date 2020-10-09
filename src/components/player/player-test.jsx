import React, {PureComponent} from 'react';
const srcVideo = `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`;

class PlayerMyTest extends PureComponent {
  constructor(props) {
    super();
    this.videoCur = React.createRef();
    this.state = {
      duration: 0,
      current: 0,
      isPlaying: false,
    };
    this.hanlerChangePlaing = this.hanlerChangePlaing.bind(this);
  }

  componentDidMount() {
    const video = this.videoCur.current;
    video.src = srcVideo;
    video.onloadedmetadata = () => {
      this.setState({
        duration: video.duration,
      });
    };
    video.ontimeupdate = () => {
      this.setState({
        current: Math.trunc(video.currentTime),
      });
    };
  }
  componentDidUpdate() {
    const video = this.videoCur.current;
    if (document.fullscreenElement) {
      video.controls = false;
    }
    if (this.state.isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }

  componentWillUnmount() {
    const video = this.videoCur.current;
    video.src = null;
    video.onplay = null;
    video.controls = null;
    video.ontimeupdate = null;
    video.onloadedmetadata = null;
  }
  hanlerChangePlaing() {
    this.setState((state) => {
      return {
        isPlaying: !state.isPlaying,
      };
    });
  }
  leftTime() {
    const {duration, current} = this.state;
    const timeDiff = duration - current;
    const second = Math.trunc(timeDiff % 60);
    const minuts = Math.trunc(timeDiff / 60);
    const hours = Math.trunc(timeDiff / 60);
    return `${hours.toString().padStart(2, `0`)}:${minuts
      .toString()
      .padStart(2, `0`)}:${second.toString().padStart(2, `0`)}`;
  }
  render() {
    const {isPlaying, duration, current} = this.state;
    return (
      <div className="test">
        <button onClick={this.hanlerChangePlaing}>
          {isPlaying ? `Stop` : `Play`}
        </button>
        <progress value={`${current / duration * 100}`} max="100"></progress>
        <span>{this.leftTime()}</span> 
        <video ref={this.videoCur}></video>
      </div>
    );
  }
}

export default PlayerMyTest;
