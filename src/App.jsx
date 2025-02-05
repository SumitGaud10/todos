import { Heading, Container, Box, Button, Grid, GridItem, Card, Text } from "@chakra-ui/react"
import NewEntry from "./NewEntry"
import { useEffect, useState } from "react"

function App() {
  const [todos, setTodos] = useState(()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])

  const deleteItem = (i) => {
    const storedTodos = [...todos]
    storedTodos.splice(i, 1);
    setTodos(storedTodos)
  }

  return (
    <Box display={'flex'}>
      <Container>
        <Box paddingTop={6} display='flex' alignItems={'center'}>
          <Box>

          <Heading>
            Todos App
          </Heading>
          <Text fontSize={'smaller'} color={'fg.muted'}>(Made by Sumit)</Text>
          </Box>
          <NewEntry method={setTodos}/>
        </Box>

        <Grid marginTop={10} 
        templateColumns={{  base:'repeat(1,minmax(0, 1fr))', 
                            md:'repeat(2,minmax(0, 1fr))', 
                            lg:"repeat(4,minmax(0, 1fr))"}}
        gap={4}>
          {
            todos.map((data,index)=>(
              <GridItem key={index}>
                <Card.Root variant={'elevated'}>
                  <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Description>{data.desc}</Card.Description>
                  </Card.Body>
                  <Card.Footer justifyContent={'end'}>
                    <Button variant={'surface'} onClick={() => deleteItem(index)}>Delete</Button>
                  </Card.Footer>
                </Card.Root>
              </GridItem>
            ))
          }
        </Grid>
      </Container>
    </Box>
  )
}

export default App
