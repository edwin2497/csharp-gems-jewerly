using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Customer
    {

        public int IdCustomer { get; set; }
        public int IdCard { get; set; }
        public string FirstName { get; set; }
        public string LastName1 { get; set; }
        public string LastName2 { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public int IdDirection { get; set; }
        public string Password { get; set; }

        public Customer()
        {

        }


        public Customer(int idCustomer, int idCard, string firstName, string lastName1, string lastName2, string phone, string email, int idDirection, string password)
        {
            IdCustomer=idCustomer;
            IdCard=idCard;
            FirstName=firstName;
            LastName1=lastName1;
            LastName2=lastName2;
            Phone=phone;
            Email=email;
            IdDirection=idDirection;
            Password=password;
        }


    }
}
