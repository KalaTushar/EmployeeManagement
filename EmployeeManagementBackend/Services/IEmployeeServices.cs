using EmployeeManagementBackend.ViewModels;

namespace EmployeeManagementBackend.Services
{
    public interface IEmployeeServices
    {
        Task<IEnumerable<EmployeeViewModel>> GetEmployeeAsync();
        Task<EmployeeViewModel> GetEmployeeByIdAsync(int id);
        Task<EmployeeViewModel> CreateAsync(EmployeeCreateViewModel Employee);
        Task<EmployeeViewModel> UpdateAsync(int id, EmployeeCreateViewModel Employee);
        Task<string> DeleteAsync(int id);
    }
}
