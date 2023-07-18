using System;
using System.Collections.Generic;

namespace Tabloid.Models
{
    public class Post
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string ImageLocation { get; set; }
        public DateTime CreateDateTime { get; set; }
        public DateTime? PublishDateTime { get; set; }
        public bool isApproved { get; set; }
        public int CategoryId { get; set; }
        public UserProfile UserProfile { get; set; }
        public int UserProfileId { get; set; }
        public int EstimatedReadTime
        {
            get
            {
                if (Content == null)
                {
                    return 0;
                }
                int wordCount = Content.Split(new[] { ' ', '\t', '\n' }, StringSplitOptions.RemoveEmptyEntries).Length;
                int estimatedTime = (int)Math.Ceiling((double)wordCount / 265);
                return estimatedTime;
            }
        }
        public List<Comment> Comments { get; set; }
    }
}
