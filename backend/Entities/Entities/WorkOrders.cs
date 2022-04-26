using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class WorkOrders
    {
        public int IdWorkOrder { get; set; }
        public int IdEmployee { get; set; }
        public int IdCustomer { get; set; }
        public int IdType { get; set; }
        public int IdMaterialRequest { get; set; }
        public int Price { get; set; }
        public int Tax { get; set; }
        public int Total { get; set; }
        public string Details { get; set; }
        public int IdStatus { get; set; }
    }
}
