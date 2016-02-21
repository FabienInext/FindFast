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
            
        [HttpPost("Insert")]
        public async Task<ActionResult> Post([FromBody]RealEstate value)
        {
            await _realEstateAdRepository.InsertAsync(value);

            return Json(new { Foo = "bar" });
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

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
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
