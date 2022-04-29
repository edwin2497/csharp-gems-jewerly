using Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public class CustomerDataAccess : IOperations<Customer>
    {
        Connection connection = new Connection();

        public void Delete(int id)
        {
            string parameter = "@ID_CUSTOMER";
            string Sqlstring = string.Format("[SCH_ADMINISTRATIVE].[SP_DELETE_CUSTOMERS]");
            connection.spDeleteById(Sqlstring, id, parameter);
        }

        public void Insert(Customer customer)
        {
            string Sqlstring = string.Format("[SCH_ADMINISTRATIVE].[SP_INSERT/UPDATE_CUSTOMERS]");
            connection.spInsert_UpdateCustomer(Sqlstring, customer);
        }

        public List<Customer> ShowAll()
        {
            string Sqlstring = string.Format("[SCH_ADMINISTRATIVE].[SP_SEARCH_ALL_CUSTOMERS]");
            DataTable dt = connection.spShowAll(Sqlstring);

            List<Customer> customertList = new List<Customer>();
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                Customer customer = new Customer();
                customer.IdCustomer = Convert.ToInt32(dt.Rows[i]["ID_CUSTOMER"]);
                customer.IdCard =  Convert.ToInt32(dt.Rows[i]["ID_CARD"]);
                customer.FirstName = dt.Rows[i]["FIRST_NAME"].ToString();
                customer.LastName1 = dt.Rows[i]["LAST_NAME1"].ToString();
                customer.LastName2 = dt.Rows[i]["LAST_NAME2"].ToString();
                customer.Phone = dt.Rows[i]["PHONE"].ToString();
                customer.Email = dt.Rows[i]["EMAIL"].ToString();
                customer.IdDirection =Convert.ToInt32(dt.Rows[i]["ID_DIRECTION"]);
                customer.Password = dt.Rows[i]["PASSWORD"].ToString();
                customertList.Add(customer);
            }
            return customertList;
        }


        public List<Customer> ShowById(int id)
        {
            string parameter = "@IDCUSTOMER";
            string Sqlstring = string.Format("[SCH_ADMINISTRATIVE].[SP_SEARCH_CUSTOMERS]");
            DataTable dt = connection.spShowById(Sqlstring, id, parameter);

            List<Customer> customertList = new List<Customer>();
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                Customer customer = new Customer();
                customer.IdCustomer = Convert.ToInt32(dt.Rows[i]["ID_CUSTOMER"]);
                customer.IdCard =  Convert.ToInt32(dt.Rows[i]["ID_CARD"]);
                customer.FirstName = dt.Rows[i]["FIRST_NAME"].ToString();
                customer.LastName1 = dt.Rows[i]["LAST_NAME1"].ToString();
                customer.LastName2 = dt.Rows[i]["LAST_NAME2"].ToString();
                customer.Phone = dt.Rows[i]["PHONE"].ToString();
                customer.Email = dt.Rows[i]["EMAIL"].ToString();
                customer.IdDirection =Convert.ToInt32(dt.Rows[i]["ID_DIRECTION"]);
                customer.Password = dt.Rows[i]["PASSWORD"].ToString();
                customertList.Add(customer);
            }
            return customertList;
        }

        public void Update(Customer customer)
        {
            string Sqlstring = string.Format("[SCH_ADMINISTRATIVE].[SP_INSERT/UPDATE_CUSTOMERS]");
            connection.spInsert_UpdateCustomer(Sqlstring, customer);
        }

        string IOperations<Customer>.Delete(int id)
        {
            throw new NotImplementedException();
        }

        string IOperations<Customer>.Insert(Customer item)
        {
            throw new NotImplementedException();
        }

        string IOperations<Customer>.Update(Customer item)
        {
            throw new NotImplementedException();
        }
    }
}

