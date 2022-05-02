import { useState, useEffect } from 'react';
import BlogList from './components/OrderList'

const Home = () => {
  const [orders, setOrders] = useState([
    { productId: 456, product: 'item1', description: 'description....', price: 199.99, customerId: 1},
    { productId: 567, product: 'item2', description: 'description....', price: 199.99, customerId: 2},
    { productId: 789, product: 'item3', description: 'description....', price: 199.99, customerId: 3}
  ])

  const [product, setProduct] = useState('PS5')

  const handleDelete = (productId) => {
    const newOrders = orders.filter(order => order.productId !== productId );
    setOrders(newOrders)
  }


  useEffect(() => {
    console.log('use effect ran');
    console.log(orders);
  }, [product])

    return (
        <div clasname="home">
          <h1 className="">Home Page </h1>
          <BlogList orders={orders} title="All Orders" handleDelete={handleDelete}/>
          <hr />
          {/* <BlogList orders={orders.filter((order)=> order.customerId == 2)} title="My Orders"/> */}
          <button onClick={() => setProduct('idk')}>change name</button>
          <p>{product}</p>
        </div>   
     );
  }
   
  export default Home;