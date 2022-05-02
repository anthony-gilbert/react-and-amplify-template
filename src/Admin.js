import { useEffect, useState } from "react";
// import BlogList from "./BlogList";
// import useFetch from "./useFetch";

const MyOrders = () => {
//   const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="my-orders">
      {/* { error && <div>{ error }</div> }
      
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> } */}
      <h1 className={"text-sky-400 text-6xl underline pb-3"}>Admin Page</h1>
      <h5 className={"text-gray-400 text-1xl pb-3"}>(only visible If logged in as Admin)</h5>
    </div>
  );
}
 
export default MyOrders;