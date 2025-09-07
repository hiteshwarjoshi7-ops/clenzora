import React from 'react';
import ReactDOM from 'react-dom/client';

function AdminApp() {
  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
      <div className='bg-white p-8 rounded-xl shadow-lg w-96'>
        <h1 className='text-2xl font-bold mb-4'>Clenzora Admin Login</h1>
        <form className='space-y-4'>
          <input type='text' placeholder='Email' className='w-full border p-2 rounded-lg'/>
          <input type='password' placeholder='Password' className='w-full border p-2 rounded-lg'/>
          <button type='submit' className='w-full bg-indigo-600 text-white py-2 rounded-lg'>Login</button>
        </form>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AdminApp />);
