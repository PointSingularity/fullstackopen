import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {  return (
  <div>
    <p>Hello {props.name}</p>    </div>
)}

const Footer = () => {
  return (
    <div>
      greeting app created by zeropoint
    </div>
  )


}
const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))