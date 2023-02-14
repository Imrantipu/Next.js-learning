import Link from "next/link";

const Post = ({post}) => {
    return (
        <div>
           <div className="card bg-base-100 shadow-xl mt-10">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <div className="card-actions justify-end">
      <Link href={`/posts/${post?.id}`}>
      <button className="btn btn-primary">See Details</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Post;