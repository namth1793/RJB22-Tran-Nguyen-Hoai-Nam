import Link from 'next/link';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return {
        props: { userList: data }
    }
    
}

function Customers({userList}) {
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
        <h1 style={{ textAlign: "center", color: "grey" }}>Customers List</h1>
        <table border="1" id='list'>
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
            </thead>
            <tbody>
                {userList.map((user) => 
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.address.city}</td>
                <td>{user.phone}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
    )
}

export default Customers;