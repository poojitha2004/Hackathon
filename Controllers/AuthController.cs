using Microsoft.AspNetCore.Mvc;
using RetailApp.Models;

[Route("api/auth")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly IAuthService _service;

    public AuthController(IAuthService service)
    {
        _service = service;
    }

    [HttpPost("register")]
    public IActionResult Register(User user)
    {
        return Ok(_service.Register(user));
    }

    [HttpPost("login")]
    public IActionResult Login(User user)
    {
        var token = _service.Login(user);
        if (token == null) return Unauthorized();

        return Ok(new { token });
    }
}