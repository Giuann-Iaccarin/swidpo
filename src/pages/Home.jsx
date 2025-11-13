import { useState } from 'react'
import viteLogo from '/vite.svg'
import reactLogo from '../assets/react.svg'

function Home() {
    const [count, setCount] = useState(0)

    return (
        <div className="page">
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/pages/Home.jsx</code> and save to test HMR
                </p>
            </div>
        </div>
    )
}

export default Home
