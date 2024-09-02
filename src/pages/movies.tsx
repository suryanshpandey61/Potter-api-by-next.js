import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import '../../src/app/globals.css';


 // typescript movie component me kiss trh ka data store hota
interface Movie {
  poster: string;
  release_date: string;
  directors: string;
}

function Movie() {
  // loading true hogi y false isliye boolean
  const [loading, setLoading] = useState<boolean>(false);

  // yha pr movie store hogi isliye array
  const [post, setPost] = useState<Movie[]>([]);

  // Fetching data with useEffect
  useEffect(() => {
    
    const loadMovie = async () => {
      try {
        setLoading(true);

        // API request
        const response = await axios.get<Movie[]>('https://potterhead-api.vercel.app/api/movies');

        // Set state with fetched data
        setPost(response.data);

        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    // Call the async function
    loadMovie();
  }, []);

  return (
    <div className=' w-[100vw]  mb-[-20px] '>
        <Link href="/">
          Go to Home
        </Link>
      <Link href="/movies">
        <p className="text-4xl text-center underline">Movies & Directors of Harry Potter Series</p>
      </Link>

      <div className='grid grid-cols-3 cursor-pointer w-[900px] mx-auto mt-7 gap-7'>
        {loading ? (
          <div className="loader"></div>
        ) : (
          post.map((item, index) => (
            <div key={index} className='flex flex-col w-[250px] hover:shadow-md hover:shadow-black hover:border-none mx-auto rounded-xl p-3 hover:scale-[1.07] transition-all duration-500 border border-black'>
              <img src={item.poster} alt="Harry Potter Images" className='rounded-md' />
              <p className='text-xl font-semibold text-center'>{item.release_date}</p>
              <p className=' text-black text-center'>Director- {item.directors}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Movie;
