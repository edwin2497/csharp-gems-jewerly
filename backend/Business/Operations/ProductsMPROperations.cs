using DataAccess;
using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business
{
    public class ProductsMPROperations
    {
        ProductsMPRDataAccess productsMPRDataAccess = new ProductsMPRDataAccess();

        public List<ProductsMPR> ShowAll()
        {
            return productsMPRDataAccess.ShowAll();
        }

        public List<ProductsMPR> ShowById(int id)
        {
            return productsMPRDataAccess.ShowById(id);
        }

        public void Update(ProductsMPR productsMPR)
        {
            productsMPRDataAccess.Update(productsMPR);
        }

        public void Insert(ProductsMPR productsMPR)
        {
            productsMPRDataAccess.Insert(productsMPR);
        }

        public void Delete(int id)
        {
            productsMPRDataAccess.Delete(id);
        }
    }
}
