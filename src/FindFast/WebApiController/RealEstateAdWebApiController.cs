using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using FindFast.Domain;
using FindFast.Infrastructure;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace FindFast.WebApiController
{
    [Route("api/realestatead")]
    public class RealEstateAdWebApiController : Controller
    {
        public class RealEstateDto
        {   
            public string Title { get; set; }
            public string Description { get; set; }
            public decimal Price { get; set; }
            public int Surface { get; set; }

            public RealEstateDto()
            {
            }
        }

        private IRealEstateAdRepository _realEstateAdRepository;

        public RealEstateAdWebApiController(IRealEstateAdRepository realEstateRepository)
        {
            _realEstateAdRepository = realEstateRepository;
        }

        [HttpGet("GetAll")]
        public async Task<IEnumerable<RealEstate>> GetAll()
        {
            return await _realEstateAdRepository.FindAllAsync();
        }

        [HttpDelete("Delete")]
        public async Task<ActionResult> DeleteBy(string id)
        {
            await _realEstateAdRepository.DeleteByIdAsync(id);

            return Json(new { Status = "OK" });
        }

        [HttpPost("Insert")]
        public async Task<ActionResult> Post([FromBody]RealEstateDto value)
        {
            var realEstateAd = new RealEstate
            {
                 Title = value.Title,
                 Description = value.Description,
                 Surface = value.Surface,
                 Price = value.Price
            };
            await _realEstateAdRepository.InsertAsync(realEstateAd);

            return Json(realEstateAd);
        }

        [HttpGet("GetBy/{term}")]
        public async Task<IEnumerable<RealEstate>> GetBy(string term)
        {
            return await _realEstateAdRepository.FindAllAsync(term);
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

      

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
