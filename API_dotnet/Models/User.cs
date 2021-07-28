using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Server.Models
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        public string email { get; set; }
        public string fullName { get; set; }
        public string userName { get; set; }
        public string password { get; set; }
        public string nationality { get; set; }
        public string dateOfBirth { get; set; }
        public bool isAdmin { get; set; }

    }
}
