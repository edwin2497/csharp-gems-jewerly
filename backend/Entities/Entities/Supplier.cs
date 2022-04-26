using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Supplier
    {
        public int IdSupplier { get; set; }
        public int IdCard { get; set; }
        public string FirstName { get; set; }
        public string LastName1 { get; set; }
        public string LastName2 { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public int IdDirection { get; set; }
        public int LegalIdentity { get; set; }
        public string Company { get; set; }
        public string ContactDetails { get; set; }
    }
}
