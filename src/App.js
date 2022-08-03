import React, { createContext } from 'react'
import ComponentA from './components/ComponentA'

const firstName = createContext()
const lastName = createContext()

function App() {
  return (
    <>
      <firstName.Provider value={'Abhishek'}>
        <lastName.Provider value={'Kapoor'}>
          <ComponentA />
        </lastName.Provider>
      </firstName.Provider>
    </>
  )
}

export default App;
export { firstName, lastName }
