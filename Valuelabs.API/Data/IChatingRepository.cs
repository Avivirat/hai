using System.Collections.Generic;
using System.Threading.Tasks;
using Valuelabs.API.Helpers;
using Valuelabs.API.Models;

namespace Valuelabs.API.Data
{
    public interface IChatingRepository
    {
         void Add<T>(T entity) where T: class;
         void Delete<T>(T entity) where T: class;
         Task<bool> SaveAll();
         Task<PagedList<User>> GetUsers(UserParams userParams);
         Task<User> GetUser(int id);
         Task<Photo> GetPhoto(int id);
         Task<Photo> GetMainPhotoForUser(int userId);
         Task<Like> GetLike(int userId, int recipientId);
         

    }
}