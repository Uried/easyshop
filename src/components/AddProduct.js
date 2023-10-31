import React, { useState } from 'react';
import { IoMdArrowForward } from 'react-icons/io';

const AddArticleForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Article soumis :', { title, content, price });
    // Réinitialiser les champs du formulaire
    setTitle('');
    setContent('');
    setPrice('');
    setImage('');
  };

  return (
    <div className="">
      
      <form onSubmit={handleSubmit} className="bg-white shadow-2xl w-full fixed top-0 h-full md:w-[35vw]  xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]">'
      <div className="flex items justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Add a new item
        </div>
        {/* icon */}
        <div
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Item name
          </label>
          <input
            type="text"
            id="title"
            className="shadow appearance-none border rounded w-[70%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Entrez le titre de l'article"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
            Item description
          </label>
          <textarea
            id="content"
            className="shadow appearance-none border rounded w-[70%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            style={{ height: '80px', resize: 'none' }}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
            Item price
          </label>
          <input
            type="number"
            id="price"
            className="shadow appearance-none border rounded w-[70%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
            Import item image
          </label>
          <input
            type="file"
            id="price"
            className="shadow appearance-none border rounded w-[70%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-black hover:bg-slate-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add item
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddArticleForm;