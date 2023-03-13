using EmployeeManagementBackend.Model;

namespace EmployeeManagementBackend.ViewModels
{
    public class EmployeeViewModel
    {
        public int EmployeeId { get; set; }
        public string EmployeeName { get; set; }
        public string Role { get; set; }
        public string Skills { get; set; }
        public string Division { get; set; }
        public string Gender { get; set; }
        public string EmployeeType { get; set; }
    }
}
