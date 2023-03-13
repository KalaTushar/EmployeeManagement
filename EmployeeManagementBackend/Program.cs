using Microsoft.EntityFrameworkCore;
using EmployeeManagementBackend.Services;
using EmployeeManagementBackend.DAL;
using Microsoft.Extensions.Configuration;

namespace EmployeeManagementBackend
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddDbContext<EmployeeContext>(options =>
            {
                options.UseSqlServer(builder.Configuration.GetConnectionString("Development"));
            });
            var allowedOrigins = builder.Configuration.GetSection("AllowedOrigins").Get<string[]>();
            builder.Services.AddCors(options => {
                options.AddPolicy("App_Cors_Policy", builder => {
                    builder
                        .WithOrigins(allowedOrigins)
                        .AllowAnyMethod()
                        .AllowAnyHeader();
                });
            });
            builder.Services.AddControllers();
            builder.Services.AddScoped<IEmployeeServices, EmployeeServices>();
            //builder.Services.AddSwaggerGen();
            var app = builder.Build();
            //app.UseSwagger();
            //app.UseSwaggerUI();
            app.UseCors("App_Cors_Policy");
            app.MapControllers();
            app.Run();
        }
    }
}