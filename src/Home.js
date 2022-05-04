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
      <h2>All Orders</h2>
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
      <>
        {
          orders.map((order, index) => (
            <div key={index} style={styles.order}>
              <p style={styles.orderProduct}>Product Name: {order.product}</p>
              <p style={styles.orderProduct}>Description: {order.description}</p>
              <p style={styles.orderProduct}>Price: {order.price}</p>
              {/* <img src={order.coverImage} alt="" height="100" width="100" /> */}
            </div>
          ))
        }
      </>
    </div>
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  order: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default App