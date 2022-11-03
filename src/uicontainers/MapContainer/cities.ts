export enum TravelTypes {
  BUSINESS_TRIP = 'Business Trip',
  HOLIDAY = 'Holiday',
  SCHOOL = 'School',
}
export interface City {
  city: string;
  population: string;
  state: string;
  image: string;
  latitude: number;
  longitude: number;
  type: TravelTypes;
  description: string;
}

export const CITIES: City[] = [
  {
    city: 'New York',
    population: '8,175,133',
    image:
      'http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/240px-Above_Gotham.jpg',
    state: 'New York',
    latitude: 40.6643,
    longitude: -73.9385,
    type: TravelTypes.BUSINESS_TRIP,
    description:
      'New York is a city of diversity and dynamism. It is also a city of politics, economy and culture. It is even described as the economic and cultural capital of the world, and New York City is one of the most populous cities in the United States.',
  },
  {
    city: 'Los Angeles',
    population: '3,792,621',
    image:
      'http://upload.wikimedia.org/wikipedia/commons/thumb/5/57/LA_Skyline_Mountains2.jpg/240px-LA_Skyline_Mountains2.jpg',
    state: 'California',
    latitude: 34.0194,
    longitude: -118.4108,
    type: TravelTypes.HOLIDAY,
    description:
      'Los Angeles is known for its Mediterranean climate, ethnic and cultural diversity, Hollywood film industry, and sprawling metropolitan area. The city of Los Angeles lies in a basin in Southern California adjacent to the Pacific Ocean extending through the Santa Monica Mountains and into the San Fernando Valley.',
  },
  {
    city: 'Chicago',
    population: '2,695,598',
    image:
      'http://upload.wikimedia.org/wikipedia/commons/thumb/8/85/2008-06-10_3000x1000_chicago_skyline.jpg/240px-2008-06-10_3000x1000_chicago_skyline.jpg',
    state: 'Illinois',
    latitude: 41.8376,
    longitude: -87.6818,
    type: TravelTypes.SCHOOL,
    description:
      'The City of Chicago covers an area of 60,000 hectares and sits 176 meters (578 feet) above sea level on the southwestern shore of Lake Michigan. At 190 km wide and 495 km long, its the 5th largest body of fresh water in the world. The city is traversed by the Chicago and Calumet rivers.',
  },
  {
    city: 'Houston',
    population: '2,100,263',
    image:
      'http://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg/240px-Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg',
    state: 'Texas',
    latitude: 29.7805,
    longitude: -95.3863,
    type: TravelTypes.BUSINESS_TRIP,
    description:
      'Houston is the most diverse metropolitan area in Texas and has been described as the most racially and ethnically diverse major city in the U.S. It is home to many cultural institutions and exhibits, which attract more than seven million visitors a year to the Museum District.',
  },
  {
    city: 'Phoenix',
    population: '1,445,632',
    image:
      'http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Downtown_Phoenix_Aerial_Looking_Northeast.jpg/207px-Downtown_Phoenix_Aerial_Looking_Northeast.jpg',
    state: 'Arizona',
    latitude: 33.5722,
    longitude: -112.088,
    type: TravelTypes.HOLIDAY,
    description:
      "A phoenix is a mythical bird known for rising from its ashes. Don't try that at home! Accordingly to ancient legend, the phoenix is a bird that cyclically burns to death and is reborn from its own ashes. For this reason, the phoenix often serves as a symbol of renewal and rebirth.",
  },
  {
    city: 'Philadelphia',
    population: '1,526,006',
    image:
      'http://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Philly_skyline.jpg/240px-Philly_skyline.jpg',
    state: 'Pennsylvania',
    latitude: 40.0094,
    longitude: -75.1333,
    type: TravelTypes.SCHOOL,
    description:
      'Pennsylvania\'s largest city is known as the home of the Liberty Bell, Independence Hall and the "Rocky" statue. Philadelphia, a city in Pennsylvania whose name means City of Brotherly Love, was originally settled by Native American tribes, particularly the Lenape hunter gatherers, around 8000 B.C.',
  },
  {
    city: 'San Antonio',
    population: '1,327,407',
    image:
      'http://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Downtown_San_Antonio_View.JPG/240px-Downtown_San_Antonio_View.JPG',
    state: 'Texas',
    latitude: 29.4724,
    longitude: -98.5251,
    type: TravelTypes.BUSINESS_TRIP,
    description:
      'Seventh largest and one of the fastest growing cities in the U.S. Has the largest concentration of Spanish colonial architecture in North America, designated a UNESCO World Heritage Site, that includes five 18th century missions. The city also has the oldest active cathedral sanctuary in the U.S.',
  },
  {
    city: 'San Diego',
    population: '1,307,402',
    image:
      'http://upload.wikimedia.org/wikipedia/commons/thumb/5/53/US_Navy_110604-N-NS602-574_Navy_and_Marine_Corps_personnel%2C_along_with_community_leaders_from_the_greater_San_Diego_area_come_together_to_commemora.jpg/240px-US_Navy_110604-N-NS602-574_Navy_and_Marine_Corps_personnel%2C_along_with_community_leaders_from_the_greater_San_Diego_area_come_together_to_commemora.jpg',
    state: 'California',
    latitude: 32.8153,
    longitude: -117.135,
    type: TravelTypes.HOLIDAY,
    description:
      'San Diego is renowned for its idyllic climate, 70 miles of pristine beaches and a dazzling array of world-class family attractions. Popular attractions include the world-famous San Diego Zoo and San Diego Zoo Safari Park, SeaWorld San Diego and LEGOLAND California.',
  },
  {
    city: 'Dallas',
    population: '1,197,816',
    image:
      'http://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dallas_skyline_daytime.jpg/240px-Dallas_skyline_daytime.jpg',
    state: 'Texas',
    latitude: 32.7757,
    longitude: -96.7967,
    type: TravelTypes.SCHOOL,
    description:
      'As the ninth-largest city and part of the fourth-largest metropolitan area in the nation, Dallas covers approximately 343 square miles and has a population of 1,241,162. The ultra modern and sophisticated city attracts worldwide travelers, making the area the No. 1 visitor and leisure destination in Texas.',
  },
  {
    city: 'San Jose',
    population: '945,942',
    image:
      'http://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Downtown_San_Jose_skyline.PNG/240px-Downtown_San_Jose_skyline.PNG',
    state: 'California',
    latitude: 37.2969,
    longitude: -121.8193,
    type: TravelTypes.BUSINESS_TRIP,
    description:
      'San Jose [112] is a city located in California. Positioned in the northern part of the state in the Bay Area, it is often known as "The Capital of Silicon Valley", and is the largest city in the Bay Area and Northern California, the third largest city in the state, and the 10th largest city in America.',
  },
  {
    city: 'Austin',
    population: '790,390',
    image:
      'http://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Austin2012-12-01.JPG/240px-Austin2012-12-01.JPG',
    state: 'Texas',
    latitude: 30.3072,
    longitude: -97.756,
    type: TravelTypes.HOLIDAY,
    description:
      'Located in Central Texas on the eastern edge of the American Southwest, Austin is the capital of the state of Texas, the Lone Star State. The city dates back to the 1830s, when the first Anglo-American settlers arrived in the area, then part of Mexico.',
  },
  {
    city: 'Jacksonville',
    population: '821,784',
    image:
      'http://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Skyline_of_Jacksonville_FL%2C_South_view_20160706_1.jpg/240px-Skyline_of_Jacksonville_FL%2C_South_view_20160706_1.jpg',
    state: 'Florida',
    latitude: 30.337,
    longitude: -81.6613,
    type: TravelTypes.SCHOOL,
    description:
      "Jacksonville is a city located on the Atlantic coast of Florida, the most populous city in the state and is the largest city by area in the contiguous United States as of 2020. It is the seat of Duval County, with which the city government consolidated in 1968. Consolidation gave Jacksonville its great size and placed most of its metropolitan population within the city limits. As of 2020, Jacksonville's population is 949,611, making it the 12th most populous city in the U.S., the most populous city in the Southeast, and the most populous city in the South outside of the state of Texas. With a population of 1,733,937, the Jacksonville metropolitan area ranks as Florida's fourth-largest metropolitan region.",
  },
  {
    city: 'San Francisco',
    population: '805,235',
    image:
      'http://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/San_Francisco_skyline_from_Coit_Tower.jpg/240px-San_Francisco_skyline_from_Coit_Tower.jpg',
    state: 'California',
    latitude: 37.7751,
    longitude: -122.4193,
    type: TravelTypes.BUSINESS_TRIP,
    description:
      "San Francisco, city and port, coextensive with San Francisco county, northern California, U.S., located on a peninsula between the Pacific Ocean and San Francisco Bay. It is a cultural and financial centre of the western United States and one of the country's most cosmopolitan cities.",
  },
  {
    city: 'Columbus',
    population: '787,033',
    image:
      'http://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Columbus-ohio-skyline-panorama.jpg/240px-Columbus-ohio-skyline-panorama.jpg',
    state: 'Ohio',
    latitude: 39.9848,
    longitude: -82.985,
    type: TravelTypes.HOLIDAY,
    description:
      'Christopher Columbus was a navigator who explored the Americas under the flag of Spain. Some people think of him as the "discoverer" of America, but this is not strictly true. His voyages across the Atlantic paved the way for European colonization and exploitation of the Americas.',
  },
  {
    city: 'Indianapolis',
    population: '820,445',
    image:
      'http://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Downtown_indy_from_parking_garage_zoom.JPG/213px-Downtown_indy_from_parking_garage_zoom.JPG',
    state: 'Indiana',
    latitude: 39.7767,
    longitude: -86.1459,
    type: TravelTypes.SCHOOL,
    description:
      'Indianapolis, city, seat (1822) of Marion county and capital of Indiana, U.S. It lies on the White River at its confluence with Fall Creek, near the centre of the state. The city is built on a level plain surrounded by low, gently sloping hills.',
  },
  {
    city: 'Fort Worth',
    population: '741,206',
    image:
      'http://upload.wikimedia.org/wikipedia/commons/thumb/d/db/FortWorthTexasSkylineW.jpg/240px-FortWorthTexasSkylineW.jpg',
    state: 'Texas',
    latitude: 32.7795,
    longitude: -97.3463,
    type: TravelTypes.BUSINESS_TRIP,
    description:
      'Fort Worth — the most typically Texan of all Texas cities — began as a tiny outpost on a lonely frontier. Today, this metropolitan area of more than 900,000 people blends its cattle and oil heritage seamlessly with an ever-growing, diverse array of new businesses and industries.',
  },
  {
    city: 'Charlotte',
    population: '731,424',
    image:
      'http://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Charlotte_skyline45647.jpg/222px-Charlotte_skyline45647.jpg',
    state: 'North Carolina',
    latitude: 35.2087,
    longitude: -80.8307,
    type: TravelTypes.HOLIDAY,
    description:
      "Charlotte is one of the 25 largest cities in the U.S. and the largest city in North Carolina. Nicknamed the Queen City, Charlotte and its resident county are named in honor of Charlotte of Mecklenburg-Strelitz, the queen consort of British King George III during the time of the city's founding. ​",
  },
  {
    city: 'Seattle',
    population: '608,660',
    image:
      'http://upload.wikimedia.org/wikipedia/commons/thumb/3/36/SeattleI5Skyline.jpg/240px-SeattleI5Skyline.jpg',
    state: 'Washington',
    latitude: 47.6205,
    longitude: -122.3509,
    type: TravelTypes.SCHOOL,
    description:
      'Seattle is a bustling place that thrives with industrial, commercial, and cultural activity around the clock. Its waters teem with great oceangoing ships, its streets with automobiles, its rail lines with transcontinental freighters and passenger trains, and its skies with aircraft of every description.',
  },
  {
    city: 'Denver',
    population: '600,158',
    image:
      'http://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/DenverCP.JPG/240px-DenverCP.JPG',
    state: 'Colorado',
    latitude: 39.7618,
    longitude: -104.8806,
    type: TravelTypes.BUSINESS_TRIP,
    description:
      'Denver, city and county, capital of Colorado, U.S., at the western edge of the Great Plains, just east of the Front Range of the Rocky Mountains. The city and county were consolidated as a single administrative unit in 1902. Denver lies at the junction of Cherry Creek and the South Platte River. Its elevation (5,280 feet [1,609 metres] above sea level at the State Capitol), which gives it the nickname “Mile High City,” and a mild, sunny, dry climate are distinctive characteristics.',
  },
  {
    city: 'El Paso',
    population: '649,121',
    image:
      'http://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Downtown_El_Paso_at_sunset.jpeg/240px-Downtown_El_Paso_at_sunset.jpeg',
    state: 'Texas',
    latitude: 31.8484,
    longitude: -106.427,
    type: TravelTypes.HOLIDAY,
    description:
      'El Paso is located at the western tip of Texas, where Texas, New Mexico and Old Mexico meet! We are the largest international metroplex in the world where cultures and traditions blend seamlessly; from the historic Old West to the colors of Mexico, from the heritage of Native Americans to the beauty of our desert sun!',
  },
];
