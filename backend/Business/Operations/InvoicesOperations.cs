using DataAccess;
using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business
{
    public class InvoicesOperations
    {
        InvoicesDataAccess invoicesDataAccess = new InvoicesDataAccess();

        public List<Invoices> ShowAllInvoices()
        {
            return invoicesDataAccess.ShowAll();
        }

        public List<Invoices> ShowInvoicesById(int id)
        {
            return invoicesDataAccess.ShowById(id);
        }

        public void UpdateInvoices(Invoices invoices)
        {
            invoicesDataAccess.Update(invoices);
        }

        public void InsertInvoices(Invoices invoices)
        {
            invoicesDataAccess.Insert(invoices);
        }

        public void DeleteInvoices(int id)
        {
            invoicesDataAccess.Delete(id);
        }
    }
}
