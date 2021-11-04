import './App.css'
import { Box, RoutedButton as GrommetRoutedButton, Heading } from 'grommet'
import { Add, Subtract } from 'grommet-icons'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Box align="center" pad="medium">
        <Heading margin={undefined}>Count - React</Heading>
        <Heading level={2} margin={undefined}>
          {count}
        </Heading>
        <Box direction="row" align="center" gap="500px" pad="xsmall">
          <GrommetRoutedButton
            primary
            size="medium"
            color="neutral-2"
            icon={<Subtract />}
            onClick={() => {
              setCount(count - 1)
            }}
          />
          <GrommetRoutedButton
            primary
            size="medium"
            color="neutral-2"
            icon={<Add />}
            onClick={() => {
              setCount(count + 1)
            }}
          />
        </Box>
      </Box>
    </div>
  )
}

export default App
