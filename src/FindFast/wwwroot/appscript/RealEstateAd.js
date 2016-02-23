System.register([], function(exports_1) {
    var RealEstateAd;
    return {
        setters:[],
        execute: function() {
            RealEstateAd = (function () {
                function RealEstateAd(id, title, description, price, surface) {
                    this.id = id;
                    this.title = title;
                    this.description = description;
                    this.price = price;
                    this.surface = surface;
                }
                return RealEstateAd;
            })();
            exports_1("RealEstateAd", RealEstateAd);
        }
    }
});
//# sourceMappingURL=realEstateAd.js.map