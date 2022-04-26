using Business;
using Entities;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DirectionController : Controller
    {
        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            DirectionOperations directionOperations = new DirectionOperations();
            return new JsonResult(directionOperations.ShowDirectionById(id));
        }

        // GET api/direction
        public ActionResult Get()
        {
            DirectionOperations directionOperations = new DirectionOperations();
            return new JsonResult(directionOperations.ShowAllDirection());
        }

        // POST api/<direction>
        [HttpPost]
        public void Post([FromBody] Directions direction)
        {
            DirectionOperations directionOperations = new DirectionOperations();
            directionOperations.InsertDirection(direction);
        }

        // PUT api/direction/<id>
        [HttpPut("{id}")]
        public void Put([FromBody] Directions direction)
        {
            DirectionOperations directionOperations = new DirectionOperations();
            directionOperations.UpdateDirection(direction);
        }


        // DELETE api/direction/<id>
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            DirectionOperations directionOperations = new DirectionOperations();
            directionOperations.DeleteDirection(id);
        }
    }
}
