import React from 'react';

const Comments = ({comments}) => {
    return (
        <div>
            {
                comments.map(comment => <h1 key ={comment.id} className="my-10 mx-5 text">{comment.body}</h1>)
            }
        </div>
    );
};

export default Comments;
// Exploring SSR(server side rendering) using get server side props by user request
export const getServerSideProps = async () =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();
  return {
    props: {
        comments: data
    }
  }
}