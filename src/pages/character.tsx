import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import '../../src/app/globals.css';

import newImage from '../../src/assests/harry.jpeg'; // Adjust the path as needed

// Define the TypeScript interface for the character data
interface Character {
  name: string;
  image?: string;
}

const Character: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [post, setPost] = useState<Character[]>([]);

  useEffect(() => {
    const loadCharacter = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Character[]>('https://potterhead-api.vercel.app/api/characters');
        setPost(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    loadCharacter();
  }, []);

  return (
    <div className='character-div w-[100vw]  mb-[-20px] h-auto'>
      <Link href='/'   className=' border-black px-3 text-white font-bold ml-8 border-[2px] rounded-md '> Go To Home</Link>
      <Link href="/character">
        
          <p className="text-3xl text-center font-bold pt-5 text-black">Characters In Harry Potter Series</p>
        
      </Link>
      <div className='grid grid-cols-3 w-[900px] mx-auto mt-5 gap-7'>
        {loading ? (
          <div className="loader"></div>
        ) : (
          post.map((item, index) => (
            <div
              key={index}
              className='flex flex-col w-[250px] border-white hover:shadow-lg hover:shadow-rose-400 mx-auto rounded-xl p-3 hover:scale-[1.07] cursor-pointer transition-all duration-500 border'
            >
              <img
                src={item.image || newImage.src}
                alt={item.name}
                className='rounded-md'
                width={250}
                height={250}
              />
              <p className='text-xl font-semibold text-slate-800'>{item.name}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Character;
