using System.Net;
using System.Net.Mail;
namespace RetailApp.Services;

public class EmailService
{
    public void SendEmail(string toEmail)
    {
        var smtp = new SmtpClient("smtp.gmail.com")
        {
            Port = 587,
            Credentials = new NetworkCredential("your@gmail.com", "app-password"),
            EnableSsl = true,
        };

        smtp.Send("your@gmail.com", toEmail,
            "Order Confirmation",
            "Your order has been placed successfully!");
    }
}