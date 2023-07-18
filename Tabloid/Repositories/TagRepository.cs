using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Microsoft.Extensions.Configuration;
using Tabloid.Models;
using Tabloid.Utils;

namespace Tabloid.Repositories
{
    public class TagRepository : BaseRepository, ITagRepository
    {
        public TagRepository(IConfiguration config) : base(config) { }
        public List<Tag> GetAllTags()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    // cmd.CommandText = @"
                    //    SELECT t.Id, t.Name
                    //      FROM Tag t
                    //  ORDER BY t.Name ASC";
                    cmd.CommandText = @"
                       SELECT t.Id, t.Name
                         FROM Tag t
                    ORDER BY t.Name";
                    var reader = cmd.ExecuteReader();

                    var tags = new List<Tag>();

                    while (reader.Read())
                    {
                        tags.Add(new Tag()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                        });
                    }
                    tags = tags.OrderBy(t => t.Name).ToList();//sorts tags alphabetically
                    return tags;
                }
            }
        }
        public void AddTag(Tag tag)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                       INSERT INTO Tag (Name)
                        OUTPUT INSERTED.ID
                       VALUES (@Name)";
                    cmd.Parameters.AddWithValue("@Name", tag.Name);
                    tag.Id = (int)cmd.ExecuteScalar();
                }
            }
        }
        public void UpdateTag(Tag tag)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using var cmd = conn.CreateCommand();
                cmd.CommandText = @"
                       UPDATE Tag
                          SET [Name] = @name
                        WHERE Id = @id";
                cmd.Parameters.AddWithValue("@name", tag.Name);
                cmd.Parameters.AddWithValue("@id", tag.Id);
                cmd.ExecuteNonQuery();
            }
        }
    }
}