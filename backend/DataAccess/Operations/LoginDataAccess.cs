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
    public class LoginDataAccess
    {
        Connection connection = new Connection();

        public Employee SearchEmployee(int username)
        {
            string parameter = "@CARDID";
            string Sqlstring = string.Format("[SCH_ADMINISTRATIVE].[SP_SEARCH_EMPLOYEES_BY_CARDID]");
            SqlDataReader SQLTemporal = connection.LoginQuery(Sqlstring, username, parameter);

            if (SQLTemporal != null && SQLTemporal.HasRows)
            {
                while (SQLTemporal.Read())
                {
                    return new Employee(SQLTemporal.GetInt32(0), SQLTemporal.GetInt32(1), SQLTemporal.GetString(2).Trim(), SQLTemporal.GetString(3).Trim(), SQLTemporal.GetString(4).Trim(),SQLTemporal.GetString(5).Trim(),SQLTemporal.GetString(6).Trim(),SQLTemporal.GetInt32(7),SQLTemporal.GetInt32(8),SQLTemporal.GetInt32(9), SQLTemporal.GetString(10).Trim(), SQLTemporal.GetDecimal(11), SQLTemporal.GetDateTime(12));
                }
            }
            return null;
        }

        public Customer SearchCustomer(int username)
        {
            string parameter = "@IDCUSTOMER";
            string Sqlstring = string.Format("[SCH_ADMINISTRATIVE].[SP_SEARCH_CUSTOMERS]");
            SqlDataReader SQLTemporal = connection.LoginQuery(Sqlstring, username, parameter);

            if (SQLTemporal != null && SQLTemporal.HasRows)
            {
                while (SQLTemporal.Read())
                {
                    return new Customer (SQLTemporal.GetInt32(0), SQLTemporal.GetInt32(1), SQLTemporal.GetString(2).Trim(), SQLTemporal.GetString(3).Trim(), SQLTemporal.GetString(4).Trim(), SQLTemporal.GetString(5).Trim(), SQLTemporal.GetString(6).Trim(), SQLTemporal.GetInt32(7), SQLTemporal.GetString(8).Trim());
                }
            }
            return null;
        }

    }
}