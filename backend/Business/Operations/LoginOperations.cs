using DataAccess;
using Entities;
using Newtonsoft.Json;
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

        //public List<Employee> Login(int username, string password)
        //{
        //    Employee employee = SearchEmployee(username);
        //    Customer customer = SearchCustomer(username);

        //    string userError = "Username doesn't exist";
        //    string passwordError = "Incorrect password";

        //    List<Employee> employees = new List<Employee>();


        //    if (employee != null)
        //    {
        //        if (password.Equals(employee.Password))
        //        {
        //            employees.Add(employee);
        //            return employees;
        //        }
        //        //else
        //        //{
        //        //    return passwordError;
        //        //}
        //    }
        //    //else if (customer != null)
        //    //{
        //    //    if (password.Equals(customer.Password))
        //    //    {
        //    //        return "Customer";
        //    //    }
        //    //    else
        //    //    {
        //    //        return passwordError;
        //    //    }
        //    //}
        //    return null;
        //}

        public Employee GetEmployeeByUsername(int username)
        {
            Employee employee = SearchEmployee(username);

                return employee;
        }
    }
}
