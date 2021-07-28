using Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Server.Repository
{
    public class UserRepository :BaseRepository
    {
        public User LoginByEmailPassword(string email,string password,bool isAdmin)
        {
            return DatabaseContext.users.SingleOrDefault(user => user.email == email && user.password == password && user.isAdmin==isAdmin);
        }
        public User GetUser(int id)
        {
            return DatabaseContext.users.SingleOrDefault(user => user.id==id);
        }
        public bool Add(User user)
        {
            
            DatabaseContext.users.Add(user);
            DatabaseContext.SaveChanges();
            return true;
        }
        public User Update(User user)
        {
            DatabaseContext.users.Update(user);
            DatabaseContext.SaveChanges();
            return user;
        }

        public bool Delete(int id)
        {
            User user = GetUser(id);
            DatabaseContext.users.Remove(user);
            DatabaseContext.SaveChanges();
            return true;
        }

    }
}
