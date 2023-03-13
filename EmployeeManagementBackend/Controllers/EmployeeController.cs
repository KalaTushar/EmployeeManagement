using Microsoft.AspNetCore.Mvc;
using EmployeeManagementBackend.Services;
using EmployeeManagementBackend.ViewModels;

namespace EmployeeManagementBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeServices _service;

        public EmployeeController(IEmployeeServices service)
        {
            _service = service;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmployeeViewModel>>> GetAsync()
        {
            return Ok(await _service.GetEmployeeAsync());
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<EmployeeViewModel>> GetByIdAsync(int id)
        {
            return Ok(await _service.GetEmployeeByIdAsync(id));
        }

        [HttpPost]
        public async Task<ActionResult<EmployeeViewModel>> CreateAsync(EmployeeCreateViewModel Employee)
        {
            return Ok(await _service.CreateAsync(Employee));
        }
        [HttpPut("{id:int}")]
        public async Task<ActionResult<EmployeeViewModel>> UpdateAsync(int id,EmployeeCreateViewModel Employee)
        {
            return Ok(await _service.UpdateAsync(id,Employee));
        }
        [HttpDelete]
        public async Task<ActionResult<string>> DeleteAsync(int id)
        {
            return Ok(await _service.DeleteAsync(id));
        }
    }
}
