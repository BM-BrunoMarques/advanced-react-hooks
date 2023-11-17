// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Counter({initialCount = 0, step = 1}) {
  
  
  // const countReducer = (state, newState) => typeof newState === 'function' ? newState(state) : newState
  const countReducer = (state, action) => {
    const {type, step} = action

    switch (type) {
      case 'INCREMENT': {
        return state + step
      }
      default: {
        throw new Error ('type is different than the predicted cases')
      }
    }
  }


  const [state, setState] = React.useReducer(countReducer, initialCount)

  const increment = () => setState({type: 'INCREMENT', step})
  return <button onClick={increment}>{state}</button>
}

function App() {
  return <Counter />
}

export default App
