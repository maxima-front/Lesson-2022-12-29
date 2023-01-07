import { useRef, useState } from 'react'

const Focus = () => {
  const inputRef = useRef(null);

  // state vs ref
  // ref может хранить информацию

  // Полезно использовать, если вы хотите передать данные от родителя 
  // эти данные будут меняться, но вы не хотите обновлять компонент

  const testRef = useRef('init');
  const [state, setState] = useState('init');

  const handleClick = () => { 
    inputRef.current.focus();

    setTimeout(() => { testRef.current = 'updated' }, 5000);
    setTimeout(() => { setState('updated') }, 10000);
  }

  console.log('render');

  return ( 
    < > 
      <input 
        type="text" 
        ref={inputRef} 
      /> 
      <button onClick={handleClick}>Set Focus</button> 
      <br />
      {testRef.current}
      <br />
      {state}
    </> 
  )
}

export default Focus