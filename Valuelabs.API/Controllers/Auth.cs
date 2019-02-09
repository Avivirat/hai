using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Valuelabs.API.Data;
using Valuelabs.API.Models;

namespace Valuelabs.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;

        public AuthController(IAuthRepository repo)
        {
            _repo = repo;

        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register(string username, string password)
        {


            username = username.ToLower();

            if (await _repo.UserExistsAsync(username))
                return BadRequest("Username already exists");
            
            var UserToCreate = new User
            {
                Username = username
            };
            var createdUser = await _repo.RegisterAsync(UserToCreate,password);
            return StatusCode(201);
        }

    }
}