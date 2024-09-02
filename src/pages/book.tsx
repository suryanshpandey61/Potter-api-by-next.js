import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../src/app/globals.css';
import Link from 'next/link';



// yha btate hai ki book me kiss type ka data ayega api ke through
interface Book {
  title: string;
  release_date: string;
  summary: string;
  pages: number
  cover:string
  dedication:string;
}

const book: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [post, setPost] = useState<Book[]>([]);
  

  useEffect(() => {
    const loadBook = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Book[]>('https://potterhead-api.vercel.app/api/books');
        setPost(response.data);
      } catch (err) {
        console.error("Failed to fetch books:", err);
      } finally {
        setLoading(false);
      }
    };

    loadBook();
  }, []);


  return (
    <div className='book-div'>
      <Link href='/' className=' border-black px-3 text-white font-bold ml-8 border-[2px] rounded-md '>Go to Home</Link>
      <p className="text-3xl text-center font-bold pt-5 text-black underline">Books In Harry Potter Series</p>
      <div className='grid grid-cols-2 w-[700px] mx-auto mt-5 gap-7'>
        {loading ? (
          <div className="loader">Loading...</div>
        ) : (
          post.map((item, index) => (

            <div
              key={index}
              className='flex flex-col w-[250px] gap-x-7 cursor-pointer mx-auto rounded-xl p-3 border border-slate-600'
            >
              
              <img src={item.cover} alt={item.title} className='rounded-md' />
              <p className='text-xl font-semibold text-center'>{item.title}</p>
              <p className='text-md text-slate-700 font-semibold text-center'>{item.dedication}</p>

              
            </div>
          ))
        )}
      </div>

      
    </div>
  );
};

export default book;
