import React from 'react';
import { useForm } from 'react-hook-form';

function Contactdetail() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = data => {
    console.log('Form Data:', data);
    alert('Message sent!');
    reset();
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-6">
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="bg-base-200 border-base-300 rounded-box border p-6 w-full max-w-md shadow-md"
      >
        <legend className="text-xl font-semibold text-center mb-4">Contact Us</legend>

        <label className="label">Name</label>
        <input
          type="text"
          className={`input input-bordered w-full ${errors.name ? 'border-red-500' : ''}`}
          placeholder="Your Name"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}

        <label className="label mt-4">Email</label>
        <input
          type="email"
          className={`input input-bordered w-full ${errors.email ? 'border-red-500' : ''}`}
          placeholder="you@example.com"
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email address'
            }
          })}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}

        <label className="label mt-4">Message</label>
        <textarea
          className={`textarea textarea-bordered w-full h-32 ${errors.message ? 'border-red-500' : ''}`}
          placeholder="Your message here..."
          {...register('message', { required: 'Message is required' })}
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}

        <button type="submit" className="btn btn-primary w-full mt-6">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contactdetail;
