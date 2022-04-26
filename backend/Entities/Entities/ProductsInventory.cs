using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class ProductsInventory
    {
        public int IdProductsInv { get; set; }
        public float Quantity { get; set; }
        public float UnitaryCost { get; set; }
        public DateTime EntryDate { get; set; }
        public float SalePrice { get; set; }
        public string Details { get; set; }
    }
}
