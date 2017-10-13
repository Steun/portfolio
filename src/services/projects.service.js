class Projects {
  constructor() {
    this.data = [
      {
        name: 'projectp',
        id: 1
      },
      {
        name: 'Lift',
        id: 2
      }
    ]
  }
  get(name) {
    return this.data.find(x => x.name === name)
  }
}

export {Projects}
