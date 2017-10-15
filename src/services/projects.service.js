let projects = [
  {
    name: 'projectp',
    id: 1
  },
  {
    name: 'Lift',
    id: 2
  }
]

function get(name) {
  return projects.find(x => x.name === name)
}

export {projects, get}

