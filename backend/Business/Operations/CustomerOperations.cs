using DataAccess;
using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business
{
    public class CustomerOperations
    {
        CustomerDataAccess customerDataAccess = new CustomerDataAccess();

        public List<Customer> ShowAllCustomer()
        {
            return customerDataAccess.ShowAll();
        }

        public List<Customer> ShowCustomerById(int id)
        {
           return customerDataAccess.ShowById(id);
        }

        public void UpdateCustomer(Customer customer)
        {
            customerDataAccess.Update(customer);
        }

        public void InsertCustomer(Customer customer)
        {
            customerDataAccess.Insert(customer);
        }

        public void DeleteCustomer(int id)
        {
            customerDataAccess.Delete(id);
        }
    }
}
