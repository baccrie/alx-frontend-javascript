/* eslint-disable valid-typeof */
/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (!(typeof name === 'string')) {
      throw new TypeError('Name must be a string');
    } else if (!(typeof length === 'number')) {
      throw new TypeError('Length must be a number');
    } else if (!(Array.isArray(students))) {
      throw new TypeError('Student must be an array');
    }
    for (const el of students) {
      if (typeof el !== 'string') { throw TypeError('students must contain strings'); }
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (!(typeof name === 'string')) {
      throw TypeError('Name must be a string');
    }
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (!(typeof length === 'number')) {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (!Array.isArray(students)) throw TypeError('students must be an Array');
    for (const el of students) {
      if (typeof el !== 'string') { throw TypeError('students must contain strings'); }
    }
    this._students = students;
  }
}
