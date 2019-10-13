using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Data
{
    public class DTOusers
    {
        [Required]
        public string Username { get; set; }
        
        [Required]
        [StringLength(8, MinimumLength = 5, ErrorMessage = "Password should be between 5 to 8 characters")]
        public string Password { get; set; }
    }
}