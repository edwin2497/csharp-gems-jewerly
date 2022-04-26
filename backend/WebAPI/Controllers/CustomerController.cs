using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using Entities;
using Business;
using System;

namespace WebAPI
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        //// GET api/customer/<id>
        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            CustomerOperations customerOperations = new CustomerOperations();
            return new JsonResult(customerOperations.ShowCustomerById(id));
        }

        // GET api/customer
        public ActionResult Get()
        {
            CustomerOperations customerOperations = new CustomerOperations();
            return new JsonResult(customerOperations.ShowAllCustomer());
        }

        // POST api/<customer>
        [HttpPost]
        public void Post([FromBody] Customer customer)
        {
            CustomerOperations customerOperations = new CustomerOperations();
            customerOperations.InsertCustomer(customer);
        }

        // DELETE api/customer/<id>
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            CustomerOperations customerOperations = new CustomerOperations();
            customerOperations.DeleteCustomer(id);
        }
    }
}
