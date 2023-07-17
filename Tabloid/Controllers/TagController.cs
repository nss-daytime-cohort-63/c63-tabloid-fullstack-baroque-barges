using System;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Tabloid.Repositories;

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TagController : ControllerBase
    {
        private readonly ITagRepository _tagRepository;
        public TagController(ITagRepository tagRepository)
        {
            _tagRepository = tagRepository;
        }

        [HttpGet]
        public IActionResult GetTag()
        {
            return Ok(_tagRepository.GetAllTags());
        }
        public IActionResult AddTag()
        {
            return Ok();
        }
        [HttpPost]
        public IActionResult AddTag(Models.Tag tag)
        {
            _tagRepository.AddTag(tag);
            return Ok();
        }
    }
}
