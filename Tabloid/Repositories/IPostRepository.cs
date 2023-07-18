using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface IPostRepository
    {
        List<Post> GetAllPublishedPosts();
       List<Post> CurrentUsersPosts(int userProfileId);
        Post GetPublishedPostById(int id);
    }
}