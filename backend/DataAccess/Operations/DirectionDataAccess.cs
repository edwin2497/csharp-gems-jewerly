using Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public class DirectionDataAccess
    {
        Connection connection = new Connection();

        public void Delete(int id)
        {
            string parameter = "@IDDIRECTION";
            string Sqlstring = string.Format("[SCH_SETTING].[SP_DELETE_DIRECTIONS]");
            connection.spDeleteById(Sqlstring, id, parameter);
        }

        public void Insert(Directions direction)
        {
            string Sqlstring = string.Format("[SCH_SETTING].[SP_INSERT_DIRECTIONS]");
            connection.spInsertDirection(Sqlstring, direction);
        }

        public List<Directions> ShowAll()
        {
            string Sqlstring = string.Format("[SCH_SETTING].[SP_SEARCH_ALL_DIRECTIONS]");
            DataTable dt = connection.spShowAll(Sqlstring);

            List<Directions> directiontList = new List<Directions>();
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                Directions direction = new Directions();
                direction.IdDirection = Convert.ToInt32(dt.Rows[i]["ID_DIRECTION"]);
                direction.Province = dt.Rows[i]["PROVINCE"].ToString();
                direction.Canton = dt.Rows[i]["CANTON"].ToString();
                direction.District = dt.Rows[i]["DISTRICT"].ToString();
                direction.Details = dt.Rows[i]["DETAILS"].ToString();
                directiontList.Add(direction);
            }
            return directiontList;
        }


        public List<Directions> ShowById(int id)
        {
            string parameter = "@IDDIRECTION";
            string Sqlstring = string.Format("[SCH_SETTING].[SP_SEARCH_DIRECTIONS]");
            DataTable dt = connection.spShowById(Sqlstring, id, parameter);

            List<Directions> directiontList = new List<Directions>();
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                Directions direction = new Directions();
                direction.IdDirection = Convert.ToInt32(dt.Rows[i]["ID_DIRECTION"]);
                direction.Province = dt.Rows[i]["PROVINCE"].ToString();
                direction.Canton = dt.Rows[i]["CANTON"].ToString();
                direction.District = dt.Rows[i]["DISTRICT"].ToString();
                direction.Details = dt.Rows[i]["DETAILS"].ToString();
                directiontList.Add(direction);
            }
            return directiontList;
        }

        public void Update(Directions direction)
        {
            string Sqlstring = string.Format("[SCH_SETTING].[SP_UPDATE_DIRECTIONS]");
            connection.spUpdateDirection(Sqlstring, direction);
        }
    }
}
