using Business;
using Entities;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsMPRController : Controller
    {
        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            ProductsMPROperations productsMPROperations = new ProductsMPROperations();
            return new JsonResult(productsMPROperations.ShowById(id));
        }

        // GET api/productsmpr
        public ActionResult Get()
        {
            ProductsMPROperations productsMPROperations = new ProductsMPROperations();
            return new JsonResult(productsMPROperations.ShowAll());
        }

        // POST api/<productsmpr>
        [HttpPost]
        public void Post([FromBody] ProductsMPR productsMPR)
        {
            ProductsMPROperations productsMPROperations = new ProductsMPROperations();
            productsMPROperations.Insert(productsMPR);
        }

        //PUT api/<productsmpr>
        [HttpPut("{id}")]
        public void Put([FromBody] ProductsMPR productsMPR)
        {
            ProductsMPROperations productsMPROperations = new ProductsMPROperations();
            productsMPROperations.Update(productsMPR);
        }

        // DELETE api/productsmpr/<id>
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            ProductsMPROperations productsMPROperations = new ProductsMPROperations();
            productsMPROperations.Delete(id);
        }
    }
}
