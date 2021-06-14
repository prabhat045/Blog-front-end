import React, { Component } from "react";

class Write extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      body: "",
    };
  }
  ontitleChange = (event) => {
    this.setState({ title: event.target.value });
  };
  ondescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  };
  onbodyChange = (event) => {
    this.setState({ body: event.target.value });
  };

  onSubmitsave = () => {
    fetch("http://localhost:3000/write", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        title: this.state.title,
        description: this.state.description,
        body: this.state.body,
      }),
    }).then((response) => response.json());
  };

  onsubmitCancel = () => {
    this.setState({
      title: "",
      description: "",
      body: "",
    });
  };

  render() {
    return (
      <div>
        <article className='br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-4 center'>
          <form className='pa4 black-80'>
            <div className='measure'>
              <label htmlFor='Title' className='f6 b db mb2'>
                Title
              </label>
              <input
                id='title'
                className='input-reset ba b--black-20 pa2 mb2 db w-100'
                type='text'
                aria-describedby='title-desc'
                onChange={this.ontitleChange}
                value={this.state.title}
              />
              <label htmlFor='description' className='f6 b db mb2'>
                Description
              </label>
              <input
                id='description'
                className='input-reset ba b--black-20 pa2 mb2 db w-100'
                type='text'
                aria-describedby='description-desc'
                onChange={this.ondescriptionChange}
                value={this.state.description}
              />
              <label htmlFor='body' className='f6 b db mb2'>
                Body
              </label>
              <textarea
                id='body'
                className='input-reset ba b--black-20 pa2 mb2 db w-100'
                type='text'
                aria-describedby='body desc'
                onChange={this.onbodyChange}
                value={this.state.body}
              />
              <div className=''>
                <input
                  className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
                  type='button'
                  value='Save'
                  onClick={this.onSubmitsave}
                />
                &nbsp; &nbsp;
                <input
                  className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
                  type='button'
                  value='Cancel'
                  onClick={this.onsubmitCancel}
                />
              </div>
            </div>
          </form>
        </article>
      </div>
    );
  }
}

export default Write;
