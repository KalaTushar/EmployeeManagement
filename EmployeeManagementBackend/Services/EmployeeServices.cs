using Microsoft.EntityFrameworkCore;
using EmployeeManagementBackend.Exceptions;
using EmployeeManagementBackend.Model;
using EmployeeManagementBackend.ViewModels;
using EmployeeManagementBackend.DAL;

namespace EmployeeManagementBackend.Services
{
    public class EmployeeServices : IEmployeeServices
    {
        private readonly EmployeeContext _context;

        public EmployeeServices(EmployeeContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<EmployeeViewModel>> GetEmployeeAsync()
        {
            return await _context.Employees
                .Select(p => new EmployeeViewModel
                {
                    EmployeeId= p.EmployeeId,
                    EmployeeName= p.EmployeeName,
                    EmployeeType = p.EmployeeType == 0? "Internal" : "External",
                    Division= p.Division,
                    Skills= p.Skills,
                    Role = p.Role,
                    Gender= p.Gender== 0 ? "Male": (p.Gender == GenderType.Female ? "Female" : "Others"),
                }).ToListAsync();
        }
        public async Task<EmployeeViewModel> GetEmployeeByIdAsync(int id)
        {
            if (!await _context.Employees
                .AnyAsync(x => x.EmployeeId == id))
            {
                throw new NotFoundException();
            }
            var t = await _context.Employees
                .FirstAsync(x => x.EmployeeId == id);
            var ans = new EmployeeViewModel
            {
                EmployeeId = t.EmployeeId,
                EmployeeName = t.EmployeeName,
                EmployeeType = t.EmployeeType == 0 ? "Internal" : "External",
                Division = t.Division,
                Skills= t.Skills,
                Role = t.Role,
                Gender= t.Gender == 0 ? "Male" : (t.Gender == GenderType.Female ? "Female" : "Others"),
            };

            return ans;
        }
        public async Task<string> DeleteAsync(int id)
        {
            if (!await _context.Employees
                .AnyAsync(x => x.EmployeeId == id))
            {
                throw new NotFoundException();
            }
            var t = await _context.Employees
                .FirstAsync(x => x.EmployeeId == id);
            _context.Employees.Remove(t);
            await _context.SaveChangesAsync();
            return "The Content is Deleted";
        }
        public async Task<EmployeeViewModel> CreateAsync(EmployeeCreateViewModel Employee)
        {
            var p = ToEntity(Employee);
            await _context.AddAsync(p);
            await _context.SaveChangesAsync();
            return ToViewModel(p);
        }
        public async Task<EmployeeViewModel> UpdateAsync(int id,EmployeeCreateViewModel Employee)
        {
            if (!await _context.Employees
                .AnyAsync(x => x.EmployeeId == id))
            {
                throw new NotFoundException();
            }
            var t = await _context.Employees
                .FirstAsync(x => x.EmployeeId == id);
            t.EmployeeName=Employee.EmployeeName;
            t.EmployeeType = Employee.EmployeeType == "Internal" ? EType.Internal : EType.External;
            t.Division=Employee.Division;
            t.Skills=Employee.Skills;
            t.Role=Employee.Role;
            t.Gender = Employee.Gender == "Male" ? GenderType.Male : Employee.Gender == "Female" ? GenderType.Female : GenderType.Others;
            await _context.SaveChangesAsync();
            return ToViewModel(t);
        }
        private EmployeeViewModel ToViewModel(Employee p)
        {
            return new EmployeeViewModel
            {
                EmployeeId = p.EmployeeId,
                EmployeeName = p.EmployeeName,
                EmployeeType = p.EmployeeType == 0 ? "Internal" : "External",
                Division = p.Division,
                Skills = p.Skills,
                Role = p.Role,
                Gender = p.Gender == 0 ? "Male" : (p.Gender == GenderType.Female ? "Female" : "Others"),
            };
        }
        private Employee ToEntity(EmployeeCreateViewModel Employee)
        {
            return new Employee
            {
                EmployeeName = Employee.EmployeeName,
                EmployeeType = Employee.EmployeeType == "Internal" ? EType.Internal : EType.External,
                Division = Employee.Division,
                Skills = Employee.Skills,
                Role = Employee.Role,
                Gender = Employee.Gender == "Male" ? GenderType.Male : Employee.Gender == "Female"? GenderType.Female : GenderType.Others,
            };
        }
    }
}
