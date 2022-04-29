using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    
    public class Employee
    {

        public int IdEmployee { get; set; }
        public int IdCard { get; set; }
        public string FirstName { get; set; }
        public string LastName1 { get; set; }
        public string LastName2 { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public int IdDirection { get; set; }
        public int IdPermission { get; set; } 
        public int IdPosition { get; set; }
        public string Password { get; set; }
        public decimal Salary { get; set; }
        public DateTime HiringDate { get; set; }

        public Employee ()
        {

        }

        public Employee(int idEmployee, int idCard, string firstName, string lastName1, string lastName2, string phone, string email, int idDirection, int idPermission, int idPosition, string password, decimal salary, DateTime hiringDate)
        {
            IdEmployee=idEmployee;
            IdCard=idCard;
            FirstName=firstName;
            LastName1=lastName1;
            LastName2=lastName2;
            Phone=phone;
            Email=email;
            IdDirection=idDirection;
            IdPermission=idPermission;
            IdPosition=idPosition;
            Password=password;
            Salary=salary;
            HiringDate=hiringDate;
        }


    }
}
