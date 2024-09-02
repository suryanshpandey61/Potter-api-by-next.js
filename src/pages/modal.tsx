import React, { useEffect } from 'react';

// Define TypeScript interface for book details
interface Book {
  title: string;
  release_date: string;
  summary: string;
  pages: number;
}

// Define TypeScript interface for component props
interface ModalProps {
  book: Book;
  closeModal: () => void;
}

const modal: React.FC<ModalProps> = (props) => {
  // Apply styles to prevent scrolling when the modal is open
  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    document.body.style.overflowX = 'hidden';

    return () => {
      document.body.style.overflowY = 'scroll';
      document.body.style.overflowX = 'scroll';
    };
  }, []);

  return (
    <>
      {/* Top level div for the modal background */}
      <div
        className="fixed top-0 left-0 right-0 bottom-0 modal-bg opacity-25"
        onClick={props.closeModal}
      >
        <div className='fixed h-auto border rounded-lg w-[500px] bg-white left-[400px] top-[100px] p-3'>
          <div className='mb-2'>
            <h1 className='text-xl underline font-bold'>{props.book.title}</h1>
            <p className='text-md font-semibold'>Release Date: {props.book.release_date}</p>
            <p className='text-blue-800'>Summary: {props.book.summary}</p>
            <p className='text-md font-bold'>Total Pages: {props.book.pages}</p>
            <button
              onClick={props.closeModal}
              className='font-bold text-xl text-red-600 border-dashed border border-black px-4 py-1 mt-2'
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default modal;
