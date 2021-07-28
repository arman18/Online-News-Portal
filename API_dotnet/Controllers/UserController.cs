using Microsoft.AspNetCore.Mvc;
using Server.Models;
using Server.Repository;

namespace Server.Controllers
{
    public class UserController:Controller
    {
        private readonly UserRepository _userRepository = new UserRepository();

        [HttpPost("api/User/Login")]
        public IActionResult LoginByEmailPassword([FromBody] LoginInfo credintials)
        {
            return Ok(_userRepository.LoginByEmailPassword(credintials.Email, credintials.Password, credintials.IsAdmin));
        }
        [HttpGet("api/User/{id}")]
        public IActionResult GetUser(int id)
        {
            return Ok(_userRepository.GetUser(id));
        }
        [HttpPost("api/User/Add")] //testing
        public IActionResult Add([FromBody] User user)
        {

            return Ok(_userRepository.Add(user));
        }

        [HttpPost("api/User/Update")]
        public IActionResult Update([FromBody] User user)
        {
            return Ok(_userRepository.Update(user));
        }
        [HttpGet("api/User/Delete/{id}")]
        public IActionResult Delete(int id)
        {
            
            return Ok(_userRepository.Delete(id));
        }

    }
}
