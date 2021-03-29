//Вариант 6
//Релизуйте класс с использованием JavaScript Работник с двумя свойствами (на ваш выбор) и двумя методами и двух его наследников у которых будет как минимум один дополнительный метод и свойство

class Employee {
   numberOfWorkingHours = 8;
   averageSalary = 35361;

   constructor(initials, lastName, position, salary){
      this.lastName = lastName;
      this.initials = initials;
      this.position = position;
   }
   sayHi(){
      console.log ("Добро пожаловать, " + this.lastName + " " + this.initials);} 
   printInfo(){
      console.log ("Ф.И.О — " + this.lastName + " " + this.initials + ", должность – " + this.position + ", зарплата – " + this.salary);}

   }

class googleEmoloyee extends Employee{
   salary = 206880;
   goWork(){console.log(`${this.lastName}`+ ' ' + `${this.initials}` + ", идет работать");}
}

class uWashiEmoloyee extends Employee{
   salary = 15000;
   goWork(){console.log(`${this.lastName}`+ ' ' + `${this.initials}` + " говорит: \"неа, за " + this.salary + " рублей не пойду\"") ;}
}

new googleEmoloyee ('А. В.', 'Полежаев', 'Менеджер', 70000).goWork();
new uWashiEmoloyee ('А. В.', 'Полежаев', 'Менеджер', 70000).goWork();