import React from "react";

const Myarticles = () => {
  return (
    <div>
      <article className='bg-white center mw5 ba b--black-10 shadow-4 mv4'>
        <div className='pv2 ph3'>
          <h1 className='f6 ttu tracked'>Title</h1>
        </div>
        <p>Body</p>
        <div className='pa3'>
          <a href='google.com' className='link dim lh-title'>
            Description
          </a>
          <small className='gray db pv2'>
            <time>Time</time>
          </small>
        </div>
      </article>
    </div>
  );
};

export default Myarticles;
