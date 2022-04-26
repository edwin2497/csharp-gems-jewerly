using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class ProductsShoppingCart
    {
        public int IdProductsSC { get; set; }
        public int IdShoppingCart { get; set; }
        public int IdProductsInv { get; set; }
        public int Quantity { get; set; }
        public float Price { get; set; }
    }
}
