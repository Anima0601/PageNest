import React from 'react'


function Card({item}) {

  return (
   <div className="card bg-base-100 w-96  shadow-sm my-12">
   <figure className="h-48 overflow-hidden flex justify-center items-center mt-4">
        <img
          src={item.image}
          alt="Card"
          className="h-full w-auto object-contain"
        />
      </figure>
  <div className="card-body">
    <h2 className="card-title">{item.title}</h2>
    <p>{item.name}</p>
    <div className="card-actions justify-end">
      <p className='text-gray-500'>{item.price}</p>
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  )
}

export default Card
