let Product = [
  {
    number: 1,
    type: "Single Origin",
    name: "WHITE TEA SILVER NEEDLE",
    ings: ["White tea"],
    highlight: "Light • Relaxing • Soft",
    brew: ["1 teaspoon (2 g)", "200-250 mL", "80 C", "3-4 mins"],
    desc: "The finest tea bud with a sweet aroma and a delicate taste. Harvested before sunrise to its preserve aroma, taste, and nutrients. Best consumed in the evening or when stressed to get a calming effect.",
  },
  {
    number: 2,
    type: "Tea Blend",
    name: "ROMANCE DAWN",
    ings: ["White tea", ", osmanthus"],
    highlight: "Floral • Sweet • Mild",
    brew: ["1 teaspoon (2 g)", "200-250 mL", "80 C", "3-4 mins"],
    desc: "The dawn (start) of a romantic adventure. Harvested only before dawn, this combination of white tea and osmanthus symbolise the beginning of a tales full of romance and a neverending adventure",
  },
  {
    number: 3,
    type: "Tea Blend",
    name: "MINTY CALM",
    ings: ["Green tea", ", peppermint"],
    highlight: "Menthol Fresh • Mint • Mild",
    brew: ["1 teaspoon (2 g)", "200-250 mL", "80 C", "2-3 mins"],
    desc: "A blend of green tea and peppermint, which rich in antioxidants and antibacterials to help quelling the unrest.",
  },
  {
    number: 4,
    type: "Single Origin",
    name: "YELLOW TEA",
    ings: ["Yellow Tea"],
    highlight: "Sweet • Nutty • Light",
    brew: ["1 teaspoon (2 g)", "200-250 mL", "80 C", "3-5 mins"],
    desc: "A combination of a sweet and mellow flavor. Packed with antioxidants and benefical for cell rejuvenation. One of the rarest tea variety",
  },
  {
    number: 5,
    type: "Single Origin",
    name: "BLACK TEA RENGGANIS",
    ings: ["Black Tea"],
    highlight: "Rich • Mood Booster • Bold",
    brew: ["10 teaspoon (2 g)", "200-250 mL", "100 C", "4-5 mins"],
    desc: "A strong black tea with herb aftertaste originated from the south of Bandung. Contain the highest caffeine level, with the benefit of fixing blood circulation",
  },
  {
    number: 6,
    type: "Tea Blend",
    name: "REMEDY",
    ings: ["Black Tea", ", ginger", ", lemongrass", ", clove"],
    highlight: "Aromatic • Spicy • Bold",
    brew: ["1 teaspoon (2 g)", "200-250 mL", "100 C", "4-5 mins"],
    desc: "Tea blends with a touch of local wisdom. A mixture of black tea, ginger, lemongrass and cloves which are aromatic and rich in benefits to accompany you when you are not feeling well",
  },
  {
    number: 7,
    type: "Tea Blend",
    name: "NIGHTHAWKS",
    ings: ["Green Tea", ", jasmine"],
    highlight: "Fragrant • Bittersweet • Mild",
    brew: ["1 teaspoon (2 g)", "200-250 mL", "80 C", "2-3 mins"],
    desc: "Inspired by the painting  'Nighthawks' painted by Edward Hopper in 1942, a painting depicting alienation and loneliness in modern urban life. This green tea and jasmine flower blend is crafted in hopes to be an accompainment to overcome the alienation and loneliness feeling",
  },
  {
    number: 8,
    type: "Tea Blend",
    name: "DARK OPIUM",
    ings: ["Black tea", ", globe amaranth", ", cornflower", ", flavour extract", ", rosebud"],
    highlight: "Sweet • Fruity • Heavy",
    brew: ["1 teaspoon (2 g)", "200-250 mL", "100 C", "3-5 mins"],
    desc: "Deep, dark, mysterious, & grand. A combination of black tea with various flower to help you falling in love",
  },
  {
    number: 9,
    type: "Single Origin",
    name: "MATCHA",
    ings: ["Green Tea"],
    highlight: "Grassy • Bittersweet • Mild",
    brew: ["(1 g)", "100 mL", "80 C", "20 sec"],
    desc: "During warring states era, Samurai (japanede warrior) often drink matcha to heighten their focus and battle sense before going to war. Due to increase in adrenaline level, their fighting spirits also reached it speak",
  },
  {
    number: 10,
    type: "Single Origin",
    name: "BLACK TEA SPECIAL",
    ings: ["Black Tea"],
    highlight: "Sweet • Honey • Mild",
    brew: ["1 teaspoon (2 g)", "200-250 mL", "100 C", "4-5 mins"],
    desc: "A fully oxidized tea with a sweet taste and honey note.  Your best friend in the morning to boost your mood and be more focused",
  },
  {
    number: 11,
    type: "Tea Blend",
    name: "CHEERFUL BERRY",
    ings: ["Black tea", ", hibiscus", ", dried berry"],
    highlight: "Fruity • Berry Sweet • Mild",
    brew: ["1 teaspoon (2 g)", "200-250 mL", "100 C", "4-5 mins"],
    desc: "Sweet and sour, to cheer your day. A blend of black tea with hibiscus and dried berry perfect to make your day more cheerful",
  },
  {
    number: 12,
    type: "Tea Blend",
    name: "SWEET SUMMER",
    ings: ["Green Tea", ", chamomile"],
    highlight: "Floral • Sweet • Mild",
    brew: ["1 teaspoon (2 g)", "200-250 mL", "80 C", "2-3 mins"],
    desc: "As sweet as summer as you. Combining the benefits of green tea and the sweet aroma and taste of chamomile flowers, this is the perfect companion for your date",
  },
  {
    number: 13,
    type: "Tea Blend",
    name: "SCARLETT",
    ings: ["Green Tea", ", hibiscus", ", blueberry", ", mango", ", safflower", ", flavor extract", ", myosotis petal"],
    highlight: "Fresh • Tangy • Bright",
    brew: ["1 teaspoon (2 g)", "200-250 mL", "90 C", "2-3 mins"],
    desc: "Imagine it's Saturday morning where you wake up fresh and ready for your weekend. Put on your best dress or dance to your favorite tune while sipping on Scarlett to boost your weekend moods!",
  },
  {
    number: 14,
    type: "Tea Blend",
    name: "MORNING SPIRIT",
    ings: ["Green Tea", ", rose petal", ", myosotis petal", ", flavour extract"],
    highlight: "Fruity • Tropical • Medium",
    brew: ["1 teaspoon (2 g)", "200-250 mL", "90 C", "2-3 mins"],
    desc: "Feel the morning in your cup every time you need it! Green Tea with various flowers & a dash of morning",
  },
  {
    number: 15,
    type: "Single Origin",
    name: "LIGHT OOLONG TEA",
    ings: ["Light Oolong"],
    highlight: "Earthy • Refreshing • Mild",
    brew: ["1 teaspoon (2 g)", "200-250 mL", "100 C", "4-5 mins"],
    desc: "A semi oxidation tea with a delicate, yet complex flavor. Has a pale yellow color when brewed, slight bitterness, and pleasant lasting aftertaste",
  },
  {
    number: 16,
    type: "Single Origin",
    name: "BLACK TEA ROYAL",
    ings: ["Black tea"],
    highlight: "Sweet • Fruity • Mild",
    brew: ["1 teaspoon (2 g)", "200-250 mL", "100 C", "4-5 mins"],
    desc: "Full bodied black tea with a sweet taste and fruity note. Has a nice amber color when brewed",
  },
  {
    number: 17,
    type: "Tea Blend",
    name: "EARL GREY",
    ings: ["Black Tea", ", bergamot oil", ", rosemary", ", lavender"],
    highlight: "Fragrant • Lemon-y • Mild",
    brew: ["1 teaspoon (2 g)", "200-250 mL", "100 C", "4-5 mins"],
    desc: "A classic tea blend beloved by many from 1824 and named after Charles Grey, 2nd Earl Grey, British Prime Minister in the 1830s. The combination of black tea, bergamot oil, and lavender gives the impression of elegance and luxury, and makes this tea one of the prima donnas in all parts of the world",
  },
  {
    number: 18,
    type: "Tea Blend",
    name: "ROYAL TAMANSARI",
    ings: ["Green Tea", ", champaka", ", cananga", ", jasmine", ", pandan", ", flavor extract"],
    highlight: "Floral • Tropical • Light",
    brew: ["1 teaspoon (2 g)", "200-250 mL", "80 C", "2-3 mins"],
    desc: "This masterfully crafted green tea with Indonesian flowers blend is an homage to Yogyakarta's Taman Sari bathing complex. The combination of green tea, exotic flowers and pandan leaves will make you feel like royalty from the very first sip",
  },
  {
    number: 19,
    type: "Single Origin",
    name: "GREEN TEA SPECIAL",
    ings: ["Green Tea"],
    highlight: "Earthy • Bittersweet • Mild",
    brew: ["1 teaspoon (2 g)", "200-250 mL", "80 C", "2-3 mins"],
    desc: "Mild aroma tea with a hints of soft seaweed. Richbin fibers, flavonoids, and low in caffeine. Helps maintain cholesterol levels, and surpressing overeating desire",
  },
  {
    number: 20,
    type: "Tea Blend",
    name: "COMFY CACAO",
    ings: ["Black tea", ", cacao nibs", ", sugar beads", ", vanilla essence"],
    highlight: "Sweet • Bittersweet • Mild",
    brew: ["1 teaspoon (2 g)", "200-250 mL", "100 C", "4-5 mins"],
    desc: "Inspired by one of the hot drinks that is always available at the Weihnachtsmarkt (Christmas Market) in Germany, hot chocolate",
  },
  {
    number: 21,
    type: "Tea Blend",
    name: "OHARA",
    ings: ["Black Tea", ", strawberry", ", orange peel", ", safflower", ", flavour extraxt"],
    highlight: "Berry • Citrus • Medium",
    brew: ["1 teaspoon (2 g)", "200-250 mL", "100 C", "3-5 mins"],
    desc: "A great accompaniment for book indulger. A mixture of Black tea with strawberry & orange peel",
  },
  {
    number: 22,
    type: "Single Origin",
    name: "DARK OOLONG TEA",
    ings: ["Dark Oolong"],
    highlight: "Smoky • Nutty • Heavy",
    brew: ["1 teaspoon (2 g)", "200-250 mL", "100 C", "4-5 mins"],
    desc: "A semi oxidation tea with a heavy and umami flavor. Legends said that the name Oolong is derived from its shape that looks like a black dragon (wulong in Chinese)",
  },
  {
    number: 23,
    type: "Tea Blend",
    name: "WHIMSICAL MANGO",
    ings: ["Green tea", ", chili", ", mango essence"],
    highlight: "Fruity • Spicy • Bright",
    brew: ["1 teaspoon (2 g)", "200-250 mL", "80 C", "3-5 mins"],
    desc: "Feeling whimsical, we crafted tea, that is spicy. Why? Just for fun",
  },
  {
    number: 24,
    type: "Tea Blend",
    name: "MINT ICE CREAM",
    ings: ["Black Tea", ", spearmint", ", cornflower", ", myosotis petal", ", flavour extract"],
    highlight: "Mint • Cream • Heavy",
    brew: ["1 teaspoon (2 g)", "200-250 mL", "100 C", "3-5 mins"],
    desc: "Contradiction in a cup. Black tea with sensation of Mint Ice Cream",
  },
  {
    number: 25,
    type: "Tea Blend",
    name: "NUSANTARA",
    ings: ["Black Tea", ", coffee bean", ", cornflower", ", flavor extract"],
    highlight: "Bitter • Nutty • Bold",
    brew: ["1 teaspoon (2 g)", "200-250 mL", "100 C", "3-5 mins"],
    desc: "Tea, coffee, or me? Alternative for those who doesn't drink coffee anymore",
  },
];

export function getProduct() {
  return Product;
}

export function getProducts(number) {
  return Product.find((Product) => Product.number === number);
}