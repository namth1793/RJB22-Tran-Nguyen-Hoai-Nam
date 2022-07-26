import Link from 'next/link';

export default function Home() {
  return (
    <div className='block'>
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
      <h1 id='heading'>Welcome to my <a id='next' target='_blank' href='https://nextjs.org/'>Next.js</a>  App</h1>
    </div>
  )
}
