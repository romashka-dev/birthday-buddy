import { useState } from 'react'
import { data } from '../src/data/data'
import List from './components/List'
import Button from './components/Button'

const App = () => {
  const [people, setPeople] = useState(data)

  return (
    <>
      <main>
        <section className="container">
          <h3>{people.length} birthdays today</h3>
          <List people={people} />
          {people.length < 1 ? (
            <Button text="reset" onClick={() => setPeople(data)} />
          ) : (
            <Button text="clear all" onClick={() => setPeople([])} />
          )}
        </section>
      </main>
    </>
  )
}
export default App
