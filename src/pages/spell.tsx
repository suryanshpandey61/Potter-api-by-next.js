import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import '../../src/app/globals.css';

// Define TypeScript interface for spell data
interface Spell {
  name: string;
  description: string;
}

const Spell: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [post, setPost] = useState<Spell[]>([]);

  useEffect(() => {
    const loadSpell = async () => {
      try {
        setLoading(true);

        const response = await axios.get<Spell[]>('https://potterhead-api.vercel.app/api/spells');

        setPost(response.data);

        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    loadSpell();
  }, []);

  return (
    <div className='spell-div w-[100vw]  mb-[-20px] h-auto'>
      <Link href="/">Go to home</Link>
      <Link href="/character">
        <p className="text-3xl font-bold pt-5 text-center">Powers Of All Characters</p>
      </Link>
      <div className='grid grid-cols-3 w-[900px] mx-auto mt-5 gap-7'>
        {loading ? (
          <div className="loader"></div>
        ) : (
          post.map((item, index) => (
            <div
              key={index}
              className='flex flex-col w-[250px] shadow-md shadow-black hover:shadow-white mx-auto cursor-pointer rounded-xl p-3 hover:scale-[1.07] transition-all duration-500 border border-black'
            >
              <p className='text-xl font-semibold text-blue-600'>{item.name}</p>
              <p className='text-black'>Spell - {item.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Spell;
