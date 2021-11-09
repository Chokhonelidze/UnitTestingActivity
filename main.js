function Greet(name) {
  if (!Array.isArray(name)) {
    if (name === null) {
      name = "there!";
    }
    
    if (name === name.toUpperCase()) {
      return "HELLO " + name;
    } else {
      return "Hello, " + name;
    }
  }
  else{
      let mNames = name.join(",");
      return "Hello, "+mNames;
  }
}
