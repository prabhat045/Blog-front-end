import React from "react";
import "./article.css";

class Articles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      body: "",
      data: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/article", {
      method: "get",
      headers: { "Content-type": "application/json" },
    }).then((response) =>
      response.json().then((data) => {
        this.setState({
          data: data,
        });
      })
    );
  }

  render() {
    return (
      <div className='row'>
        {this.state.data.map((data) => {
          return (
            <div className='column' key={data.id}>
              <div className='card'>
                <h3 className='title'>{data.title} </h3>
                <p className='description'>{data.description}</p>
                <p className='body'>{data.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Articles;
