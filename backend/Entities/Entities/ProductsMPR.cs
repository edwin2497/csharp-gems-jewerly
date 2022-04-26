using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public  class ProductsMPR
    {
        public int IdProductMPR { get; set; }
        public int IdPurchaseRecord { get; set; }
        public int IdSupplierMaterial { get; set; }
        public float Quantity { get; set; }
        public float UnitaryCost { get; set; }
    }
}
