using Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public class MaterialPurchaseRecordDataAccess : IOperations<MaterialPurchaseRecord>
    {
        Connection connection = new Connection();

        public void Delete(int id)
        {
            string parameter = "@IDPURCHASERECORD";
            string sp = string.Format("[SCH_FINANCIAL].[SCH_FINANCIAL].[SP_DELETE_MATERIAL_PURCHASE_RECORDS]");
            connection.spDeleteById(sp, id, parameter);
        }

        public void Insert(MaterialPurchaseRecord materialPurchaseRecord)
        {
            string sp = string.Format("[SCH_FINANCIAL].[SP_INSERT_MATERIAL_PURCHASE_RECORDS]");
            connection.spInsertMaterialPurchaseRecord(sp, materialPurchaseRecord);
        }

        public List<MaterialPurchaseRecord> ShowAll()
        {
            string sp = string.Format("[SCH_FINANCIAL].[SP_SEARCH_ALL_MATERIAL_PURCHASE_RECORDS]");
            DataTable dt = connection.spShowAll(sp);

            List<MaterialPurchaseRecord> materialPurchaseRecordList = new List<MaterialPurchaseRecord>();
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                MaterialPurchaseRecord materialPurchaseRecord = new MaterialPurchaseRecord();
                materialPurchaseRecord.IdPurchaseRecord = Convert.ToInt32(dt.Rows[i]["ID_PURCHASE_RECORD"]);
                materialPurchaseRecord.PurchaseDate = Convert.ToDateTime(dt.Rows[i]["PURCHASE_DATE"]);
                materialPurchaseRecord.Details =  dt.Rows[i]["DETAILS"].ToString();
                materialPurchaseRecord.IdStatus =  Convert.ToInt32(dt.Rows[i]["ID_STATUS"]);
                materialPurchaseRecordList.Add(materialPurchaseRecord);
            }
            return materialPurchaseRecordList;
        }


        public List<MaterialPurchaseRecord> ShowById(int id)
        {
            string parameter = "@IDPURCHASERECORD";
            string sp = string.Format("[SCH_FINANCIAL].[SP_SEARCH_MATERIAL_PURCHASE_RECORDS]");
            DataTable dt = connection.spShowById(sp, id, parameter);

            List<MaterialPurchaseRecord> materialPurchaseRecordList = new List<MaterialPurchaseRecord>();
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                MaterialPurchaseRecord materialPurchaseRecord = new MaterialPurchaseRecord();
                materialPurchaseRecord.IdPurchaseRecord = Convert.ToInt32(dt.Rows[i]["ID_PURCHASE_RECORD"]);
                materialPurchaseRecord.PurchaseDate = Convert.ToDateTime(dt.Rows[i]["PURCHASE_DATE"]);
                materialPurchaseRecord.Details =  dt.Rows[i]["DETAILS"].ToString();
                materialPurchaseRecord.IdStatus =  Convert.ToInt32(dt.Rows[i]["ID_STATUS"]);
                materialPurchaseRecordList.Add(materialPurchaseRecord);
            }
            return materialPurchaseRecordList;
        }

        public void Update(MaterialPurchaseRecord materialPurchaseRecord)
        {
            string sp = string.Format("[SCH_FINANCIAL].[SP_UPDATE_MATERIAL_PURCHASE_RECORDS]");
            connection.spUpdateMaterialPurchaseRecord(sp, materialPurchaseRecord);
        }
    }
}
