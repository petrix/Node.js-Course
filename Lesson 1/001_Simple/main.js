function User(name){
    this.name = name;
    this.sayHello = () => {
        console.log('Hello ', this.name);
    };
}

let Jhon = new User('Jhon');

Jhon.sayHello();