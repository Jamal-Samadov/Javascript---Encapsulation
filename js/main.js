

function Student(name,surname,salary)
{
  var Name=name;
  var Surname=surname;
  var Salary=salary;


  Object.defineProperty(this,"Name",{
    get:function()
    {
      return Name;
    },

  set:function(Name)
  {
    this.Name=Name;
  }
  
});

Object.defineProperty(this,"Surname",{
    get:function()
    {
      return Surname;
    },

  set:function(Surname)
  {
    this.Surname=Surname;
  }
  
});
 
    Object.defineProperty(this,"Salary",{
    get:function()
    {
      return Salary;
    },
  set:function(Salary)
  {
    this.Salary=Salary;
  }
  
});
  
}
  var stud=new Student("Jamal", "Samadov", 1200);
  document.writeln(stud.Name +" "+stud.Surname + " "+ stud.Salary);