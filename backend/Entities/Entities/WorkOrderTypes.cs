using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class WorkOrderTypes
    {
        public int IdType { get; set; }
        public int Name { get; set; }
        public string EstimatedTime { get; set; }
        public string LaborCost { get; set; }
        public string Description { get; set; }
    }
}
