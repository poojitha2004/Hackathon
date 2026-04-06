using RetailApp.Models;

public interface IOrderService
{
    string PlaceOrder(Order order);
    List<Order> GetOrders(int userId);
}