import { useEffect, useState } from "react";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Auth } from 'aws-amplify'

const MyOrders = () => {
  const [ user, setUser] = useState(null)
  useEffect(() => {
    checkUser()
  }, [])

  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser()
    setUser(user)
  }
  // let notice;
  // if(user) {

  //   notice = 'you are logged in'
  // }
  // else {
  //   notice = 'you are not logged in'
  // }
  console.log('user', user);
  if(!user) return null

  return (
    <div className="my-orders pl-20 pt-10">

      <h1 className={"text-sky-400 text-6xl underline pb-3"}>Admin Page</h1>
      {/* <h5 className={"text-gray-400 text-1xl pb-3"}>(only visible If logged in as Admin)</h5>
      <h5 className={"text-red-400 text-1xl pb-3"}>{notice}</h5> */}
      <h1 className={"text-gray-500 font-medium my-2"}>User information: {JSON.stringify(user)}</h1>
      {/* <h1 className={"text-gray-500 font-medium my-2"}>User Name: {user.username}</h1>
      <h1 className={"text-gray-500 font-medium my-2"}>User email: {user.attributes.email}</h1> */}
    </div>
  );
}
 
export default withAuthenticator(MyOrders);