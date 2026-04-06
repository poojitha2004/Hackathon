using RetailApp.Data;
using RetailApp.Models;
namespace RetailApp.Services;

public class CartService : ICartService
{
    private readonly AppDbContext _context;

    public CartService(AppDbContext context)
    {
        _context = context;
    }

    public CartItem AddToCart(CartItem item)
    {
        _context.CartItems.Add(item);
        _context.SaveChanges();
        return item;
    }

    public List<CartItem> GetCart(int userId)
    {
        return _context.CartItems.Where(c => c.UserId == userId).ToList();
    }
}