class Formatter {
  static capitalize(string){
    return string.slice(0,1).toUpperCase() + string.slice(1)
  }

  static sanitize(str){
    return str.replace(/[^A-Za-z0-9-\s']+/g, '');
  }

  static titleize(string) {
    let badboys = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let array = string.split(" ")
    let capss = array.map(word => {
      if (!badboys.includes(word)) {
        return this.capitalize(word)
      } else {
        return word
      }
    })
    capss[0] = this.capitalize(capss[0])
    return capss.join(" ")
  }

}