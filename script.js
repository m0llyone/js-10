"use strict";

// {
//    let Calc = function() {
//     this.get = function(){
//       this.a = +prompt('Enter the first number');
//       this.b = +prompt('Enter the second number')
//       this.oper = (prompt('Enter the operation(*,/,+,-)'));
//       this.operation();
//     }
//     this.operation = function() {
//       switch(this.oper){
//         case '+':
//           this.result = this.a + this.b
//          break;
//          case '-':
//           this.result = this.a - this.b
//           break;
//           case '*':
//             this.result = this.a * this.b
//             break;
//           case '/':
//             this.result = this.a / this.b
//             break;
//         }
//         this.showCalc();
//     }
//     this.showCalc = function () {
//       alert(this.a + this.oper + this.b + '=' + this.result);
//     }

//   }

//   let calc = new Calc ();
//   calc.get();
// }

// Поликлиника. Возм. методы: запись на прием (ввод ФИО, возраст, время, врач)
// проверка введенной информации, например: ФИО должно состоять из трех слов длинной
// не менее 2 символов и возраст должен быть указан положительным числом, вывод информации
// о конкретном пациенте, вывод всех пациентов,редактирование,удаление.

{

function Patient() {
  this.name;
  this.age;
  this.time;
  this.doctor;
  this.client;

  const createName = () => {
    this.name = prompt("Enter your name");
    let checkAnswear = /^[a-zA-Z]{3,12}$/.test(this.name)
    if (!checkAnswear) {
        alert("Wrong username!")
        return createName()
    }
    return this.name;
  }

    const createAge = () => {
    this.age = prompt("Enter your age")
    let checkAnswear =  /^[0-9]{1,2}$/.test(this.age);
    if(!checkAnswear) {
      alert("Wrong age!")
      return createAge()
    }
    return this.age;
    }

    const createTime = () => {
    this.time = prompt("What time would you like to book?");
    let checkAnswear = /^[0-2]{1}[0-9]{1}:[0-5]{1}[0-9]{1}$/.test(this.time)
    if (!checkAnswear) {
        alert("This time is not exist!")
        return createTime()
    }
    return this.time
    }

    const createDoctor = () => {
    this.doctor = prompt("Enter the doctor");
    let checkAnswear = /^[a-zA-Z]{3,12}$/.test(this.doctor)
    if (!checkAnswear) {
        alert("This doctor is not found!")
        return createDoctor()
    }
    return this.doctor
    }

    this.createUser = function(){
      createName();
      createAge();
      createTime();
      createDoctor();
    }

  this.addPatient = function() {
  this.client = {
    name: this.name,
    age: this.age,
    time: this.time,
    doctor: this.doctor,
  }
}

  this.editPatient = function() {
    const answear = prompt("Enter what you want to change");
    const edit = prompt("Enter the value you wanna change to");
    if (answear === this.client.name) {Object.defineProperty(this.client,"name",{value: edit})}
    else if (answear === this.client.age){Object.defineProperty(this.client,"age",{value: edit})}
    else if (answear === this.client.time){Object.defineProperty(this.client,"time",{value: edit})}
    else if (answear == this.client.doctor){Object.defineProperty(this.client,"doctor",{value: edit})}
  }

  this.removePatient = function() {
    const answear = prompt("Enter the attribute that you want to remove");
    if (answear === this.client.name) { return delete this.client.name;}
    else if (answear === this.client.age){return delete this.client.age;}
    else if (answear === this.client.time){return delete this.client.time;}
    else if (answear === this.client.doctor){return delete this.client.doctor;}

  }

  this.showContact = function () {
    for(let key in this.client) {
        console.log(`${this.client[key]}`)
    }
  }
}

let patient = new Patient();
// patient.createUser();
// patient.addPatient();
// patient.removePatient();
// patient.editPatient();
// patient.showContact();

// функциональное наследование
let Hospital = function () {
  Patient.apply(this,arguments);
  this.showContact = function () {
    for(let key in this.client) {
        console.log(`${key}: ${this.client[key]}\n`)
    }
  }
}

let hospital = new Hospital();
// hospital.createUser();
// hospital.addPatient();
// hospital.removePatient();
// hospital.editPatient();
// hospital.showContact();


let NewMethods = function() {

  this.create = function(tagName) {
    let elem = document.createElement(tagName)
    document.body.append(elem);
    return tagName;
  }

  this.attr = function(elem,name,value) {
    document.querySelector(elem).setAttribute(name,value);
  }

  this.html = function(elem,value) {
    document.querySelector(elem).innerHTML = value;
  }

  this.search = function(elem,selector) {
    if(selector){
    console.log(document.querySelectorAll(selector));
    }else{
      console.log(document.querySelectorAll(elem).child);
    }
  }

  this.addClass = function (elem,className) {
    document.querySelector(elem).classList.add(className)
  }

  this.removeClass = function(elem,className) {
     document.querySelector(elem).classList.remove(className);
  }

  this.toggleClass = function(elem,className) {
    document.querySelector(elem).onclick = function() {
      document.querySelector(elem).classList.toggle(className);
    }
  }

  this.hasClass = function(elem,className) {
    console.log(document.querySelector(elem).classList.contains(className));
}

  this.append = function (newElem,elem,beforeElem){
    if(beforeElem){
      document.querySelector(beforeElem).before(document.createElement(newElem));
    } else {
      document.querySelector(elem).append(document.createElement(newElem))
    }
  }

  this.on = function (elem,eventName,funcName) {
    document.querySelector(elem).addEventListener(eventName,funcName);
  }
}


let newMethods = new NewMethods();
let h1 = newMethods.create('h1');

newMethods.attr('h1','font-weight','700');
newMethods.html('h1','zagolovok');
newMethods.search('h1','h1')
newMethods.addClass('h1','class');
newMethods.removeClass('h1','class');
newMethods.toggleClass('h1','active');
newMethods.hasClass('p','before');
newMethods.append('p','div','p')
newMethods.on('h1','click',clickOn);

function clickOn(event) {
  console.log(this.textContent);
  // console.log(event.target.textContent);
}

}
