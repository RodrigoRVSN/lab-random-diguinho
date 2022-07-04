import fs from 'fs'

const path = './db.json'

class Crud {
  create(data){
    return fs.writeFileSync(path, JSON.stringify(data), { encoding: 'utf-8'} )
  }

  read(){
    return JSON.parse(fs.readFileSync(path))
  }

  delete(id) {
    const json = JSON.parse(fs.readFileSync(path))
    const newData = json.filter((item) => item.id !== id)
    
    fs.unlink(path, () => {
       fs.writeFileSync(path, JSON.stringify(newData), { encoding: 'utf-8'} )
    })
  }
}

const crud = new Crud()

crud.create([{ name: 'Rodrigo', id: 1}, { name: 'Maria', id: 2}])

console.log(crud.read())

crud.delete(2)
