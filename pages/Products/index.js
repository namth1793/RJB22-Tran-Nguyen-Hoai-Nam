import Link from 'next/link';

export const getServerSideProps = async()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();
  return {
    props: { products: data }
  };
}

function Products({products}) {
    return (
        <div className='block2'>
            <div className='nav_bar'>
      <div className='nav_bar_left'>
        <ul>
            <li id='hov'><Link href="/">
              <a>Home</a>
          </Link></li>
          <li id='hov'>
            <Link href='/Customers'>
            <a>Customers</a>
            </Link>
          </li>
          <li id='hov'>
            <Link href='/Products'>
            <a>Products</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className='nav_bar_right'>
          <button id='signin'>
            <Link href="/SignUp">
              <a>Sign Up</a>
            </Link>
        </button>
      </div>
      </div>
        <h1 style={{ textAlign: "center", color: "grey" }}>Products List</h1>
        <table border={1} id="list">
          <thead>
            <th>Item ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </thead>
          <tbody>
            {products.map((product) =>
              <tr key={product.itemId}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.email}</td>
                <td>{product.body}</td>
              </tr>
            )}
          </tbody>
        </table>
        </div>
    )
}
export default Products;