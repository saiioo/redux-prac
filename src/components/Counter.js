import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/counterReducer";
function Counter() {
  let st = useSelector((state) => {
    return state.counter;
  });
  let dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <div>{st.count}</div>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <br />
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        reset
      </button>
    </>
  );
}

export default Counter;
