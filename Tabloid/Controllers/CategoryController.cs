using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Tabloid.Models;
using Tabloid.Repositories;

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepository _categoryRepository;

        public CategoryController(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }
        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_categoryRepository.GetAll());
        }
        [HttpPost]
        public IActionResult Create(Category category)
        {
            _categoryRepository.Add(category);
            return Ok(_categoryRepository.GetAll());
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _categoryRepository.Delete(id);
            return Ok(_categoryRepository.GetAll());
        }
        [HttpPut]
        public IActionResult Edit(Category category)
        {
            _categoryRepository.Update(category);
            return Ok(_categoryRepository.GetAll());
        }
        
    }
}