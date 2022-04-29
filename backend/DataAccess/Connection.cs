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
    public class Connection
    {
        private string connectionString = @"Data Source= EDWIN-PC;Initial Catalog= BD_GemasJoyeria; User Id= AdminTest ; Password = 123";


        public DataTable spShowAll(string sp)
        {
            DataTable table = new DataTable();
            SqlDataReader myReader;
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();

                    using (SqlCommand myCommand = new SqlCommand(sp, connection))
                    {

                        myCommand.CommandType = CommandType.StoredProcedure;
                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);
                        myCommand.ExecuteNonQuery();
                        myReader.Close();
                        connection.Close();
                    }
                }
                return table;
            }
            catch (Exception ex)
            {
                Console.WriteLine("Connection.spShowAll Error: " + ex.Message);
            }
            return null;
        }

        public DataTable spShowById(string sp, int id, string parameter)
        {
            DataTable table = new DataTable();
            SqlDataReader myReader;
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand myCommand = new SqlCommand(sp, connection))
                    {

                        myCommand.CommandType = CommandType.StoredProcedure;
                        myCommand.Parameters.AddWithValue(parameter, SqlDbType.Int).Value = id;
                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);
                        myCommand.ExecuteNonQuery();
                        myReader.Close();
                        connection.Close();
                    }
                }
                return table;

            }
            catch (Exception ex)
            {
                Console.WriteLine("Connection.spShowById Error: " + ex.Message);
            }
            return null;
        }

        public string spDeleteById(string sp, int id, string parameter)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand myCommand = new SqlCommand(sp, connection))
                    {
                        myCommand.CommandType = CommandType.StoredProcedure;
                        myCommand.Parameters.AddWithValue(parameter, SqlDbType.Int).Value = id;
                        myCommand.ExecuteNonQuery();
                        connection.Close();
                    }
                    return "Deleted Successfully";
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Connection.spDeleteById Error: " + ex.Message);
                return "Deleted Unsuccessfully";
            }
        }


        #region Employee
        public string spInsertEmployee(string sp, Employee employee)
        {
            try
            {
                int result;

                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand myCommand = new SqlCommand(sp, connection))
                    {
                        myCommand.CommandType = CommandType.StoredProcedure;
                        myCommand.Parameters.AddWithValue("@IDCARD", SqlDbType.Int).Value = employee.IdCard;
                        myCommand.Parameters.AddWithValue("@FIRSTNAME", SqlDbType.VarChar).Value = employee.FirstName;
                        myCommand.Parameters.AddWithValue("@LASTNAME1", SqlDbType.VarChar).Value = employee.LastName1;
                        myCommand.Parameters.AddWithValue("@LASTNAME2", SqlDbType.VarChar).Value = employee.LastName2;
                        myCommand.Parameters.AddWithValue("@EMAIL", SqlDbType.VarChar).Value = employee.Email;
                        myCommand.Parameters.AddWithValue("@PHONE", SqlDbType.VarChar).Value = employee.Phone;
                        myCommand.Parameters.AddWithValue("@DIRECTION", SqlDbType.Int).Value = employee.IdDirection;
                        myCommand.Parameters.AddWithValue("@PERMISSION", SqlDbType.Int).Value = employee.IdPermission;
                        myCommand.Parameters.AddWithValue("@POSITION", SqlDbType.Int).Value = employee.IdPosition;
                        myCommand.Parameters.AddWithValue("@PASSWORD", SqlDbType.VarChar).Value = employee.Password;
                        myCommand.Parameters.AddWithValue("@SALARY", SqlDbType.Money).Value = employee.Salary;
                        myCommand.Parameters.AddWithValue("@HIRINGDATE", SqlDbType.Date).Value = employee.HiringDate;
                        result = myCommand.ExecuteNonQuery();
                        Console.WriteLine(result);
                        connection.Close();
                    }

                    return "Added/Updated Successfully";

                }

            }
            catch (Exception ex)
            {
                Console.WriteLine("Connection.spInsert_UpdateEmployee Error: " + ex.Message);
                return "Added/Updated Unsuccessfully";
            }
        }


        public string spUpdateEmployee(string sp, Employee employee)
        {
            try
            {
                int result;

                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand myCommand = new SqlCommand(sp, connection))
                    {
                        myCommand.CommandType = CommandType.StoredProcedure;
                        myCommand.Parameters.AddWithValue("@IDCARD", SqlDbType.Int).Value = employee.IdCard;
                        myCommand.Parameters.AddWithValue("@FIRSTNAME", SqlDbType.VarChar).Value = employee.FirstName;
                        myCommand.Parameters.AddWithValue("@LASTNAME1", SqlDbType.VarChar).Value = employee.LastName1;
                        myCommand.Parameters.AddWithValue("@LASTNAME2", SqlDbType.VarChar).Value = employee.LastName2;
                        myCommand.Parameters.AddWithValue("@EMAIL", SqlDbType.VarChar).Value = employee.Email;
                        myCommand.Parameters.AddWithValue("@PHONE", SqlDbType.VarChar).Value = employee.Phone;
                        myCommand.Parameters.AddWithValue("@DIRECTION", SqlDbType.Int).Value = employee.IdDirection;
                        myCommand.Parameters.AddWithValue("@PERMISSION", SqlDbType.Int).Value = employee.IdPermission;
                        myCommand.Parameters.AddWithValue("@POSITION", SqlDbType.Int).Value = employee.IdPosition;
                        myCommand.Parameters.AddWithValue("@PASSWORD", SqlDbType.VarChar).Value = employee.Password;
                        myCommand.Parameters.AddWithValue("@SALARY", SqlDbType.Money).Value = employee.Salary;
                        myCommand.Parameters.AddWithValue("@HIRINGDATE", SqlDbType.Date).Value = employee.HiringDate;
                        result = myCommand.ExecuteNonQuery();
                        Console.WriteLine(result);
                        connection.Close();
                    }

                    return "Employee updated succesfully";

                }

            }
            catch (Exception ex)
            {
                Console.WriteLine("Connection.spInsert_UpdateEmployee Error: " + ex.Message);
                return "Connection.spInsert_UpdateEmployee Error: " + ex.Message;
            }
        }
        #endregion

        #region Customer
        public void spInsert_UpdateCustomer(string sp, Customer customer)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand myCommand = new SqlCommand(sp, connection))
                    {
                        myCommand.CommandType = CommandType.StoredProcedure;
                        myCommand.Parameters.AddWithValue("@IDCARD", SqlDbType.Int).Value = customer.IdCard;
                        myCommand.Parameters.AddWithValue("@FIRSTNAME", SqlDbType.VarChar).Value = customer.FirstName;
                        myCommand.Parameters.AddWithValue("@LASTNAME1", SqlDbType.VarChar).Value = customer.LastName1;
                        myCommand.Parameters.AddWithValue("@LASTNAME2", SqlDbType.VarChar).Value = customer.LastName2;
                        myCommand.Parameters.AddWithValue("@EMAIL", SqlDbType.VarChar).Value = customer.Email;
                        myCommand.Parameters.AddWithValue("@PHONE", SqlDbType.VarChar).Value = customer.Phone;
                        myCommand.Parameters.AddWithValue("@DIRECTION", SqlDbType.Int).Value = customer.IdDirection;
                        //myCommand.Parameters.AddWithValue("@PASSWORD", SqlDbType.VarChar).Value = customer.Password;
                        myCommand.ExecuteNonQuery();
                        connection.Close();
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Connection.spInsert_UpdateCustomer Error: " + ex.Message);
            }
        }
        #endregion

        #region Supplier
        #endregion

        #region WorkOrder
        public void spInsert_UpdateWorkOrder(string sp, WorkOrders workOrder)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand myCommand = new SqlCommand(sp, connection))
                    {
                        myCommand.CommandType = CommandType.StoredProcedure;
                        myCommand.Parameters.AddWithValue("@ID_WORK_ORDER", SqlDbType.Int).Value = workOrder.IdWorkOrder;
                        myCommand.Parameters.AddWithValue("@ID_EMPLOYEE", SqlDbType.Int).Value = workOrder.IdEmployee;
                        myCommand.Parameters.AddWithValue("@ID_CUSTOMER", SqlDbType.Int).Value = workOrder.IdCustomer;
                        myCommand.Parameters.AddWithValue("@ID_TYPE", SqlDbType.Int).Value = workOrder.IdType;
                        myCommand.Parameters.AddWithValue("@ID_MATERIAL_REQUEST", SqlDbType.Int).Value = workOrder.IdMaterialRequest;
                        myCommand.Parameters.AddWithValue("@PRICE", SqlDbType.Int).Value = workOrder.Price;
                        myCommand.Parameters.AddWithValue("@TAX", SqlDbType.Int).Value = workOrder.Tax;
                        myCommand.Parameters.AddWithValue("@TOTAL", SqlDbType.Int).Value = workOrder.Total;
                        myCommand.Parameters.AddWithValue("@DETAILS", SqlDbType.VarChar).Value = workOrder.Details;
                        myCommand.Parameters.AddWithValue("@ID_STATUS", SqlDbType.Int).Value = workOrder.IdStatus;
                        myCommand.ExecuteNonQuery();
                        connection.Close();
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Connection.spInsert_UpdateWorkOrder Error: " + ex.Message);
            }
        }
        #endregion

        #region Direction
        public void spInsertDirection(string sp, Directions direction)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand myCommand = new SqlCommand(sp, connection))
                    {
                        myCommand.CommandType = CommandType.StoredProcedure;
                        //myCommand.Parameters.AddWithValue("@IDDIRECTION", SqlDbType.Int).Value = direction.IdDirection;
                        myCommand.Parameters.AddWithValue("@PROVINCE", SqlDbType.VarChar).Value = direction.Province;
                        myCommand.Parameters.AddWithValue("@CANTON", SqlDbType.VarChar).Value = direction.Canton;
                        myCommand.Parameters.AddWithValue("@DISTRICT", SqlDbType.VarChar).Value = direction.District;
                        myCommand.Parameters.AddWithValue("@DESCRIPTION", SqlDbType.VarChar).Value = direction.Details;
                        myCommand.ExecuteNonQuery();
                        connection.Close();
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Connection.spInsertDirection Error: " + ex.Message);
            }
        }


        public void spUpdateDirection(string sp, Directions direction)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand myCommand = new SqlCommand(sp, connection))
                    {
                        myCommand.CommandType = CommandType.StoredProcedure;
                        //myCommand.Parameters.AddWithValue("@IDDIRECTION", SqlDbType.Int).Value = direction.IdDirection;
                        myCommand.Parameters.AddWithValue("@PROVINCE", SqlDbType.VarChar).Value = direction.Province;
                        myCommand.Parameters.AddWithValue("@CANTON", SqlDbType.VarChar).Value = direction.Canton;
                        myCommand.Parameters.AddWithValue("@DISTRICT", SqlDbType.VarChar).Value = direction.District;
                        myCommand.Parameters.AddWithValue("@DESCRIPTION", SqlDbType.VarChar).Value = direction.Details;
                        myCommand.ExecuteNonQuery();
                        connection.Close();
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Connection.spUpdateDirection Error: " + ex.Message);
            }
        }
        #endregion

        #region Login
        public SqlDataReader LoginQuery(string sp, int username, string parameter)
        {
            SqlCommand myCommand;
            SqlConnection connection = new SqlConnection(connectionString);

            try
            {
                connection.Open();
                myCommand = new SqlCommand(sp, connection);
                myCommand.CommandType = CommandType.StoredProcedure;
                myCommand.Parameters.AddWithValue(parameter, SqlDbType.Int).Value = username;
                SqlDataReader result = myCommand.ExecuteReader();
                myCommand.Dispose();

                if (result.HasRows)
                {
                    return result;
                }
            }
            catch (Exception ex)
            {

                Console.WriteLine("Coneccion.LoginQuery Error: " + ex.Message);
            }

            return null;
        }

        #endregion

        #region Invoices

        public void spInsertInvoices(string sp, Invoices invoices)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand myCommand = new SqlCommand(sp, connection))
                    {
                        myCommand.CommandType = CommandType.StoredProcedure;
                        myCommand.Parameters.AddWithValue("@IDEMPLOYEE", SqlDbType.Int).Value = invoices.IdEmployee;
                        myCommand.Parameters.AddWithValue("@IDCUSTOMER", SqlDbType.Int).Value = invoices.IdCustomer;
                        myCommand.Parameters.AddWithValue("@TAX", SqlDbType.Float).Value = invoices.Tax;
                        myCommand.Parameters.AddWithValue("@SHIPPING", SqlDbType.Bit).Value = invoices.Shipping;
                        myCommand.Parameters.AddWithValue("@SHIPPINGCOST", SqlDbType.Float).Value = invoices.ShippingCost;
                        myCommand.Parameters.AddWithValue("@TOTAL", SqlDbType.Float).Value = invoices.Total;
                        myCommand.Parameters.AddWithValue("@DETAILS", SqlDbType.VarChar).Value = invoices.Details;
                        myCommand.Parameters.AddWithValue("@SALE_TYPE	", SqlDbType.Int).Value = invoices.IdSaleType;
                        myCommand.ExecuteNonQuery();
                        connection.Close();
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Coneccion.spInsertInvoices Error: " + ex.Message);
            }
        }

        public void spUpdateInvoices(string sp, Invoices invoices)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand myCommand = new SqlCommand(sp, connection))
                    {
                        myCommand.CommandType = CommandType.StoredProcedure;
                        myCommand.Parameters.AddWithValue("@IDINVOICE", SqlDbType.Int).Value = invoices.IdInvoice;
                        myCommand.Parameters.AddWithValue("@IDEMPLOYEE", SqlDbType.Int).Value = invoices.IdEmployee;
                        myCommand.Parameters.AddWithValue("@IDCUSTOMER", SqlDbType.Int).Value = invoices.IdCustomer;
                        myCommand.Parameters.AddWithValue("@TAX", SqlDbType.Float).Value = invoices.Tax;
                        myCommand.Parameters.AddWithValue("@SHIPPING", SqlDbType.Bit).Value = invoices.Shipping;
                        myCommand.Parameters.AddWithValue("@SHIPPINGCOST", SqlDbType.Float).Value = invoices.ShippingCost;
                        myCommand.Parameters.AddWithValue("@TOTAL", SqlDbType.Float).Value = invoices.Total;
                        myCommand.Parameters.AddWithValue("@DETAILS", SqlDbType.VarChar).Value = invoices.Details;
                        myCommand.Parameters.AddWithValue("@SALE_TYPE	", SqlDbType.Int).Value = invoices.IdSaleType;
                        myCommand.ExecuteNonQuery();
                        connection.Close();
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Coneccion.spUpdateInvoices Error: " + ex.Message);
            }
        }
        #endregion

        #region MaterialPurchaseRecord

        public void spInsertMaterialPurchaseRecord(string sp, MaterialPurchaseRecord materialPurchaseRecord)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand myCommand = new SqlCommand(sp, connection))
                    {
                        myCommand.CommandType = CommandType.StoredProcedure;
                        //myCommand.Parameters.AddWithValue("@IDPURCHASERECORD", SqlDbType.Int).Value = materialPurchaseRecord.IdPurchaseRecord;
                        myCommand.Parameters.AddWithValue("@PURCHASEDATE", SqlDbType.Date).Value = materialPurchaseRecord.PurchaseDate;
                        myCommand.Parameters.AddWithValue("@DETAILS", SqlDbType.VarChar).Value = materialPurchaseRecord.Details;
                        myCommand.Parameters.AddWithValue("@STATUS", SqlDbType.Int).Value = materialPurchaseRecord.IdStatus;
                        myCommand.ExecuteNonQuery();
                        connection.Close();
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Coneccion.spInsertMaterialPurchaseRecord Error: " + ex.Message);
            }
        }

        public void spUpdateMaterialPurchaseRecord(string sp, MaterialPurchaseRecord materialPurchaseRecord)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand myCommand = new SqlCommand(sp, connection))
                    {
                        myCommand.CommandType = CommandType.StoredProcedure;
                        myCommand.Parameters.AddWithValue("@IDPURCHASERECORD", SqlDbType.Int).Value = materialPurchaseRecord.IdPurchaseRecord;
                        myCommand.Parameters.AddWithValue("@PURCHASEDATE", SqlDbType.Date).Value = materialPurchaseRecord.PurchaseDate;
                        myCommand.Parameters.AddWithValue("@DETAILS", SqlDbType.VarChar).Value = materialPurchaseRecord.Details;
                        myCommand.Parameters.AddWithValue("@STATUS", SqlDbType.Int).Value = materialPurchaseRecord.IdStatus;
                        myCommand.ExecuteNonQuery();
                        connection.Close();
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Coneccion.spUpdateMaterialPurchaseRecord Error: " + ex.Message);
            }
        }
        #endregion

        #region ProductsMPR

        public void spInsertProductsMPR(string sp, ProductsMPR productsMPR)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand myCommand = new SqlCommand(sp, connection))
                    {
                        myCommand.CommandType = CommandType.StoredProcedure;
                        myCommand.Parameters.AddWithValue("@ID_PRODUCT_MPR	", SqlDbType.Int).Value = productsMPR.IdProductMPR;
                        myCommand.Parameters.AddWithValue("@ID_PURCHASE_RECORD", SqlDbType.Int).Value = productsMPR.IdPurchaseRecord;
                        myCommand.Parameters.AddWithValue("@ID_SUPPLIER_MATERIALS", SqlDbType.Int).Value = productsMPR.IdSupplierMaterial;
                        myCommand.Parameters.AddWithValue("@QUANTITY", SqlDbType.Float).Value = productsMPR.Quantity;
                        myCommand.Parameters.AddWithValue("@UNITARY_COST", SqlDbType.Float).Value = productsMPR.UnitaryCost;
                        myCommand.ExecuteNonQuery();
                        connection.Close();
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Coneccion.spInsertProductsMPR Error: " + ex.Message);
            }
        }

        public void spUpdateProductsMPR(string sp, ProductsMPR productsMPR)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand myCommand = new SqlCommand(sp, connection))
                    {
                        myCommand.CommandType = CommandType.StoredProcedure;
                        myCommand.Parameters.AddWithValue("@ID_PRODUCT_MPR	", SqlDbType.Int).Value = productsMPR.IdProductMPR;
                        myCommand.Parameters.AddWithValue("@ID_PURCHASE_RECORD", SqlDbType.Int).Value = productsMPR.IdPurchaseRecord;
                        myCommand.Parameters.AddWithValue("@ID_SUPPLIER_MATERIALS", SqlDbType.Int).Value = productsMPR.IdSupplierMaterial;
                        myCommand.Parameters.AddWithValue("@QUANTITY", SqlDbType.Float).Value = productsMPR.Quantity;
                        myCommand.Parameters.AddWithValue("@UNITARY_COST", SqlDbType.Float).Value = productsMPR.UnitaryCost;
                        myCommand.ExecuteNonQuery();
                        connection.Close();
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Coneccion.spUpdateProductsMPR Error: " + ex.Message);
            }
        }
        #endregion

        #region ProductsShoppingCart

        public void spInsertProductsShoppingCart(string sp, ProductsShoppingCart productsShoppingCart)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand myCommand = new SqlCommand(sp, connection))
                    {
                        myCommand.CommandType = CommandType.StoredProcedure;
                        //myCommand.Parameters.AddWithValue("@IDPRODUCTSC	", SqlDbType.Int).Value = productsShoppingCart.IdProductsSC;
                        myCommand.Parameters.AddWithValue("@IDSHOPPINGCART", SqlDbType.Int).Value = productsShoppingCart.IdShoppingCart;
                        myCommand.Parameters.AddWithValue("@IDPRODUCTSINV", SqlDbType.Int).Value = productsShoppingCart.IdProductsInv;
                        myCommand.Parameters.AddWithValue("@QUANTITY", SqlDbType.Int).Value = productsShoppingCart.Quantity;
                        myCommand.Parameters.AddWithValue("@PRICE", SqlDbType.Float).Value = productsShoppingCart.Price;
                        myCommand.ExecuteNonQuery();
                        connection.Close();
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Coneccion.spInsertProductsShoppingCart Error: " + ex.Message);
            }
        }

        public void spUpdateProductsShoppingCart(string sp, ProductsShoppingCart productsShoppingCart)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand myCommand = new SqlCommand(sp, connection))
                    {
                        myCommand.CommandType = CommandType.StoredProcedure;
                        myCommand.Parameters.AddWithValue("@IDPRODUCTSC	", SqlDbType.Int).Value = productsShoppingCart.IdProductsSC;
                        //myCommand.Parameters.AddWithValue("@IDSHOPPINGCART", SqlDbType.Int).Value = productsShoppingCart.IdShoppingCart;
                        //myCommand.Parameters.AddWithValue("@IDPRODUCTSINV", SqlDbType.Int).Value = productsShoppingCart.IdProductsInv;
                        myCommand.Parameters.AddWithValue("@QUANTITY", SqlDbType.Int).Value = productsShoppingCart.Quantity;
                        //myCommand.Parameters.AddWithValue("@PRICE", SqlDbType.Float).Value = productsShoppingCart.Price;
                        myCommand.ExecuteNonQuery();
                        connection.Close();
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Coneccion.spUpdateProductsShoppingCart Error: " + ex.Message);
            }
        }
        #endregion

        #region SaleTypes

        public void spInsertSaleTypes(string sp, SaleTypes saleTypes)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand myCommand = new SqlCommand(sp, connection))
                    {
                        myCommand.CommandType = CommandType.StoredProcedure;
                        //myCommand.Parameters.AddWithValue("@IDSALETYPE", SqlDbType.Int).Value = saleTypes.IdSaleType;
                        myCommand.Parameters.AddWithValue("@NAME", SqlDbType.VarChar).Value = saleTypes.Name;
                        myCommand.Parameters.AddWithValue("@DESCRIPTION", SqlDbType.VarChar).Value = saleTypes.Description;
                        myCommand.ExecuteNonQuery();
                        connection.Close();
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Coneccion.spInsertSaleTypes Error: " + ex.Message);
            }
        }

        public void spUpdateSaleTypes(string sp, SaleTypes saleTypes)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand myCommand = new SqlCommand(sp, connection))
                    {
                        myCommand.CommandType = CommandType.StoredProcedure;
                        myCommand.Parameters.AddWithValue("@IDSALETYPE", SqlDbType.Int).Value = saleTypes.IdSaleType;
                        myCommand.Parameters.AddWithValue("@NAME", SqlDbType.VarChar).Value = saleTypes.Name;
                        myCommand.Parameters.AddWithValue("@DESCRIPTION", SqlDbType.VarChar).Value = saleTypes.Description;
                        myCommand.ExecuteNonQuery();
                        connection.Close();
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Coneccion.spInsertSaleTypes Error: " + ex.Message);
            }
        }
        #endregion

        #region Sales

        public void spInsertSales(string sp, Sales sales)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand myCommand = new SqlCommand(sp, connection))
                    {
                        myCommand.CommandType = CommandType.StoredProcedure;
                        //myCommand.Parameters.AddWithValue("@IDSALE", SqlDbType.Int).Value = sales.IdSale;
                        myCommand.Parameters.AddWithValue("@IDINVOICE", SqlDbType.Int).Value = sales.IdInvoice;
                        myCommand.Parameters.AddWithValue("@IDPRODUCTSINV", SqlDbType.Int).Value = sales.IdProductsInv;
                        myCommand.Parameters.AddWithValue("@PRICE", SqlDbType.Float).Value = sales.Price;
                        myCommand.ExecuteNonQuery();
                        connection.Close();
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Coneccion.spInsertSales Error: " + ex.Message);
            }
        }

        public void spUpdateSales(string sp, Sales sales)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand myCommand = new SqlCommand(sp, connection))
                    {
                        myCommand.CommandType = CommandType.StoredProcedure;
                        myCommand.Parameters.AddWithValue("@IDSALE", SqlDbType.Int).Value = sales.IdSale;
                        myCommand.Parameters.AddWithValue("@IDINVOICE", SqlDbType.Int).Value = sales.IdInvoice;
                        myCommand.Parameters.AddWithValue("@IDPRODUCTSINV", SqlDbType.Int).Value = sales.IdProductsInv;
                        myCommand.Parameters.AddWithValue("@PRICE", SqlDbType.Float).Value = sales.Price;
                        myCommand.ExecuteNonQuery();
                        connection.Close();
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Coneccion.spUpdateSales Error: " + ex.Message);
            }
        }
        #endregion

        #region ShoppingCart

        public void spInsertShoppingCart(string sp, ShoppingCart shoppingCart)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand myCommand = new SqlCommand(sp, connection))
                    {
                        myCommand.CommandType = CommandType.StoredProcedure;
                        //myCommand.Parameters.AddWithValue("@IDSHOPPINGCART", SqlDbType.Int).Value = shoppingCart.IdShoppingCart;
                        myCommand.Parameters.AddWithValue("@CUSTOMER", SqlDbType.Int).Value = shoppingCart.IdCustomer;
                        connection.Close();
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Coneccion.spInsertShoppingCart Error: " + ex.Message);
            }
        }

        public void spUpdateShoppingCart(string sp, ShoppingCart shoppingCart)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand myCommand = new SqlCommand(sp, connection))
                    {
                        myCommand.CommandType = CommandType.StoredProcedure;
                        myCommand.Parameters.AddWithValue("@IDSHOPPINGCART", SqlDbType.Int).Value = shoppingCart.IdShoppingCart;
                        myCommand.Parameters.AddWithValue("@CUSTOMER", SqlDbType.Int).Value = shoppingCart.IdCustomer;
                        myCommand.ExecuteNonQuery();
                        connection.Close();
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Coneccion.spUpdateShoppingCart Error: " + ex.Message);
            }
        }
        #endregion

        #region CreateProducts

        public void spInsertCreateProducts(string sp, CreateProducts createProducts)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand myCommand = new SqlCommand(sp, connection))
                    {
                        myCommand.CommandType = CommandType.StoredProcedure;
                        //myCommand.Parameters.AddWithValue("@ID_CREATE_PRODUCT", SqlDbType.Int).Value = createProducts.IdCreateProduct;
                        myCommand.Parameters.AddWithValue("@ID_EMPLOYEE", SqlDbType.Int).Value = createProducts.IdEmployee;
                        myCommand.Parameters.AddWithValue("@ID_PRODUCT", SqlDbType.Int).Value = createProducts.IdProduct;
                        myCommand.Parameters.AddWithValue("@UNITARY_COST", SqlDbType.Float).Value = createProducts.UnitaryCost;
                        myCommand.Parameters.AddWithValue("@QUANTITYT", SqlDbType.Float).Value = createProducts.Quantity;
                        myCommand.Parameters.AddWithValue("@CREATION_DATE", SqlDbType.Date).Value = createProducts.CreationDate;
                        myCommand.Parameters.AddWithValue("@ID_MATERIAL_REQUEST", SqlDbType.Int).Value = createProducts.IdMaterialRequest;
                        myCommand.Parameters.AddWithValue("@SALE_PRICE", SqlDbType.Float).Value = createProducts.SalePrice;
                        myCommand.Parameters.AddWithValue("@DETAILS", SqlDbType.VarChar).Value = createProducts.Details;
                        myCommand.Parameters.AddWithValue("@ID_STATUS", SqlDbType.Int).Value = createProducts.IdStatus;
                        connection.Close();
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Coneccion.spInsertCreateProducts Error: " + ex.Message);
            }
        }

        public void spUpdateCreateProducts(string sp, CreateProducts createProducts)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand myCommand = new SqlCommand(sp, connection))
                    {
                        myCommand.CommandType = CommandType.StoredProcedure;
                        //myCommand.Parameters.AddWithValue("@ID_CREATE_PRODUCT", SqlDbType.Int).Value = createProducts.IdCreateProduct;
                        myCommand.Parameters.AddWithValue("@ID_EMPLOYEE", SqlDbType.Int).Value = createProducts.IdEmployee;
                        myCommand.Parameters.AddWithValue("@ID_PRODUCT", SqlDbType.Int).Value = createProducts.IdProduct;
                        myCommand.Parameters.AddWithValue("@UNITARY_COST", SqlDbType.Float).Value = createProducts.UnitaryCost;
                        myCommand.Parameters.AddWithValue("@QUANTITYT", SqlDbType.Float).Value = createProducts.Quantity;
                        myCommand.Parameters.AddWithValue("@CREATION_DATE", SqlDbType.Date).Value = createProducts.CreationDate;
                        myCommand.Parameters.AddWithValue("@ID_MATERIAL_REQUEST", SqlDbType.Int).Value = createProducts.IdMaterialRequest;
                        myCommand.Parameters.AddWithValue("@SALE_PRICE", SqlDbType.Float).Value = createProducts.SalePrice;
                        myCommand.Parameters.AddWithValue("@DETAILS", SqlDbType.VarChar).Value = createProducts.Details;
                        myCommand.Parameters.AddWithValue("@ID_STATUS", SqlDbType.Int).Value = createProducts.IdStatus;
                        myCommand.ExecuteNonQuery();
                        connection.Close();
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Coneccion.spUpdateCreateProducts Error: " + ex.Message);
            }
        }
        #endregion

        public void spInsert(string sp, int id, string parameter)
        {
        }

        public void spUpdate(string sp, int id, string parameter)
        {
        }

    }
}




