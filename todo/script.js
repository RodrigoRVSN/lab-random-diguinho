const submitForm = (event) => {
  event.preventDefault()

  const input = document.getElementsByClassName('todo-input')[0]
  const value = input.value

  if(!value.trim()) return

  document.getElementsByClassName('todo-not-found')[0].style.display = 'none'
  const container = document.getElementsByClassName('todo-container')[0]

  const element = document.createElement('p')
  element.className = 'todo-item'
  element.innerHTML = `<span>${value}</span> <button class="todo-remove" onclick="removeElement()">❌</button>`

  container.appendChild(element)

  input.value = ''
}

const removeElement = () => {
  event.currentTarget.parentElement.remove()

  const numberOfItens = document.getElementsByClassName('todo-container')[0].childElementCount
  
  if(numberOfItens === 0) {
    document.getElementsByClassName('todo-not-found')[0].style.display = 'block'
  }
}