import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../Context/UserContext";
import { useHistory } from "react-router-dom";
const Write = () => {
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mainbody, setmainBody] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    setId(user.id);
  }, [user.id]);
  console.log(user);

  const ontitleChange = (event) => {
    setTitle(event.target.value);
  };
  const ondescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const onmainbodyChange = (event) => {
    setmainBody(event.target.value);
  };
  let history = useHistory();
  const onSubmitsave = () => {
    fetch("http://localhost:5001/articles/write", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        mainbody,
        userId: id,
      }),
    })
      .then((response) => response.json())
      .then(history.push("/"));
  };

  const onsubmitCancel = () => {
    setTitle("");
    setDescription("");
    setmainBody("");
  };

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
              onChange={ontitleChange}
              value={title}
            />
            <label htmlFor='description' className='f6 b db mb2'>
              Description
            </label>
            <input
              id='description'
              className='input-reset ba b--black-20 pa2 mb2 db w-100'
              type='text'
              aria-describedby='description-desc'
              onChange={ondescriptionChange}
              value={description}
            />
            <label htmlFor='body' className='f6 b db mb2'>
              Body
            </label>
            <textarea
              id='body'
              className='input-reset ba b--black-20 pa2 mb2 db w-100'
              type='text'
              aria-describedby='body desc'
              onChange={onmainbodyChange}
              value={mainbody}
            />
            <div className=''>
              <input
                className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
                type='button'
                value='Save'
                onClick={onSubmitsave}
              />
              &nbsp; &nbsp;
              <input
                className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
                type='button'
                value='Cancel'
                onClick={onsubmitCancel}
              />
            </div>
          </div>
        </form>
      </article>
    </div>
  );
};

export default Write;
