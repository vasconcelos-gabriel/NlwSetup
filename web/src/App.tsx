import './styles/global.css'
import Habit from './components/Habit'

function App() {
  return (
    <div>
      <h1>NLW SETUP</h1>
      <Habit completed={3} />
      <Habit completed={10} />
      <Habit completed={20} />
      <Habit completed={30} />
    </div>
  )
}

export default App
