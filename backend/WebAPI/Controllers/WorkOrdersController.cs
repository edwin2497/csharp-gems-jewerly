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
    public class WorkOrdersController : ControllerBase
    {
        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            WorkOrderOperations workOrderOperations = new WorkOrderOperations();
            return new JsonResult(workOrderOperations.ShowWorkOrderById(id));
        }

        // GET api/workorder
        public ActionResult Get()
        {
            WorkOrderOperations workOrderOperations = new WorkOrderOperations();
            return new JsonResult(workOrderOperations.ShowAllWorkOrder());
        }

        // POST api/<workorder>
        [HttpPost]
        public JsonResult Post([FromBody] WorkOrders workOrders)
        {
            WorkOrderOperations workOrderOperations = new WorkOrderOperations();
            workOrderOperations.InsertWorkOrder(workOrders);
            return new JsonResult("Added Successfully");
        }

        // DELETE api/workorder/<id>
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            WorkOrderOperations workOrderOperations = new WorkOrderOperations();
            workOrderOperations.DeleteWorkOrder(id);
        }
    }
}
