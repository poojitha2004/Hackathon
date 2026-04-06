using Microsoft.Build.Tasks.Deployment.Bootstrapper;

namespace RetailApp.Models
{
    public class CartItem
    {
        public int Id { get; set; }

        public int CartId { get; set; }

        public int ProductId { get; set; }
          
        public int Quantity { get; set; }
        public int UserId { get; internal set; }
    }
}
