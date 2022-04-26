using Business;
using Entities;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InvoicesController : Controller
    {
        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            InvoicesOperations invoicesOperations = new InvoicesOperations();
            return new JsonResult(invoicesOperations.ShowInvoicesById(id));
        }

        // GET api/invoices
        public ActionResult Get()
        {
            InvoicesOperations invoicesOperations = new InvoicesOperations();
            return new JsonResult(invoicesOperations.ShowAllInvoices());
        }

        // POST api/<invoices>
        [HttpPost]
        public void Post([FromBody] Invoices invoices)
        {
            InvoicesOperations invoicesOperations = new InvoicesOperations();
            invoicesOperations.InsertInvoices(invoices);
        }

        // PUT api/invoices/<id>
        [HttpPut("{id}")]
        public void Put( [FromBody] Invoices invoices)
        {
            InvoicesOperations invoicesOperations = new InvoicesOperations();
            invoicesOperations.UpdateInvoices(invoices);
        }

        // DELETE api/invoices/<id>
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            InvoicesOperations invoicesOperations = new InvoicesOperations();
            invoicesOperations.DeleteInvoices(id);
        }

    }
}
