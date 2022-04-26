﻿using Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public class EmployeeDataAccess : IOperations<Employee>
    {
        Connection connection = new Connection();

        public void Delete(int id)
        {
            try
            {
                string parameter = "@IDEMPLOYEE";
                string Sqlstring = string.Format("[SCH_ADMINISTRATIVE].[SP_DELETE_EMPLOYEES]");
                connection.spShowById(Sqlstring, id, parameter);
            }
            catch (Exception ex)
            {

                Console.WriteLine("EmployeeDataAccess.Delete Error: " + ex.Message);
            }
        }

        public void Insert(Employee employee)
        {
            try
            {
                string Sqlstring = string.Format("[SCH_ADMINISTRATIVE].[SP_INSERT/UPDATE_EMPLOYEES]");
                connection.spInsert_UpdateEmployee(Sqlstring, employee);
            }
            catch (Exception ex)
            {

                Console.WriteLine("EmployeeDataAccess.Insert Error: " + ex.Message);
            }
        }

        //public DataTable ShowAll()
        //{
        //    string Sqlstring = string.Format("[SCH_ADMINISTRATIVE].[SP_SEARCH_ALL_EMPLOYEES]");
        //    DataTable dt = connection.spShowAll(Sqlstring);
        //    return dt;
        //}

        public List<Employee> ShowAll()
        {
            string Sqlstring = string.Format("[SCH_ADMINISTRATIVE].[SP_SEARCH_ALL_EMPLOYEES]");
            DataTable dt = connection.spShowAll(Sqlstring);

            try
            {
                List<Employee> employeetList = new List<Employee>();
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    Employee employee = new Employee();
                    employee.IdEmployee = Convert.ToInt32(dt.Rows[i]["ID_EMPLOYEE"]);
                    employee.IdCard =  Convert.ToInt32(dt.Rows[i]["ID_CARD"]);
                    employee.FirstName = dt.Rows[i]["FIRST_NAME"].ToString();
                    employee.LastName1 = dt.Rows[i]["LAST_NAME1"].ToString();
                    employee.LastName2 = dt.Rows[i]["LAST_NAME2"].ToString();
                    employee.Phone = dt.Rows[i]["PHONE"].ToString();
                    employee.Email = dt.Rows[i]["EMAIL"].ToString();
                    employee.IdDirection =Convert.ToInt32(dt.Rows[i]["ID_DIRECTION"]);
                    employee.IdPermission = Convert.ToInt32(dt.Rows[i]["ID_PERMISSION"]);
                    employee.IdPosition = Convert.ToInt32(dt.Rows[i]["ID_POSITION"]);
                    employee.Password = dt.Rows[i]["PASSWORD"].ToString();
                    employee.Salary = Convert.ToInt32(dt.Rows[i]["SALARY"]);
                    employee.HiringDate = Convert.ToDateTime(dt.Rows[i]["HIRING_DATE"]);
                    employeetList.Add(employee);
                }
                return employeetList;
            }
            catch (Exception ex)
            {

                Console.WriteLine("EmployeeDataAccess.ShowAll Error: " + ex.Message);
            }
            return null;
        }

        //public DataTable ShowById(int id)
        //{
        //    string parameter = "@IDEMPLOYEE";
        //    string Sqlstring = string.Format("[SCH_ADMINISTRATIVE].[SP_SEARCH_EMPLOYEES]");
        //    DataTable dt = connection.spShowById(Sqlstring, id, parameter);
        //    return dt;
        //}

        public List<Employee> ShowById(int id)
        {
            string parameter = "@IDEMPLOYEE";
            string Sqlstring = string.Format("[SCH_ADMINISTRATIVE].[SP_SEARCH_EMPLOYEES]");
            DataTable dt = connection.spShowById(Sqlstring, id, parameter);
            try
            {
                List<Employee> employeetList = new List<Employee>();
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    Employee employee = new Employee();
                    employee.IdEmployee = Convert.ToInt32(dt.Rows[i]["ID_EMPLOYEE"]);
                    employee.IdCard =  Convert.ToInt32(dt.Rows[i]["ID_CARD"]);
                    employee.FirstName = dt.Rows[i]["FIRST_NAME"].ToString();
                    employee.LastName1 = dt.Rows[i]["LAST_NAME1"].ToString();
                    employee.LastName2 = dt.Rows[i]["LAST_NAME2"].ToString();
                    employee.Phone = dt.Rows[i]["PHONE"].ToString();
                    employee.Email = dt.Rows[i]["EMAIL"].ToString();
                    employee.IdDirection =Convert.ToInt32(dt.Rows[i]["ID_DIRECTION"]);
                    employee.IdPermission = Convert.ToInt32(dt.Rows[i]["ID_PERMISSION"]);
                    employee.IdPosition = Convert.ToInt32(dt.Rows[i]["ID_POSITION"]);
                    employee.Password = dt.Rows[i]["PASSWORD"].ToString();
                    employee.Salary = Convert.ToInt32(dt.Rows[i]["SALARY"]);
                    employee.HiringDate = Convert.ToDateTime(dt.Rows[i]["HIRING_DATE"]);
                    employeetList.Add(employee);
                }
                return employeetList;
            }
            catch (Exception ex)
            {

                Console.WriteLine("EmployeeDataAccess.ShowById Error: " + ex.Message);
            }
            return null;
        }

        public void Update(Employee employee)
        {
            try
            {
                string Sqlstring = string.Format("[SCH_ADMINISTRATIVE].[SP_INSERT/UPDATE_EMPLOYEES]");
                connection.spInsert_UpdateEmployee(Sqlstring, employee);

            }
            catch (Exception ex)
            {

                Console.WriteLine("EmployeeDataAccess.Update Error: " + ex.Message);
            }

        }
    }
}
