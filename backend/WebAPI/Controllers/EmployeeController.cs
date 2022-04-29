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
    public class EmployeeController : ControllerBase
    {

        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            EmployeeOperations employeeOperations = new EmployeeOperations();
            return new JsonResult(employeeOperations.ShowEmployeeById(id));
        }

        // GET api/employee
        public ActionResult Get()
        {
            EmployeeOperations employeeOperations = new EmployeeOperations();
            return new JsonResult(employeeOperations.ShowAllEmployee());
        }

        // POST api/<employee>
        [HttpPost]
        public JsonResult Post([FromBody] Employee employee)
        {
            EmployeeOperations employeeOperations = new EmployeeOperations();
            return new JsonResult(employeeOperations.InsertEmployee(employee));
        }

        // PUT api/employee/<id>
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {

        }


        // DELETE api/employee/<id>
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            EmployeeOperations employeeOperations = new EmployeeOperations();
            return new JsonResult(employeeOperations.DeleteEmployee(id));
        }
    }
}
