namespace RetailApp.Services;

public interface IEmailService
{
    void SendEmail(string toEmail, string message);
}