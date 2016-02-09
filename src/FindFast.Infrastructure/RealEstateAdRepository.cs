using FindFast.Domain;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace FindFast.Infrastructure
{
    public class RealEstateAdRepository
    {
        protected static IMongoClient _client;
        protected static IMongoDatabase _database;

        public RealEstateAdRepository()
        {
            _client = new MongoClient();
            _database = _client.GetDatabase("FindFast");

            var document = new BsonDocument
{
    { "address" , new BsonDocument
        {
            { "street", "2 Avenue" },
            { "zipcode", "10075" },
            { "building", "1480" },
            { "coord", new BsonArray { 73.9557413, 40.7720266 } }
        }
    },
    { "borough", "Manhattan" },
    { "cuisine", "Italian" },
    { "grades", new BsonArray
        {
            new BsonDocument
            {
                { "date", new DateTime(2014, 10, 1, 0, 0, 0, DateTimeKind.Utc) },
                { "grade", "A" },
                { "score", 11 }
            },
            new BsonDocument
            {
                { "date", new DateTime(2014, 1, 6, 0, 0, 0, DateTimeKind.Utc) },
                { "grade", "B" },
                { "score", 17 }
            }
        }
    },
    { "name", "Vella" },
    { "restaurant_id", "41704620" }
};

            var collection = _database.GetCollection<BsonDocument>("realestate");
            var realEstate = new RealEstate {
             Title = "Test title",
             Description = "Test description",
            Price = 1234,
            Surface = 38}
           ;
            collection.InsertOne(realEstate.ToBsonDocument());

        }
    }
}
