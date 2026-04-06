using RetailApp.Models;

public interface IAuthService
{
    string Register(User user);
    string Login(User user);
}