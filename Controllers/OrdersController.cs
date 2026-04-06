using Microsoft.AspNetCore.Mvc;
using RetailApp.Data;
using RetailApp.Models;

namespace RetailApp.Controllers;

[Route("api/orders")]
[ApiController]
public class OrdersController : ControllerBase
{
    private readonly AppDbContext _context;

    public OrdersController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost]
    public IActionResult PlaceOrder(Order order)
    {
        _context.Orders.Add(order);

        var cartItems = _context.CartItems.Where(c => c.UserId == order.UserId);

        foreach (var item in cartItems)
        {
            var inventory = _context.Inventories.FirstOrDefault(i => i.ProductId == item.ProductId);
            if (inventory != null)
                inventory.Quantity -= item.Quantity;
        }

        _context.SaveChanges();
        return Ok("Order Placed");
    }

    [HttpGet("{userId}")]
    public IActionResult GetOrders(int userId)
    {
        return Ok(_context.Orders.Where(o => o.UserId == userId));
    }
}