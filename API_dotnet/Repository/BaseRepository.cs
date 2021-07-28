using Server.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Server.Repository
{
    public class BaseRepository
    {
        protected DatabaseContext DatabaseContext = new DatabaseContext();
    }
}
