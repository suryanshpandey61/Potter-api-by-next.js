import React, { useState, useEffect } from 'react';
 // Import the Modal component
import axios from 'axios';
import modal from './modal';
import '../../src/app/globals.css';
import Link from 'next/link';



// Define TypeScript interface for book details
interface Book {
  title: string;
  release_date: string;
  summary: string;
  pages: number
  image:any;
}

const ParentComponent: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [post, setPost] = useState<Book[]>([]);
  const [showModal, setShowModal] = useState<Book | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);

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

  const handleModal = (book: Book) => {
    setShowModal(book);
    setOpenModal(true);
  };

  const closeModal = () => {
    setShowModal(null);
    setOpenModal(false);
  };

  return (
    <div>
      <Link href='/'>Go to Home</Link>
      <p className="text-3xl text-center font-bold pt-5 text-black">Books In Harry Potter Series</p>
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
              <button onClick={() => handleModal(item)}>Show More...</button>
            </div>
          ))
        )}
      </div>

      {/* Conditionally render Modal component */}
      {openModal && showModal && (<></>
        // <Modal closeModal={closeModal} book={showModal} />
      )}
    </div>
  );
};

export default ParentComponent;
