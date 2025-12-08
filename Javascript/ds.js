function Person(name,gender){
 
    console.log("the val", this.name, name)
    this.name=name;
    this.gender=gender;
  
}

let p1= new Person("demo","male")
console.log(p1)

