using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataAccess;
using Entities;

namespace Business
{
    public class EmployeeOperations
    {
        EmployeeDataAccess employeeDataAccess = new EmployeeDataAccess();

        public List<Employee> ShowAllEmployee()
        {
            return employeeDataAccess.ShowAll();
        }

        public List<Employee> ShowEmployeeById(int id)
        {
            return employeeDataAccess.ShowById(id);
        }

        public string UpdateEmployee(Employee employee)
        {
            return employeeDataAccess.Update(employee);
        }

        public string InsertEmployee(Employee employee)
        {
           return employeeDataAccess.Insert(employee);
        }

        public string DeleteEmployee(int id)
        {
            return employeeDataAccess.Delete(id);
        }
    }
}
