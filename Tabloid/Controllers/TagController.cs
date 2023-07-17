using System;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Tabloid.Repositories;
using Tabloid.Models;
using System.Collections.Generic;

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TagController : Controller
    {
        private readonly ITagRepository _tagRepository;
        public TagController(ITagRepository tagRepository)
        {
            _tagRepository = tagRepository;
        }

        [HttpGet]
        public IActionResult GetAllTag()
        {
            return Ok(_tagRepository.GetAllTags());
        }
        [HttpPost]
        public IActionResult AddTag(Tag tag)
        {
            _tagRepository.AddTag(tag);
            return Ok(_tagRepository.GetAllTags());
        }
    }
}
