using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Invoices
    {
        public int IdInvoice { get; set; }
        public int IdEmployee { get; set; }
        public float IdCustomer { get; set; }
        public float Tax { get; set; }
        public byte Shipping { get; set; }
        public float ShippingCost { get; set; }
        public float Total { get; set; }
        public string Details { get; set; }
        public int IdSaleType { get; set; }
    }
}
