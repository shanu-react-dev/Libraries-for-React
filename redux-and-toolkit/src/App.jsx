import './App.css'
import {useDispatch, useSelector} from "react-redux"
import { increment, decrement } from './component/features/counterSlice'


function App() {
    const count = useSelector((state) => state.counter.value)
  let dispatch = useDispatch()

  return (
    <>
      <section id="center">
        <h1>{count}</h1>
        <h1>Hii this is Shanu Singh</h1>
        <button onClick={() =>dispatch(increment()) }>increment</button>
        <button onClick={() =>dispatch(decrement()) }>decrement</button>
      </section>
    </>
  )
}

export default App
