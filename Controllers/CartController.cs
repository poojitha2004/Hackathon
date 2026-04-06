using Microsoft.AspNetCore.Mvc;
using RetailApp.Models;

[Route("api/cart")]
[ApiController]
public class CartController : ControllerBase
{
    private readonly ICartService _service;

    public CartController(ICartService service)
    {
        _service = service;
    }

    [HttpPost("add")]
    public IActionResult Add(CartItem item)
    {
        return Ok(_service.AddToCart(item));
    }

    [HttpGet("{userId}")]
    public IActionResult Get(int userId)
    {
        return Ok(_service.GetCart(userId));
    }
}