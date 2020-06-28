import React, {Component} from 'react';
import './Profile.css';

const api = 'https://api.github.com/users/supreetsingh247';

class Profile extends Component {
  constructor (props) {
    super(props);
    this.state = {
      profileData: {}
    }
  }
  componentDidMount() {
    fetch(api)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          profileData: result
        });
      },
      (error) => {
        this.setState({
          error
        });
      }
    )
  }

  render() {
    console.log(this.state.profileData);
    const {name = "test_user", avatar_url="test_url", bio="test bio", login="test login"} = this.state.profileData || {};
    if (!name) {
        return  (
          <div className="profile-container">
            <h3> Sorry!!! We are unable to fetch the data right now!!! Reload to fetch data again</h3>
        </div>
      );
    }
    return (
      <div className="profile-container">
        <img src={avatar_url}  className="avatar" alt="avatar"/>
        <div className="details-container">
        <h1 className="full-name">
          <div>{name}</div>
          <div className="login">{login}</div>
        </h1>
        <h4>{bio}</h4>
        </div>
        
      </div>
    );
  };
}



export default Profile;