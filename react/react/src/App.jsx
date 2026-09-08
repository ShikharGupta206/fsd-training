import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './component/ICard'

function App() {
  return(
<>
    <div style={{border:'2px solid red',width:'600px',height:'600px'}}>
      <table>
        <tr>
          <th>Name</th>
          <td>Shikhar</td>
        </tr>
        <tr>
          <th>Roll no.</th>
          <td>1036</td>
        </tr>
        <tr>
          <th>Branch</th>
          <td>CSE</td>
        </tr>
      </table>
      </div>
      </>
  )
}

export default App;