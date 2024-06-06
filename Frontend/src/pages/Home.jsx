import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';
import icon from '../assets/icon.png'
import './stylesheets/home.css'

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='home'>
      <div className="title-bar flex items-center">
        <img src={icon} alt=''/>
        <h1>Book Store</h1>
      </div>
      <div className='home-content'>
        <div>
          <h1 className='text-3xl my-8 underline decoration-double '>Books List</h1>
          <div className='flex justify-center'>
            <Link to='/books/create'>
              <MdOutlineAddBox className='text-amber-100 text-2xl mr-5'/>
            </Link>
            <span> - Click to Add Books</span>
          </div>
        </div>
        <div className=''>
        <button
          className='mode-btn bg-green-500 hover:bg-green-700 m-3'
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className='mode-btn bg-yellow-500 hover:bg-yellow-700'
          onClick={() => setShowType('card')}
        >
          Card
        </button>
      </div>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
