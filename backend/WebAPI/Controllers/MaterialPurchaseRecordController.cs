using Business;
using Entities;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MaterialPurchaseRecordController : Controller
    {
        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            MaterialPurchaseRecordOperations materialPurchaseRecordOperations = new MaterialPurchaseRecordOperations();
            return new JsonResult(materialPurchaseRecordOperations.ShowById(id));
        }
        
        // GET api/materialPurchaserecord
        public ActionResult Get()
        {
            MaterialPurchaseRecordOperations materialPurchaseRecordOperations = new MaterialPurchaseRecordOperations();
            return new JsonResult(materialPurchaseRecordOperations.ShowAll());
        }

        // POST api/<materialPurchaserecord>
        [HttpPost]
        public void Post([FromBody] MaterialPurchaseRecord materialPurchaseRecord)
        {
            MaterialPurchaseRecordOperations materialPurchaseRecordOperations = new MaterialPurchaseRecordOperations();
            materialPurchaseRecordOperations.Insert(materialPurchaseRecord);
        }

        // PUT api/materialPurchaserecord/<id>
        [HttpPut("{id}")]
        public void Put([FromBody] MaterialPurchaseRecord materialPurchaseRecord)
        {
            MaterialPurchaseRecordOperations materialPurchaseRecordOperations = new MaterialPurchaseRecordOperations();
            materialPurchaseRecordOperations.Update(materialPurchaseRecord);
        }

        // DELETE api/materialPurchaserecord/<id>
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            MaterialPurchaseRecordOperations materialPurchaseRecordOperations = new MaterialPurchaseRecordOperations();
            materialPurchaseRecordOperations.Delete(id);
        }
    }
}
