import PostsList from "../components/PostsList.jsx";
import {Outlet} from "react-router-dom";

function Posts() {
  return (
          <>
              <Outlet/>
              <main>
                  <PostsList/>
              </main>
          </>
      )
}

export default Posts;

export async function loader() {
    const response = await fetch("http://localhost:8085/posts");
    const responseData = await response.json();
    return responseData.posts;
}
