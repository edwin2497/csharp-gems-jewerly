using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class SupplierMaterials
    {
        public int IdSupplierMaterial { get; set; }
        public int IdSupplier { get; set; }
        public string Name { get; set; }
        public string Details { get; set; }
    }
}
