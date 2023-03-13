using Microsoft.EntityFrameworkCore;
using EmployeeManagementBackend.Model;

namespace EmployeeManagementBackend.DAL
{
    public class EmployeeContext : DbContext
    {
        public EmployeeContext(DbContextOptions<EmployeeContext> options) : base(options)
        {

        }
        public DbSet<Employee> Employees { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employee>()
                .ToTable(nameof(Employee));
        }
    }
}
