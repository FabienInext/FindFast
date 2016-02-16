using FindFast.Domain;
using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace FindFast.Infrastructure
{
    public class RealEstateAdRepository : IRealEstateAdRepository
    {
        [BsonRepresentation(BsonType.ObjectId)]
        protected static IMongoClient _client;
        protected static IMongoDatabase _database;

        public RealEstateAdRepository()
        {
            _client = new MongoClient();
            _database = _client.GetDatabase("FindFast");
        }

        public async void InsertAsync()
        {
            var collection = _database.GetCollection<BsonDocument>("realestate");
            var realEstate = new RealEstate
            {
                Title = "Test title",
                Description = "Test description",
                Price = 1234,
                Surface = 38
            };

           await collection.InsertOneAsync(realEstate.ToBsonDocument());
        }

        public async Task<IEnumerable<RealEstate>> FindAllAsync(string title = null)
        {
            
            var collection = _database.GetCollection<BsonDocument>("realestate");

            var filter = FilterDefinition<BsonDocument>.Empty;

            if (!string.IsNullOrEmpty(title))
            {
                filter = Builders<BsonDocument>.Filter.Regex("Title", new BsonRegularExpression(@"^" + title + ""));
            }
            var result = await collection.Find(filter).ToListAsync();

            var realEstates = new List<RealEstate>();

            result.ForEach(x => realEstates.Add(BsonSerializer.Deserialize<RealEstate>(x)));
            
            return realEstates;
        }
    }
}
