using Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public class ProductsMPRDataAccess
    {
        Connection connection = new Connection();

        public void Delete(int id)
        {
            try
            {
                string parameter = "ID_PRODUCT_MPR";
                string sp = string.Format("[SCH_FINANCIAL].[SP_DELETE_PRODUCTS_MPR]");
                connection.spDeleteById(sp, id, parameter);
            }
            catch (Exception ex)
            {

                Console.WriteLine("ProductsMPRDataAccess.Delete Error: " + ex.Message);
            }
        }

        public void Insert(ProductsMPR productsMPR)
        {
            try
            {
                string sp = string.Format("[SCH_FINANCIAL].[SP_INSERT/UPDATE_PRODUCTS_MPR]");
                connection.spInsertProductsMPR(sp, productsMPR);
            }
            catch (Exception ex)
            {

                Console.WriteLine("ProductsMPRDataAccess.Insert Error: " + ex.Message);
            }
        }

        public List<ProductsMPR> ShowAll()
        {
            string sp = string.Format("[SCH_FINANCIAL].[SP_SEARCH_ALL_PRODUCTS_MPR]");
            DataTable dt = connection.spShowAll(sp);

            try
            {
                List<ProductsMPR> productsMPRtList = new List<ProductsMPR>();
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    ProductsMPR productsMPR = new ProductsMPR();
                    productsMPR.IdProductMPR = Convert.ToInt32(dt.Rows[i]["ID_PRODUCT_MPR"]);
                    productsMPR.IdPurchaseRecord =  Convert.ToInt32(dt.Rows[i]["ID_PURCHASE_RECORD"]);
                    productsMPR.IdSupplierMaterial = Convert.ToInt32(dt.Rows[i]["ID_SUPPLIER_MATERIA"]);
                    productsMPR.Quantity = Convert.ToSingle(dt.Rows[i]["QUANTITY"]);
                    productsMPR.UnitaryCost = Convert.ToSingle(dt.Rows[i]["UNITARY_COST"]);
                    productsMPRtList.Add(productsMPR);
                }
                return productsMPRtList;
            }
            catch (Exception ex)
            {

                Console.WriteLine("ProductsMPRDataAccess.ShowAll Error: " + ex.Message);
            }
            return null;
        }

        public List<ProductsMPR> ShowById(int id)
        {
            string parameter = "@ID_PRODUCT_MPR";
            string sp = string.Format("[SCH_FINANCIAL].[SP_SEARCH_PRODUCTS_MPR]");
            DataTable dt = connection.spShowById(sp, id, parameter);
            try
            {
                List<ProductsMPR> productsMPRtList = new List<ProductsMPR>();
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    ProductsMPR productsMPR = new ProductsMPR();
                    productsMPR.IdProductMPR = Convert.ToInt32(dt.Rows[i]["ID_PRODUCT_MPR"]);
                    productsMPR.IdPurchaseRecord =  Convert.ToInt32(dt.Rows[i]["ID_PURCHASE_RECORD"]);
                    productsMPR.IdSupplierMaterial = Convert.ToInt32(dt.Rows[i]["ID_SUPPLIER_MATERIA"]);
                    productsMPR.Quantity = Convert.ToSingle(dt.Rows[i]["QUANTITY"]);
                    productsMPR.UnitaryCost = Convert.ToSingle(dt.Rows[i]["UNITARY_COST"]);
                    productsMPRtList.Add(productsMPR);
                }
                return productsMPRtList;
            }
            catch (Exception ex)
            {

                Console.WriteLine("ProductsMPRDataAccess.ShowById Error: " + ex.Message);
            }
            return null;
        }

        public void Update(ProductsMPR productsMPR)
        {
            try
            {
                string sp = string.Format("[SCH_FINANCIAL].[SP_INSERT/UPDATE_PRODUCTS_MPR]");
                connection.spUpdateProductsMPR(sp, productsMPR);

            }
            catch (Exception ex)
            {

                Console.WriteLine("ProductsMPRDataAccess.Update Error: " + ex.Message);
            }

        }
    }
}
