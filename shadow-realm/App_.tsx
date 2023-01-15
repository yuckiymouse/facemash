import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [helloQuery, setHelloQuery] = useState();

  // run this code only  the first time the component loads
  useEffect(
    ()=>{
      fetch("https://0udof23xda.execute-api.us-east-1.amazonaws.com/hello", {
        method: "POST"
      }).then(
        res=>res.json()
      ).then(
        res=>{
          console.log(res)
          setTimeout(()=>{
            setHelloQuery(res)
          }, 3000)

        }
      )

    },
    // empty array means only the first time, no dependency array means always run this code
    // [variableName] means every time "variableName" changes
    []
  )

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {
        helloQuery ? (
          <div><h1>{helloQuery.message}</h1></div>
        ) : (
          <div>loading...</div>  
        )

      }
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
