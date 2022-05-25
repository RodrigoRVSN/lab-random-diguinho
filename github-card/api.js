let timer

const fetchUser = async () => {
  try {
    const response = await fetch(`https://api.github.com/users/${input.value}`)
    const json = await response.json()
    return json
  } catch (error) {
    console.log(error)
  }
}

window.onload = (() => {
  input = document.getElementById('search')

  input.addEventListener('keyup', () => {
    clearTimeout(timer)

    timer = setTimeout(async () => {
      const user = await fetchUser()

      document.getElementsByTagName('h1')[0].innerHTML = user.name
      document.getElementsByClassName('card-avatar')[0].src = user.avatar_url
      document.getElementsByClassName('card-avatar')[0].alt = user.name
      document.getElementsByClassName('card-footer')[0].innerHTML = `@${user.login}`
    }, 2000)
  })
})