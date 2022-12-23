export default class ClassRoom {
  constructor (maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize
  }

  getMaxSize () {
    return this._maxStudentsSize
  }
}
