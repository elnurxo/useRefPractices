import { useRef,useState } from 'react';

export default function Toggle() {
  const isOnRef = useRef(false);
  const[state,setState] = useState();
  return (
    <button onClick={() => {
      isOnRef.current = !isOnRef.current;
      setState(!isOnRef.current);
      console.log(state);
    }}>
      {isOnRef.current ? 'On' : 'Off'}
    </button>
  );
}