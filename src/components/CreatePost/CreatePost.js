import React, { useRef } from 'react';
import IMAGES from '../../images';
import './CreatePost.css'
import { convertFileToBase64 } from '../../helpers/convertors';
import { useDispatch } from 'react-redux';
import { addPost } from '../../store/middlewares/posts';
import { useNavigate } from 'react-router-dom';
import { whithSelectImg } from '../../hoc/whithSelectImg';
const CreatePost = ({myImg, toggleMyImg}) => {
    const formRef = useRef(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const [, {value: postText}] = formRef.current
        // const [{files: [file]}, {value: postText}] = formRef.current
        // const img = await convertFileToBase64(file)

        const img = myImg

        dispatch(addPost({img, postText}))

        navigate('/')
    }

    const handleChange = async (e) => {
        const img = await convertFileToBase64(e.target.files[0])

        toggleMyImg(img)
    }

    return (
        <div style={{marginTop: '100px', textAlign: 'center'}} className='container'>
            <h1 style={{fontSize: '50px' }}>Create Post</h1>
            <br/>
            <img style={{margin:'auto'}} width={myImg ? 400 : 100} src={myImg || IMAGES.createPost} alt="" />   
            <br/>
            <form ref={formRef} onSubmit={handleSubmit} style={{marginTop: '50px'}}>
                <label className="input-file">
                    <input type="file" onChange={handleChange} name="file"/>		
                    <span>Выберите файл</span>
                </label><br/><br/>
                <input type="text" />
                <br/><br/>
                <button>Add</button>
            </form>
        </div>
    );
}

export default whithSelectImg(CreatePost);
