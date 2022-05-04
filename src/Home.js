/* src/App.js */
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createOrder } from './graphql/mutations'
import { listOrders } from './graphql/queries'

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const initialState = { name: '', description: '' }

const App = () => {
  const [formState, setFormState] = useState(initialState)
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetchOrders()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchOrders() {
    try {
      const orderData = await API.graphql(graphqlOperation(listOrders))
      console.log('orderData: ', orderData);
      const orders = orderData.data.listOrders.items
      setOrders(orders)
    }
    catch (err) {
      console.log('error fetching orders: ', err.errors)
        console.log('error fetching orders: ', err.errors[0].message)
    }
  }

  async function addOrder() {
    try {
      if (!formState.name || !formState.description) return
      const order = { ...formState }
      setOrders([...orders, order])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createOrder, {input: order}))
    } catch (err) {
      console.log('error creating order:', err)
    }
  }

  return (
    <div style={styles.container}>
      
      <h1 className={"text-sky-400 text-6xl pb-3  underline pb-3"}>All  Orders</h1>
      <h5 className={"text-gray-400 text-1xl"}>(only visible to me)</h5>
      {/* <input
        onChange={event => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder="Name"
      />
      <input
        onChange={event => setInput('description', event.target.value)}
        style={styles.input}
        value={formState.description}
        placeholder="Description"
      />
      <button style={styles.button} onClick={addOrder}>Create Order</button> */}
      
      <thead>
        <tr>
          <th className="px-4 py-2">Product</th>
          <th className="px-4 py-2">Description</th>
          <th className="px-4 py-2">Price</th>
        </tr>
      </thead>
      <tbody>
        {
          orders.map((order, index) => (
            <>
              <tr key={index} style={styles.order}>
                <td className="border px-4 py-2">{order.product}</td>
                <td className="border px-4 py-2">{order.description}</td>
                <td className="border px-4 py-2">{order.price}</td>
              </tr>
            {/* <tr className="bg-gray-100">
                <td className="border px-4 py-2">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
                <td className="border px-4 py-2">Adam</td>
                <td className="border px-4 py-2">112</td>
              </tr> */}
            </>
          ))
        }
      </tbody>                
    </div>
  )
}

  const styles = {
    container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
    order: {  marginBottom: 15 },
    input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
    orderName: { fontSize: 20, fontWeight: 'bold' },
    orderDescription: { marginBottom: 0 },
    button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
  }

export default App  
