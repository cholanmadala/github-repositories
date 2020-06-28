import React, {Component} from 'react';
import ListItem from '../ListItem/ListItem';
import './List.css';

const api = 'https://api.github.com/users/supreetsingh247/repos';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      error: null
    }
  }
  componentDidMount() {
    fetch(api)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            items: result
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }

  getListContent = () => {
    const data = this.state.items || {};
    if (!data.length) {
      return <h3> Sorry!!! We are unable to fetch the data right now!!! Reload to fetch data again</h3>
    }
    const dataList = data.map ((item) => {
      console.log(item);
      const {id, name} = item;
      return <ListItem 
        key={id}
        name={name}
      />
    })

    return dataList;
  }

  render () {
    return (
      <div className="list-container">
        <h2>Repositories</h2>
        {this.getListContent()}
      </div>
    )
  }
}

export default List;