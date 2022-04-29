using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public interface IOperations<T>
    {
        List<T> ShowById(int id);

        string Insert(T item);

        string Delete(int id);

        string Update(T item);

        List<T> ShowAll();
    }
}
