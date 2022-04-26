using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Sales
    {
        public int IdSale { get; set; }
        public int IdInvoice { get; set; }
        public int IdProductsInv { get; set; }
        public float Price { get; set; }
    }
}
