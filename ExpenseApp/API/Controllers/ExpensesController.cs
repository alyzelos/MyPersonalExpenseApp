using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExpensesController(DataContext dataContext) : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Expense>>> GetExpenses ()
        {
            var expenses = await dataContext.Expenses.ToListAsync();
            return expenses;
        }
    }
}
