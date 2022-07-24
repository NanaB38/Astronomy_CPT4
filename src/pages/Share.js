import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/share.css';
import { AiOutlineDelete } from 'react-icons/ai';

function Share() {
  const [setSharePic] = useState(false);
  const [pics, setPics] = useState([]);
  const [form, setForm] = useState({ name: '', picture: '', details: '' });
  const [toShare, setToShare] = useState(false);
  const [idToDelete, setIdToDelete] = useState('');
  // const { id } = useParams();

  const fetchPosts = () => {
    axios.get('http://localhost:3001/planets').then((res) => setPics(res.data));
  };

  const handleSubmitPic = (e) => {
    e.preventDefault();
    const source = axios.CancelToken.source();
    axios
      .post('http://localhost:3001/planets', {
        name: form.name,
        picture: form.picture,
        details: form.details,
      })
      .then(() => {
        fetchPosts();
      });
    return () => {
      source.cancel('Component got unmounted');
    };
  };

  const updateDisplayPic = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSharePic = () => {
    setToShare(!toShare);
  };

  // const handleDelete = () => {
  //   axios
  //     .delete(`http://localhost:3001/planets/${id}`)

  //     .finally(() => setPics(console.log(pics)));
  // };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/planets/${id}`)
      .then(() => setPics(pics.filter((p) => id !== p.id)))
      .catch((err) => console.log());
  };

  return (
    <>
      <div className='share'>
        <div className='share-container'>
          <h2 className='title-share'>
            If you like, you can share an astronomy picture of GIF to the <br />
            Wild Code School Community 🌎
          </h2>
          <h3>
            Here is a selection the most beautiful pictures of our planets, the
            sky, the moon and beyond...
          </h3>
          <button className='buttons' type='button' onClick={handleSharePic}>
            Share a picture
          </button>
        </div>
        <>
          {toShare && (
            <div className='share-container'>
              <div className='form-share'>
                <form onSubmit={handleSubmitPic}>
                  <div className='label-name'>
                    <label htmlFor='name' className='label_form'>
                      Name
                    </label>
                    <textarea
                      type='text'
                      name='name'
                      className='input'
                      placeholder='Enter a title'
                      value={form.name}
                      onChange={updateDisplayPic}
                      required
                    />
                  </div>
                  <div className='label-name'>
                    <label htmlFor='details' className='label_form'>
                      Details
                    </label>
                    <textarea
                      type='text'
                      name='details'
                      className='input'
                      placeholder='Enter some details about the picture'
                      value={form.details}
                      onChange={updateDisplayPic}
                      required
                    />
                  </div>
                  <div className='label-name'>
                    <label htmlFor='details' className='label_form'>
                      Picture
                    </label>
                    <textarea
                      type='text'
                      name='picture'
                      className='input'
                      placeholder='Enter picture/gif link'
                      value={form.picture}
                      onChange={updateDisplayPic}
                      required
                    />
                  </div>
                  <button
                    type='submit'
                    onClick={handleSubmitPic}
                    className='buttons'
                    id='share-it'
                  >
                    Share it !
                  </button>
                </form>
              </div>
            </div>
          )}
        </>

        {pics.map((pic) => (
          <div className='pics-container' key={pic.id} id={pic.id}>
            <img src={pic.picture} alt={pic.name} className='pics-list' />
            <div className='planet-text'>
              <p className='planet-name'>{pic.name}</p>
              <p className='planet-det'>{pic.details}</p>
              <div
                type='button'
                onClick={() => handleDelete(idToDelete)}
                className='delete-btn'
              >
                <AiOutlineDelete />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Share;
