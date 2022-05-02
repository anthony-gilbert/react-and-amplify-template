import { useEffect, useState } from "react";
// import BlogList from "./BlogList";
// import useFetch from "./useFetch";

const MyOrders = () => {
//   const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="my-orders">
      <h1 className={"text-sky-400 text-6xl pb-3  underline pb-3"}>My Orders</h1>
      <h5 className={"text-gray-400 text-1xl"}>(only visible to me)</h5>
      <table class="table-auto">
  <thead>
    <tr>
      <th class="px-4 py-2">Title</th>
      <th class="px-4 py-2">Author</th>
      <th class="px-4 py-2">Views</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border px-4 py-2">Intro to CSS</td>
      <td class="border px-4 py-2">Adam</td>
      <td class="border px-4 py-2">858</td>
    </tr>
    <tr class="bg-gray-100">
      <td class="border px-4 py-2">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
      <td class="border px-4 py-2">Adam</td>
      <td class="border px-4 py-2">112</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">Intro to JavaScript</td>
      <td class="border px-4 py-2">Chris</td>
      <td class="border px-4 py-2">1,280</td>
    </tr>
  </tbody>
</table>
    </div>
  );
}
 
export default MyOrders;