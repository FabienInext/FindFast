using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FindFast.Domain
{
    // This project can output the Class library as a NuGet Package.
    // To enable this option, right-click on the project and select the Properties menu item. In the Build tab select "Produce outputs on build".
    public class RealEstate
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int Surface { get; set; }

        public RealEstate()
        {
        }
    }
}
