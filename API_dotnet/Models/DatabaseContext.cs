using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
namespace Server.Models
{
    public class DatabaseContext:DbContext
    {
        private const string ConnectionString = @"Server=DESKTOP-2P5RU7H\SQLEXPRESS;Database=BSSE10thDB;Trusted_Connection=true";

        public DbSet<News> newses { get; set; }
        public DbSet<User> users { get; set; }
        public DbSet<Comment> commnents { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(ConnectionString);
        }
    }
}
