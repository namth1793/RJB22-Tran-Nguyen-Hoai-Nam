import React,{ useState, useEffect } from 'react';
import './Session7.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const ERROR_EMAIL = {
  required: "Email address is required",
  pattern:"Please include an '@' in the email address",
}

export default function Session7() {
  const [cities, setCities] = useState([]);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const url = "https://provinces.open-api.vn/api/?depth=3";

  async function fetchData() {
    try {
      let response = await axios(url);
      let temp = await response.data;
      setCities(temp);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  const cityWatch = watch("city");
  const districtWatch = watch("district");

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <form className='block' onSubmit={handleSubmit(onSubmit)}>
      <div className='row-1'>
        <div className='email'>
        <h4>Email</h4>
          <input type="email" placeholder='Email' {...register("email", {
            required: ERROR_EMAIL ?.required,
            pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
          })} />
        </div>
        <div className='password'>
        <h4>Password</h4>
          <input type="password" placeholder='Password' {...register("password", {
          required: true
        })}/>
        </div>
      </div>
      <div className='row-2'>
        <h4>Address</h4>
        <input style={{ width: "96%" }} type="text" placeholder='1234 Main St' {...register("address1", {
          required: true
        })} />
      </div>
      <div className='row-3'>
        <h4>Address 2</h4>
        <input style={{ width: "96%" }} type="text" placeholder='Apartment, studio, or floor' {...register("address2", {
          required: true
        })}/>
      </div>
      <div className='row-4'>
        <div className='city'>
          <h4>City</h4>
          <select defaultValue="" {...register("city", {
            required: true
          })}>
            <option value="">Choose...</option>
            {cities.map((item)=>{
              return <option key={`city-${item?.code}`}>{item?.name}</option>; 
            })}
          </select>
        </div>
          <div className='District'>
          <h4>District</h4>
          <select defaultValue="" {...register("district", {
            required: true
          })}>
            <option value="">Choose...</option>
            {cities.map((item) => {
              return item?.name === cityWatch ? item?.districts.map((district) => {
                return (
                  <option key={`districts-${district?.code}`}>{district?.name}</option>
                );
              }) : null;
            })}
          </select>
        </div>
        <div className='Commune'>
          <h4>Commune</h4>
          <select defaultValue="" {...register("commune", {
            required: true
          })}>
            <option value="">Choose...</option>
            {cities.map((item) => {
              return item?.name === cityWatch ? item?.districts.map((district) => {
                return district?.name === districtWatch ? district?.wards.map((ward) => {
                  return (
                    <option key={`wards-${ward?.code}`}>
                      {ward?.name}
                    </option>
                  );
                })
                  : null;
              })
                : null;
            })}
          </select>
        </div>
      </div>
      <div id='check'><input type="checkbox" style={{width:"initial",height:"initial"}}/> Check me out</div>
      <button type='submit'>Sign in</button>
    </form>
  )
}
