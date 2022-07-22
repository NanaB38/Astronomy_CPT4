import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/share.css';
import { AiOutlineDelete } from 'react-icons/ai';

function Share() {
  const [sharePic, setSharePic] = useState(false);
  const [pics, setPics] = useState([]);
  const [form, setForm] = useState({ name: '', picture: '', details: '' });
  // const [deletePic, setDeletePic] = useState(false);
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
      .then(() => setPics(pics.filter((p) => id !== p.id)))
      .catch((err) => console.error(err));
  };

  const handleSharePic = () => {
    setToShare(!toShare);
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
            <div>
              <p className='planet-name'>{pic.name}</p>
              <p className='planet-det'>{pic.details}</p>
              <div onClick={() => handleDelete()} className='delete-btn'>
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
