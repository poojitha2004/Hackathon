using RetailApp.Models;
namespace RetailApp.Services;
public interface IProductService
{
    List<Product> GetProducts();
    Product AddProduct(Product product);
}