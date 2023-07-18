using System;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Tabloid.Repositories;

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _postRepository;
        public PostController(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }

       
        [HttpGet]
        public IActionResult GetPost()
        {
            return Ok(_postRepository.GetAllPublishedPosts());
        }

        [HttpGet("GetMyPost")]
        public IActionResult GetMyPost()
        {
            int userId = GetCurrentUserProfileId();
            return Ok(_postRepository.CurrentUsersPosts(userId));
        }

        [HttpGet("{id}")]
        public IActionResult GetPostById(int id)
        {
            return Ok(_postRepository.GetPublishedPostById(id));
        }


        private int GetCurrentUserProfileId()
        {
            string id = User.FindFirstValue(ClaimTypes.NameIdentifier);
            return int.Parse(id);
        }
    }
}
