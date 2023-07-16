// eslint-disable-next-line no-unused-vars, import/prefer-default-export
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  displayFullCurrency() {
    const full = `${this._name} (${this._code})`;
    return full;
  }
}
