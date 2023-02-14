import { useRouter } from "next/router";

const PostDetails = ({post}) => {
    const router = useRouter();
    const handleBack = () =>{
        router.push("/posts")
    }
    return (
        <div>
            <div className="card mx-10 my-10 bg-base-100 shadow-xl">
  <div className="card-body">
  <p>PostId:{post?.id}</p>
    <h2 className="card-title">{post?.title}</h2>
    <p>{post?.body}</p>
  </div>
</div>
        </div>
    );
};
export default PostDetails;
// getting dynamic id 
export const getStaticPaths =  async() =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
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
// fetching dynamic data by id
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