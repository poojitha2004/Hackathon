using Microsoft.AspNetCore.Mvc;
using RetailApp.Models;
using RetailApp.Services;

[Route("api/products")]
[ApiController]
public class ProductsController : ControllerBase
{
    private readonly IProductService _service;

    public ProductsController(IProductService service)
    {
        _service = service;
    }

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(_service.GetProducts());
    }

    [HttpPost]
    public IActionResult Add(Product product)
    {
        return Ok(_service.AddProduct(product));
    }
}