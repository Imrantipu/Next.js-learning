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