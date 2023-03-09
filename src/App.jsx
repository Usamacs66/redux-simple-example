import { useDispatch, useSelector } from "react-redux"
import { increment,decrement,multiply_with_two } from "./store/action/counterAction"
function App() {

  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();
  return (
    <div className="App">
      {counter}
      <button onClick={()=> {dispatch(increment())} }>increment</button>
      <button onClick={()=> {dispatch(decrement())} }>decrement</button>
      <button onClick={()=> {dispatch(multiply_with_two())} }>multiply with two</button>
    </div>
  )
}

export default App
