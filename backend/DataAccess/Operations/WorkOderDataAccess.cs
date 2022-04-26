using Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public class WorkOderDataAccess : IOperations<WorkOrders>
    {
        Connection connection = new Connection();

        public void Delete(int id)
        {
            string parameter = "@ID_WORK_ORDER";
            string Sqlstring = string.Format("[SCH_ADMINISTRATIVE].[SP_DELETE_WORK_ORDERS]");
            connection.spDeleteById(Sqlstring, id, parameter);
        }

        public void Insert(WorkOrders workOrder)
        {
            string Sqlstring = string.Format("[SCH_ADMINISTRATIVE].[SP_INSERT/UPDATE_WORK_ORDERS]");
            connection.spInsert_UpdateWorkOrder(Sqlstring, workOrder);
        }

        public List<WorkOrders> ShowAll()
        {
            string Sqlstring = string.Format("[SCH_ADMINISTRATIVE].[SP_SEARCH_ALL_WORK_ORDERS]");
            DataTable dt = connection.spShowAll(Sqlstring);

            List<WorkOrders> workOrdertList = new List<WorkOrders>();
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                WorkOrders workOrder = new WorkOrders();
                workOrder.IdWorkOrder = Convert.ToInt32(dt.Rows[i]["ID_WORK_ORDER"]);
                workOrder.IdEmployee =  Convert.ToInt32(dt.Rows[i]["ID_EMPLOYEE"]);
                workOrder.IdCustomer =  Convert.ToInt32(dt.Rows[i]["ID_CUSTOMER"]);
                workOrder.IdType =  Convert.ToInt32(dt.Rows[i]["ID_TYPE"]);
                workOrder.IdMaterialRequest =  Convert.ToInt32(dt.Rows[i]["ID_MATERIAL_REQUEST"]);
                workOrder.Price =  Convert.ToInt32(dt.Rows[i]["PRICE"]);
                workOrder.Tax =  Convert.ToInt32(dt.Rows[i]["TAX"]);
                workOrder.Total =  Convert.ToInt32(dt.Rows[i]["TOTAL"]);
                workOrder.Details = dt.Rows[i]["DETAILS"].ToString();
                workOrder.IdStatus =Convert.ToInt32(dt.Rows[i]["ID_STATUS"]);
                workOrdertList.Add(workOrder);
            }
            return workOrdertList;
        }


        public List<WorkOrders> ShowById(int id)
        {
            string parameter = "@ID_WORK_ORDER";
            string Sqlstring = string.Format("[SCH_ADMINISTRATIVE].[SP_SEARCH_ALL_WORK_ORDERS]");
            DataTable dt = connection.spShowById(Sqlstring, id, parameter);

            List<WorkOrders> workOrdertList = new List<WorkOrders>();
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                WorkOrders workOrder = new WorkOrders();
                workOrder.IdWorkOrder = Convert.ToInt32(dt.Rows[i]["ID_WORK_ORDER"]);
                workOrder.IdEmployee =  Convert.ToInt32(dt.Rows[i]["ID_EMPLOYEE"]);
                workOrder.IdCustomer =  Convert.ToInt32(dt.Rows[i]["ID_CUSTOMER"]);
                workOrder.IdType =  Convert.ToInt32(dt.Rows[i]["ID_TYPE"]);
                workOrder.IdMaterialRequest =  Convert.ToInt32(dt.Rows[i]["ID_MATERIAL_REQUEST"]);
                workOrder.Price =  Convert.ToInt32(dt.Rows[i]["PRICE"]);
                workOrder.Tax =  Convert.ToInt32(dt.Rows[i]["TAX"]);
                workOrder.Total =  Convert.ToInt32(dt.Rows[i]["TOTAL"]);
                workOrder.Details = dt.Rows[i]["DETAILS"].ToString();
                workOrder.IdStatus =Convert.ToInt32(dt.Rows[i]["ID_STATUS"]);
                workOrdertList.Add(workOrder);
            }
            return workOrdertList;
        }

        public void Update(WorkOrders workOrder)
        {
            string Sqlstring = string.Format("[SCH_ADMINISTRATIVE].[SP_INSERT/UPDATE_WORK_ORDERS]");
            connection.spInsert_UpdateWorkOrder(Sqlstring, workOrder);
        }
    }
}
