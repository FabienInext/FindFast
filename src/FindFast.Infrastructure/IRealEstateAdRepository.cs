﻿using System.Collections.Generic;
using System.Threading.Tasks;
using FindFast.Domain;

namespace FindFast.Infrastructure
{
    public interface IRealEstateAdRepository
    {
        Task<IEnumerable<RealEstate>> FindAllAsync(string title = null);
        Task InsertAsync(RealEstate realEstate);
        Task DeleteByIdAsync(string id);
    }
}