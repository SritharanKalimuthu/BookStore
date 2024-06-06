import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <table className='w-11/12 mx-10 border-double border-4 rounded-xl border-separate border-spacing-3 table-auto'>
      <thead>
        <tr>
          <th className='text-l text-orange-600'>No</th>
          <th className='text-l text-orange-600'>Title</th>
          <th className='text-l text-orange-600'>
            Author
          </th>
          <th className='text-l text-orange-600'>
            Publish Year
          </th>
          <th className='text-l text-orange-600'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className='h-8'>
            <td className='text-center'>
              {index + 1}
            </td>
            <td className='text-center'>
              {book.title}
            </td>
            <td className='text-center'>
              {book.author}
            </td>
            <td className='text-center'>
              {book.publishYear}
            </td>
            <td className='text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
