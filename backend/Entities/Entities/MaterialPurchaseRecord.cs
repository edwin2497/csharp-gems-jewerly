using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class MaterialPurchaseRecord
    {
        public int IdPurchaseRecord { get; set; }
        public DateTime PurchaseDate { get; set; }
        public string Details { get; set; }
        public int IdStatus { get; set; }
    }
}
