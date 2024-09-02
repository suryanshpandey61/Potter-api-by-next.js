import Link from 'next/link';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className=''>
      <h1 className="text-black text-3xl font-bold">Welcome to the Harry Potter Fan Page</h1>
      <nav>
        <ul>
          <li>
            <Link href="/book">
              Book
            </Link>
          </li>
          <li>
            <Link href="/character">
              Character
            </Link>
          </li>
          <li>
            <Link href="/spell">
              Spell
            </Link>
          </li>
          <li>
            <Link href="/movies">
              Movies
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
