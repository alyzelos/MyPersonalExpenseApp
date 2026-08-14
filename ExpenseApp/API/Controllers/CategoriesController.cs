using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController(DataContext dataContext) : ControllerBase
    {


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Category>>> GetCategories()
        {
            var category = await dataContext.Categories.ToListAsync();

            return category;
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Category>> GetCategory(int id)
        {
            var category = await dataContext.Categories.FindAsync(id);

            if(category == null) return NotFound("no category found with this id " + id);

            return category;
        }
    }
}
