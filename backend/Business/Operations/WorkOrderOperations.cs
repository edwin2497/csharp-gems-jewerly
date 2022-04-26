using DataAccess;
using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business
{
    public class WorkOrderOperations
    {
        WorkOderDataAccess workOrderDataAccess = new WorkOderDataAccess();

        public List<WorkOrders> ShowAllWorkOrder()
        {
            return workOrderDataAccess.ShowAll();
        }

        public List<WorkOrders> ShowWorkOrderById(int id)
        {
            return workOrderDataAccess.ShowById(id);
        }

        public void UpdateWorkOrder(WorkOrders workOrders)
        {
            workOrderDataAccess.Update(workOrders);
        }

        public void InsertWorkOrder(WorkOrders workOrders)
        {
            workOrderDataAccess.Insert(workOrders);
        }

        public void DeleteWorkOrder(int id)
        {
            workOrderDataAccess.Delete(id);
        }
    }
}
