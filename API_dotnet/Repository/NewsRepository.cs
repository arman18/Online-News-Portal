using Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Server.Repository
{
    public class NewsRepository :BaseRepository
    {
        public News GetNews(int id)
        {
            return DatabaseContext.newses.SingleOrDefault(news=>news.id==id);
        }
        public List<News> GetNews()
        {
            return DatabaseContext.newses.ToList();
        }
        public News Add(News news)
        {
            DatabaseContext.newses.Add(news);
            DatabaseContext.SaveChanges();
            return news;
        }
        public News Update(News news)
        {
            DatabaseContext.newses.Update(news);
            DatabaseContext.SaveChanges();
            return news;
        }

        public bool Delete(int id)
        {
            News news = GetNews(id);
            DatabaseContext.newses.Remove(news);
            foreach(Comment comment in DatabaseContext.commnents.ToList())
            {
                if(comment.postId==id)
                    DatabaseContext.commnents.Remove(comment);
            }
            DatabaseContext.SaveChanges();
            return true;
        }
        public bool AddComment(Comment comment)
        {
            DatabaseContext.commnents.Add(comment);
            DatabaseContext.SaveChanges();
            return true;
        }
        public List<Comment> GetComment(int PostID) {
            
            return DatabaseContext.commnents.Where(a=>a.postId==PostID).ToList();
        }
    }
}