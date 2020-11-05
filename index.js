const express = require('express')
const app = express()

app.use(express.json())

let persons = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
      },
      {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
      },
      {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
      },
      {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
      }
]

const date = new Date().toUTCString()

app.get('/', (request, response)=> {
    response.send('<h1>Hello world!</h1>')
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/info', (request, response) => {
  response.send(`Phonebook has info for ${persons.length} people </br>  ${date}`)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)

  if (person) {
    response.json(person)
  }
  else {
    response.status(404).end() 
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id =Number(request.params.id)
  persons = persons.filter(person => person.id !== id)
  response.status(204).end()
})
const generateId = () => {
  
  const min = Number(99999)
  const max = Number(99999999)
  
  return Math.round(Math.random()* (max -min) + min)
}
app.post('/api/persons', (request, response) => {
  const body = request.body
  
  if (!body.name) {
    return response.status(400).json({
      error: 'name missing'
    })
  }
  if (!body.number) {
    return response.status(400).json({
      error: 'number missing'
    })
  }
  // const existing = persons.find(p => p.name === name)

  // if (body.name === existing) {
  //   return response.status(400).json({
  //     error: 'name must be unique' 
  //   })

  // }

  
  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  }
persons = persons.concat(person)
  
  response.json(person)
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)