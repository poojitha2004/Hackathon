using RetailApp.Models;

public interface ICartService
{
    CartItem AddToCart(CartItem item);
    List<CartItem> GetCart(int userId);
}