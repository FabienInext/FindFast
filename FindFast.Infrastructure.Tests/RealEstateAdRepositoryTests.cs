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
        public async void DeleteTest()
        {
            var repo = new RealEstateAdRepository();
            await repo.DeleteByIdAsync("56c358000c26838894aac9a1");
            Assert.Equal(4, Add(2, 2));
        }

        [Fact]
        public async void InsertTest()
        {
            var realEstate = new RealEstate
            {
                Title = "VENTE APPARTEMENT 3 PIÈCES GAILLARD",
                Description = "Secteur très calme, à 2 minutes de la douane, au dernier étage, appartement atypique en duplex d'environ 70 m² utiles comprenant entrée avec placards, WC visiteur, lumineuse pièce à vivre avec balcon exposé Sud Est, belle vue dégagée, cuisine indépendante. A l'étage une chambre avec placards, une salle de bains, une mezzanine pouvant servir de chambre ou de bureau. Une cave et 2 places de parkings.",
                Price = 243000,
                Surface = 70
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
