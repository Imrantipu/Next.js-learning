import Post from "Components/Post/Post";
const Posts = ({posts}) => {
    return (
        <div>
            <h1>The number of posts {posts.length}</h1>
            {
                posts.map(post =><Post post ={post}></Post>)
            }
        </div>
    );
};
export default Posts;
// data fetching
export const getStaticProps = async() =>{
     const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
     const data = await res.json();
     return {
        props: {
            posts: data
        }
     }
}