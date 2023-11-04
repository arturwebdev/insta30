import React, { useEffect, useMemo } from 'react'
import IMAGES from '../../images'
import Post from '../Post/Post'
import {useDispatch, useSelector} from 'react-redux'
import {selectPosts} from '../../store/slices/posts/postsSlice'
import { fetchPosts } from '../../store/slices/posts/postsAPI'
import Spinner from '../Spinner/Spinner'
import { selectSearch } from '../../store/slices/search/searchSlice'

function Posts() {
    const {data, isLoading} = useSelector(selectPosts)
    const search = useSelector(selectSearch)
    const dispatch = useDispatch()

    useEffect(() => {
      if (!posts.length) {
        dispatch(fetchPosts())
      }
    }, [])

    const posts = useMemo(() => {
      return data.filter(post => post.name.includes(search))
                  .toSorted((a, b) => a.name.indexOf(search) - b.name.indexOf(search))
    }, [data, search])

  return (
    <>
        {
            isLoading ? <Spinner /> :
            posts.map(el => <Post key={el.id} comments={el.comments} id={el.id} img={el.img} name={el.name} likesCount={el.likesCount} postText={el.postText} timeAgo={el.timeAgo} />)
        }
    </>
  )
}

export default Posts