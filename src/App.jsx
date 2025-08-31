
import { Button } from 'reactstrap'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { testFetchData } from './redux/slices/testSlice';

function App() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.test)

  useEffect(() => {
    dispatch(testFetchData())
  }, [])

  useEffect(() => {
    console.log("loading", loading)
    console.log("data", data)
    console.log("error", error)
  }, [data, loading, error])
  return (
    <>
      <p>hello world</p>
      <Button>clcik me</Button>
    </>
  )
}

export default App
