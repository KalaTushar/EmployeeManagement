namespace EmployeeManagementBackend.Model
{
    public class Employee
    {
        public int EmployeeId { get; set; }
        public string EmployeeName { get; set; }
        public string Role { get; set; }
        public string Skills { get; set; }
        public string Division { get; set; }
        public GenderType Gender { get; set; }
        public EType EmployeeType { get; set; }
    }
    public enum GenderType
    {
        Male=0,
        Female=1,
        Others=2
    }
    public enum EType
    {
        Internal=0,
        External=1
    }
}
