using DataAccess;
using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business
{
    public class LoginOperations
    {
        LoginDataAccess loginDataAccess = new LoginDataAccess();


        public Employee SearchEmployee(int username)
        {
            return loginDataAccess.SearchEmployee(username);
        }

        public Customer SearchCustomer(int username)
        {
            return loginDataAccess.SearchCustomer(username);
        }

        public string GetUserType(int username)
        {
            Employee employee = SearchEmployee(username);
            Customer customer = SearchCustomer(username);

            string userError = "Username doesn't exist";

            if (employee != null)
            {
                return "Employee";
            }
            else if (customer != null)
            {
                return "Customer";
            }
            return userError;
        }

        public Employee GetEmployeeByUsername(int username)
        {
            Employee employee = SearchEmployee(username);

            return employee;
        }

        public Customer GetCustomerByUsername(int username)
        {
            Customer customer = SearchCustomer(username);

            return customer;
        }
    }
}




