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

        public void UpdateEmployee(Employee employee)
        {
            employeeDataAccess.Update(employee);
        }

        public void InsertEmployee(Employee employee)
        {
            employeeDataAccess.Insert(employee);
        }

        public void DeleteEmployee(int id)
        {
            employeeDataAccess.Delete(id);
        }
    }
}
