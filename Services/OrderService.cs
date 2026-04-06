using RetailApp.Data;
using RetailApp.Models;
namespace RetailApp.Services;

public class OrderService : IOrderService
{
    private readonly AppDbContext _context;

    public OrderService(AppDbContext context)
    {
        _context = context;
    }

    public string PlaceOrder(Order order)
    {
        _context.Orders.Add(order);

        var cartItems = _context.CartItems.Where(c => c.UserId == order.UserId);

        foreach (var item in cartItems)
        {
            var inventory = _context.Inventories
                .FirstOrDefault(i => i.ProductId == item.ProductId);

            if (inventory != null)
                inventory.Quantity -= item.Quantity;
        }

        _context.SaveChanges();
        return "Order Placed";
    }

    public List<Order> GetOrders(int userId)
    {
        return _context.Orders.Where(o => o.UserId == userId).ToList();
    }
}