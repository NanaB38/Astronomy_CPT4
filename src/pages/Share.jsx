import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/index.css';
import '../styles/share.css';
import { AiOutlineDelete } from 'react-icons/ai';

function Share() {
  const [sharePic, setSharePic] = useState(false);
  const [pics, setPics] = useState([]);
  const [form, setForm] = useState({ name: '', picture: '', details: '' });
  // const [deletePic, setDeletePic] = useState(false);
  const [idToDelete, setIdToDelete] = useState('');
  const [toShare, setToShare] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3001/planets').then((res) => setPics(res.data));
  }, []);

  const handleSubmitPic = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/planets', {
        name: form.name,
        picture: form.picture,
        details: form.details,
      })
      .then((res) => setSharePic((currentPic) => [...currentPic, res.data]));
    setForm({ name: '', picture: '', details: '' });
  };

  const updateDisplayPic = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/planets/${id}`)
      .then(() => setPics(pics.filter((pic) => id !== pic.id)))

      .catch((err) => console.error(err));
  };

  const handleSharePic = () => {
    setToShare(!toShare);
  };

  return (
    <>
      <div className='share'>
        <h2 className='title-share'>
          If you like, you can share an astronomy picture of GIF to the Wild
          Code School Community
        </h2>
        <h3>
          Here is a selection the most beautiful pictures of our planets, the
          sky and the moon...
        </h3>
        <button className='button-share' type='button' onClick={handleSharePic}>
          Share a picture
        </button>
        <>
          {toShare && (
            <form className='form-share' onSubmit={handleSubmitPic}>
              <div>
                <label htmlFor='name' className='label_form'>
                  Name
                </label>
                <textarea
                  type='text'
                  name='name'
                  className='input-name'
                  placeholder='Enter a title'
                  value={form.name}
                  onChange={updateDisplayPic}
                  required
                />
              </div>
              <div>
                <label htmlFor='details' className='label_form'>
                  Details
                </label>
                <textarea
                  type='text'
                  name='details'
                  className='input-details'
                  placeholder='Enter some details about the picture'
                  value={form.details}
                  onChange={updateDisplayPic}
                  required
                />
              </div>
              <div>
                <label htmlFor='details' className='label_form'>
                  Details
                </label>
                <textarea
                  type='text'
                  name='picture'
                  className='input-pic'
                  placeholder='enter picture/gif link'
                  value={form.picture}
                  onChange={updateDisplayPic}
                  required
                />
              </div>
              <button type='submit' onClick={handleSubmitPic}>
                Share it !
              </button>
            </form>
          )}
        </>

        {pics.map((pic) => (
          <div className='pics-container' key={pic.id} id={pic.id}>
            <img src={pic.picture} alt={pic.name} className='pics-list' />
            <p>{pic.name}</p>
            <p>{pic.details}</p>
            <div onClick={() => handleDelete(idToDelete)}>
              <AiOutlineDelete />
            </div>
          </div>
        ))}
        <p></p>
      </div>
    </>
  );
}

export default Share;
