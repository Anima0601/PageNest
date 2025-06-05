import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import { Link } from 'react-router-dom';


function CourseSegment() {
 const [books,setBooks]=useState([]);
  useEffect(()=>{
    const getBook = async()=>{
        try{
          const res = await axios.get("http://localhost:4001/book");
          console.log(res.data);
          setBooks(res.data);
        }
        catch(error){
          console.log(error);
        }
    };
    getBook();
  },[])
  
  console.log(books);

  return (
    <div className="min-h-screen max-w-screen-2xl container mx-auto mt-4 md:px-20 px-4 flex flex-col md:flex-row">
      <div className="my-4 w-full">
        <h1 className="text-4xl font-bold font-sans text-center text-pink-500">
          Exclusive Books Collection
        </h1>
        <p className='font-semibold my-4 text-center '>
          Welcome back! We're excited to offer you exclusive access to our premium paid books collection. <br />
          Dive into expertly curated titles across various genres, designed to enrich your knowledge and inspire your passion.<br />
          Enjoy seamless access to these premium resources and happy reading!
        </p>

        <div className="flex justify-center">
          <Link to='/'>
            <button className="btn btn-secondary px-6">Back</button>
          </Link>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3'>
          {books.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CourseSegment
