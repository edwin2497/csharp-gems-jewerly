using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class CreateProducts
    {
        public int IdCreateProduct { get; set; }
        public int IdEmployee { get; set; }
        public int IdProduct { get; set; }
        public float UnitaryCost { get; set; }
        public float Quantity { get; set; }
        public DateTime CreationDate { get; set; }
        public int IdMaterialRequest { get; set; }
        public float SalePrice { get; set; }
        public string Details { get; set; }
        public int IdStatus { get; set; }
    }
}
