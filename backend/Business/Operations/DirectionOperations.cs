using DataAccess;
using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business
{
    public class DirectionOperations
    {
        DirectionDataAccess directionDataAccess = new DirectionDataAccess();

        public List<Directions> ShowAllDirection()
        {
            return directionDataAccess.ShowAll();
        }

        public List<Directions> ShowDirectionById(int id)
        {
            return directionDataAccess.ShowById(id);
        }

        public void UpdateDirection(Directions direction)
        {
            directionDataAccess.Update(direction);
        }

        public void InsertDirection(Directions direction)
        {
            directionDataAccess.Insert(direction);
        }

        public void DeleteDirection(int id)
        {
            directionDataAccess.Delete(id);
        }
    }
}
