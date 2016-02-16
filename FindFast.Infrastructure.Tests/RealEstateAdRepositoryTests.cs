using FindFast.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace FindFast.Infrastructure.Tests
{
    // This project can output the Class library as a NuGet Package.
    // To enable this option, right-click on the project and select the Properties menu item. In the Build tab select "Produce outputs on build".
    public class RealEstateAdRepositoryTests
    {
        [Fact]
        public async void InsertTest()
        {
            var realEstate = new RealEstate
            {
                Title = "Test title",
                Description = "Test description",
                Price = 1234,
                Surface = 38
            };

            var repo = new RealEstateAdRepository();
            await repo.InsertAsync(realEstate);
            Assert.Equal(4, Add(2, 2));
        }

        [Fact]
        public async void GetAllTest()
        {
            var repo = new RealEstateAdRepository();
            var list = await repo.FindAllAsync();
            Assert.True(list.Count() > 0);
        }

        [Fact]
        public async void GetByTest()
        {
            //Test title
            var repo = new RealEstateAdRepository();
            var list = await repo.FindAllAsync("Ta");
            Assert.True(list.Count() > 0);
        }

        [Fact]
        public void FailingTest()
        {
            Assert.Equal(5, Add(2, 2));
        }

        int Add(int x, int y)
        {
            return x + y;
        }
    }
}
