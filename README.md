# Next.js-learning
```bash
# Install Next js
$ npx create-next-app@latest my-app
# Run the app
$ npm run dev
```  
#### File base routing, Nested routing, and Dynamic routing 
```bash
  # File base routing   
  blog.js
  #Nested routing  
  blog/blog.js  
  # Dynamic routing  
  [blogId].js
```  
#### Accessing dynamic route in a folder name 'blog' with dynamic id(in this case 14)  
http://localhost:3000/blog/14
```js
import { useRouter } from 'next/router';
const BlogId = () => {
    const router = useRouter();
    const id = router.query.blogId;
    return (
        <div>
            <h1>This is dynamic page of {id}</h1>
        </div>
    );
};

export default BlogId;
```  
#### Using Link component, Image component , Head component for bettert SEO 
```js
// Use Link to route the page
<Link href="/blog/blog"> Blog </Link>
//Change title of routed page
<Head>
<title> Blog Page</title>
</Head>
// Image component 
<Image src='/nature.jpg' width={500} height={300}></Image>
```  
#### Configure DaisyUi and load data using get static props  
Folder structure : Pages => Posts => index.js(component name Posts) => Post.js => [postId].js (component name PostDetails)
```js
// Data fetching in index.js
export const getStaticProps = async() =>{
     const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
     const data = await res.json();
     return {
        props: {
            posts: data
        }
     }
}
// Data as props accessing in index.js
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
// Showed data in Post.js
<div className="card bg-base-100 shadow-xl mt-10">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <div className="card-actions justify-end">
      <Link href={`/posts/${post?.id}`}>
      <button className="btn btn-primary">See Details</button>
      </Link>
    </div>
  </div>
```     
#### Dynamic parameters and dynamically load data using get static path in route [postId].js
Folder structure : Pages => Posts => index.js(component name Posts) => Post.js => [postId].js (component name PostDetails)
```js
// getting dynamic id [postId].js
export const getStaticPaths =  async() =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = res.json();
    const paths = posts.map(post =>{
        return {
            params : {
                postId : `${post.id}`
            }
        }
    })
    return {
        paths ,
        fallback: false
    }
}
// fetching dynamic data by id [postId].js
export const getStaticProps = async(context) =>{
    const {params} = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`);
    const data = await res.json();
    return {
       props: {
           post: data
       }
    }
}
// route by id from Post.js  
<Link href={`/posts/${post?.id}`}>
<button className="btn btn-primary">See Details</button>
</Link>
// return back to Post.js from [postId].js 
 const router = useRouter();
const handleBack = () =>{
router.push("/posts")
    }
```  
#### Exploring SSR(server side rendering) using get server side props by user request   
```js
export const getServerSideProps = async () =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();
  return {
    props: {
        comments: data
    }
  }
}
```  
