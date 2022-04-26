using Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public class InvoicesDataAccess : IOperations<Invoices>
    {
        Connection connection = new Connection();

        public void Delete(int id)
        {
            try
            {
                string parameter = "@IDINVOICE";
                string sp = string.Format("[SCH_FINANCIAL].[SP_DELETE_INVOICES]");
                connection.spDeleteById(sp, id, parameter);
            }
            catch (Exception ex)
            {

                Console.WriteLine("InvoicesDataAccess.Delete Error: " + ex.Message);
            }

        }

        public void Insert(Invoices invoices)
        {
            try
            {
                string sp = string.Format("[SCH_FINANCIAL].[SP_INSERT_INVOICES]");
                connection.spInsertInvoices(sp, invoices);
            }
            catch (Exception ex)
            {

                Console.WriteLine("InvoicesDataAccess.Insert Error: " + ex.Message);
            }
        }

        public List<Invoices> ShowAll()
        {
            string sp = string.Format("[SCH_FINANCIAL].[SP_SEARCH_ALL_INVOICES]");
            DataTable dt = connection.spShowAll(sp);
            try
            {
                if (dt != null)
                {
                    List<Invoices> invoicestList = new List<Invoices>();
                    for (int i = 0; i < dt.Rows.Count; i++)
                    {
                        Invoices invoices = new Invoices();
                        invoices.IdInvoice = Convert.ToInt32(dt.Rows[i]["ID_INVOICE"]);
                        invoices.IdEmployee = Convert.ToInt32(dt.Rows[i]["ID_EMPLOYEE"]);
                        invoices.IdCustomer =  Convert.ToInt32(dt.Rows[i]["ID_CUSTOMER"]);
                        invoices.Tax =  Convert.ToSingle(dt.Rows[i]["TAX"]);
                        invoices.Shipping =  Convert.ToByte(dt.Rows[i]["SHIPPING"]);
                        invoices.ShippingCost =  Convert.ToSingle(dt.Rows[i]["SHIPPING_COST"]);
                        invoices.Total =  Convert.ToSingle(dt.Rows[i]["TOTAL"]);
                        invoices.Details =  dt.Rows[i]["DETAILS"].ToString(); ;
                        invoices.IdSaleType = Convert.ToInt32(dt.Rows[i]["ID_SALE_TYPE"]);
                        invoicestList.Add(invoices);
                    }
                    return invoicestList;
                }

            }
            catch (Exception ex)
            {

                Console.WriteLine("InvoicesDataAccess.ShowAll Error: " + ex.Message);
            }

            return null;


        }


        public List<Invoices> ShowById(int id)
        {
            string parameter = "@IDINVOICES";
            string sp = string.Format("[SCH_FINANCIAL].[SP_SEARCH_INVOICES]");
            DataTable dt = connection.spShowById(sp, id, parameter);
            try
            {
                if (dt != null)
                {
                    List<Invoices> invoicestList = new List<Invoices>();
                    for (int i = 0; i < dt.Rows.Count; i++)
                    {
                        Invoices invoices = new Invoices();
                        invoices.IdInvoice = Convert.ToInt32(dt.Rows[i]["ID_INVOICE"]);
                        invoices.IdEmployee = Convert.ToInt32(dt.Rows[i]["ID_EMPLOYEE"]);
                        invoices.IdCustomer =  Convert.ToInt32(dt.Rows[i]["ID_CUSTOMER"]);
                        invoices.Tax =  Convert.ToSingle(dt.Rows[i]["TAX"]);
                        invoices.Shipping =  Convert.ToByte(dt.Rows[i]["SHIPPING"]);
                        invoices.ShippingCost =  Convert.ToSingle(dt.Rows[i]["SHIPPING_COST"]);
                        invoices.Total =  Convert.ToSingle(dt.Rows[i]["TOTAL"]);
                        invoices.Details =  dt.Rows[i]["DETAILS"].ToString(); ;
                        invoices.IdSaleType = Convert.ToInt32(dt.Rows[i]["ID_SALE_TYPE"]);
                        invoicestList.Add(invoices);
                    }
                    return invoicestList;
                }

            }
            catch (Exception ex)
            {

                Console.WriteLine("InvoicesDataAccess.ShowById Error: " + ex.Message);
            }

            return null;
        }

        public void Update(Invoices invoices)
        {
            try
            {
                string sp = string.Format("[SCH_FINANCIAL].[SP_UPDATE_INVOICES]");
                connection.spUpdateInvoices(sp, invoices);

            }
            catch (Exception ex)
            {

                Console.WriteLine("InvoicesDataAccess.ShowById Error: " + ex.Message);
            }
        }
    }
}
