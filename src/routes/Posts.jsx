import PostList from "../components/PostList";
import { Outlet } from "react-router-dom";

function Posts() {  
  return (
    <>
      <Outlet/>
      <main>
        <PostList/>
      </main>
    </>    
  );
}

export default Posts;

export async function loader() {
  const response = await fetch('http://localhost:8080/posts');
  const resData = await response.json();
  if (!response.ok) {
    console.log('API Fetch failed');
  }
  return resData.posts;//using loader, the router will return the data to the component
};