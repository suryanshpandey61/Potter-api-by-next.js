import Link from 'next/link';
import React from 'react'; 
import '../../src/app/globals.css';

const Home: React.FC = () => {
  return (
    <div className='flex flex-col h-screen justify-center index-div items-center bg-gray-100'>
      <h1 className="text-black text-4xl font-bold mb-8">
        Welcome to the Harry Potter Fan Page
      </h1>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/book" className="text-blue-500 text-2xl hover:underline">
              Book
            </Link>
          </li>
          <li>
            <Link href="/character" className="text-blue-500 text-2xl hover:underline">
              Character
            </Link>
          </li>
          <li>
            <Link href="/spell" className="text-blue-500 text-2xl hover:underline">
              Spell
            </Link>
          </li>
          <li>
            <Link href="/movies" className="text-blue-500 text-2xl hover:underline">
              Movies
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
