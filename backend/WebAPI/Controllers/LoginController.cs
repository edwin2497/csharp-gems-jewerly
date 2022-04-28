using Business;
using Entities;
using Microsoft.AspNetCore.Mvc;
using System;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : Controller
    {
        //[HttpGet("{username}/{password}")]
        //public JsonResult Get(int username, string password)
        [HttpGet()]
        public JsonResult Get(int username, string password)
        {
            LoginOperations loginOperations = new LoginOperations();
            //Employee employee = loginOperations.GetEmployeeByUsername(username);
            Employee employee = loginOperations.GetEmployeeByUsername(username);
            Customer customer = loginOperations.GetCustomerByUsername(username);

            string type =  loginOperations.GetUserType(username);


            if (type.Equals("Employee"))
            {
                if (password.Equals(employee.Password))
                {
                    return new JsonResult(employee);
                }
                return new JsonResult("Incorrect password");
            }
            else if (type.Equals("Customer"))
            {
                if (password.Equals(customer.Password))
                {
                    return new JsonResult(customer);
                }
                return new JsonResult("Incorrect password");

            }
            return new JsonResult(type);


            //    if (employee != null)
            //    {
            //        if (password.Equals(employee.Password))
            //        {

            //            return new JsonResult(employee);
            //        }

            //        return new JsonResult("Incorrect password");

            //    }
            //    return new JsonResult("User doesn't exist");


        }




        [HttpGet("{username}")]
        public JsonResult Get(int username)
        {
            LoginOperations loginOperations = new LoginOperations();

            return new JsonResult(loginOperations.SearchEmployee(username));
        }
    }
}
