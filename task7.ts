//Вариант 6
//Необходимо перевести ваши JS классы на TS. Все входные параметры и возвращаемые значения для методов должны иметь тип (отличный от any). Все свойства тоже должны иметь тип. Помимо этого необходимо, чтобы базовый класс был либо интерфейсом, либо абстрактным классом в зависимости от построения вашего наследования.

abstract class Employee {
   numberOfWorkingHours: number = 8;
   averageSalary: number = 35361;
   lastName: String;
   initials: String;
   position: String;
   salary: number;

   constructor(initials: String , lastName: String, position: String, salary: number){
      this.lastName = lastName;
      this.initials = initials;
      this.position= position;
      this.salary= salary;
      
   }
   sayHi(){
      console.log ("Добро пожаловать, " + this.lastName + " " + this.initials);} 
   printInfo(){
      console.log ("Ф.И.О — " + this.lastName + " " + this.initials + ", должность – " + this.position + ", зарплата – " + this.salary);}

   }

class googleEmoloyee extends Employee{
   salary: number = 206880;
   goWork(){console.log(`${this.lastName}`+ ' ' + `${this.initials}` + ", идет работать");}
}

class uWashiEmoloyee extends Employee{
   salary: number = 15000;
   goWork(){console.log(`${this.lastName}`+ ' ' + `${this.initials}` + " говорит: \"неа, за " + this.salary + " рублей не пойду\"") ;}
}

new googleEmoloyee ('А. В.', 'Полежаев', 'Менеджер', 70000).goWork();
new uWashiEmoloyee ('А. В.', 'Полежаев', 'Менеджер', 70000).goWork();