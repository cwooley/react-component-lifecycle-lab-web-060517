import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  componentWillMount(){
    this.setState({
      tweets: this.props.newTweets
    }, () => console.log("tweets", this.state.tweets))
  }
  
  shouldComponentUpdate(nextProps){
    if (nextProps.newTweets.length > 0){
      return true
    } else {
      return false
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      tweets: nextProps.newTweets.concat(this.state.tweets)
    }, () => console.log("NewTweets", this.state.tweets))
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
