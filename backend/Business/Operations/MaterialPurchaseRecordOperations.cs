using DataAccess;
using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business
{
    public class MaterialPurchaseRecordOperations
    {
        MaterialPurchaseRecordDataAccess materialPurchaseRecordDataAccess = new MaterialPurchaseRecordDataAccess();

        public List<MaterialPurchaseRecord> ShowAll()
        {
            return materialPurchaseRecordDataAccess.ShowAll();
        }

        public List<MaterialPurchaseRecord> ShowById(int id)
        {
            return materialPurchaseRecordDataAccess.ShowById(id);
        }

        public void Update(MaterialPurchaseRecord materialPurchaseRecord)
        {
            materialPurchaseRecordDataAccess.Update(materialPurchaseRecord);
        }

        public void Insert(MaterialPurchaseRecord materialPurchaseRecord)
        {
            materialPurchaseRecordDataAccess.Insert(materialPurchaseRecord);
        }

        public void Delete(int id)
        {
            materialPurchaseRecordDataAccess.Delete(id);
        }
    }
}
