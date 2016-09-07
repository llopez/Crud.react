export default class Validator {
  constructor(data) {
    this.data = data;
    this.errors = {
      first_name: [],
      last_name: [],
      sex: []
    };
  }

  validatePresence(attr) {
    if(this.data[attr] == ""){ 
      this.errors[attr].push("can't be blank");
    }
    return this;
  }

  isValid() {
    let count = Object.keys(this.errors.first_name).length +
    Object.keys(this.errors.last_name).length +
    Object.keys(this.errors.sex).length;

    return count == 0;
  }
}

