import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <a href="/">
    <img
      alt="logo"
      src="https://www.freepnglogos.com/uploads/logo-ifood-png/logo-client-ifood-hd-black-symbol-png-4.png"
      className="logo"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// Config Driven UI (Depends on area ... UI Driven by config file in Backend)

/* const config = [
  {
    type: "carousal",
    cards: [
      {
        offerName: "50% Off",
      },
      {
        offerName: "Delivery Charge Free",
      },
    ],
  },
  {
    type: "restaurants",
    cards: [
      {
        image:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/0e8f93a56b93e43d7627c2c21bc1106c",
        name: "Mc.Donalds",
        cuisines: ["Burgers", "Cafe", "Desserts"],
        rating: 4.5,
      },
      {
        image:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/0e8f93a56b93e43d7627c2c21bc1106c",
        name: "Mc.Donalds",
        cuisines: ["Burgers", "Cafe", "Desserts"],
        rating: 4.5,
      },
    ],
  },
]; */

const restaurantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "248739",
      name: "Le Arabia Restaurant",
      uuid: "79fd8917-cd0f-4fcb-b57a-c5d2e5ec716e",
      city: "61",
      area: "Palayam",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "ewknww32bzxwevh65ir7",
      cuisines: ["Chinese", "North Indian", "Ice Cream", "Biryani"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 42,
      minDeliveryTime: 42,
      maxDeliveryTime: 42,
      slaString: "42 MINS",
      lastMileTravel: 1.7999999523162842,
      slugs: {
        restaurant: "le-arabia-restaurant-beach-road-beach-road",
        city: "kozhikode",
      },
      cityState: "61",
      address:
        "opp. Bismi hypermarket, West Nadakkave, Vandipetta, Bilathikkulam, Kozhikode, Kerala 673006",
      locality: "Beach Road",
      parentId: 20320,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 1900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 1900,
        message: "",
        title: "Delivery Charge",
        amount: "1900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6227873~p=1~eid=00000186-ff87-b27d-207f-4c0f00ec0127",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "248739",
        deliveryTime: 42,
        minDeliveryTime: 42,
        maxDeliveryTime: 42,
        lastMileTravel: 1.7999999523162842,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.7",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "490981",
      name: "Top Form",
      uuid: "d5a64eeb-cdee-4131-a38d-9c1e06a1102c",
      city: "61",
      area: "Kuttichira",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "oc0bxdikyhvwbgmg6mo0",
      cuisines: ["Chinese", "North Indian", "South Indian", "Biryani"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 44,
      minDeliveryTime: 44,
      maxDeliveryTime: 44,
      slaString: "44 MINS",
      lastMileTravel: 0.8999999761581421,
      slugs: {
        restaurant: "top-form-mavoor-mavoor",
        city: "kozhikode",
      },
      cityState: "61",
      address:
        "7/63, GOLDEN PLAZA BUILDING, MAVOOR ROAD, PO HEAD POST OFFICE, KOZHIKODE( Kerala) 673001",
      locality: "Mavoor Road",
      parentId: 294469,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "10% off",
        shortDescriptionList: [
          {
            meta: "10% off | Use JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "10% off up to ₹100 on orders above ₹450 | Use code JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "10% OFF",
        shortDescriptionList: [
          {
            meta: "Use JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "10% off up to ₹100 on orders above ₹450 | Use code JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 1900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 1900,
        message: "",
        title: "Delivery Charge",
        amount: "1900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "490981",
        deliveryTime: 44,
        minDeliveryTime: 44,
        maxDeliveryTime: 44,
        lastMileTravel: 0.8999999761581421,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "481120",
      name: "Nahdi Kuzhimanthi",
      uuid: "a02c56c4-1760-4b33-8d95-63a52b95534e",
      city: "61",
      area: "Vellayil",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "oky2o28b1rraeglmyjjy",
      cuisines: ["Chinese"],
      tags: [],
      costForTwo: 49900,
      costForTwoString: "₹499 FOR TWO",
      deliveryTime: 39,
      minDeliveryTime: 39,
      maxDeliveryTime: 39,
      slaString: "39 MINS",
      lastMileTravel: 1.100000023841858,
      slugs: {
        restaurant: "nahdi-kuzhimanthi-beach-road-beach-road",
        city: "kozhikode",
      },
      cityState: "61",
      address:
        "62/829, NAHDI KUZHIMANTHI RC ROAD, MOONNALIKKAL NEAR CH HALL BEACH PO, KOZHIKODE KERALA - 673032",
      locality: "Red Cross Road",
      parentId: 251368,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "10% off",
        shortDescriptionList: [
          {
            meta: "10% off | Use PARTY",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "10% off | Use code PARTY",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "10% OFF",
        shortDescriptionList: [
          {
            meta: "Use PARTY",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "10% off | Use code PARTY",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 1900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 1900,
        message: "",
        title: "Delivery Charge",
        amount: "1900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "481120",
        deliveryTime: 39,
        minDeliveryTime: 39,
        maxDeliveryTime: 39,
        lastMileTravel: 1.100000023841858,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "85442",
      name: "Natural Ice cream",
      uuid: "cdef9886-0d22-4f87-9a17-41f63f3a9b98",
      city: "61",
      area: "Palayam",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "kie0ve2exhcu6dcu2chl",
      cuisines: ["Ice Cream", "Desserts"],
      tags: [],
      costForTwo: 15000,
      costForTwoString: "₹150 FOR TWO",
      deliveryTime: 37,
      minDeliveryTime: 37,
      maxDeliveryTime: 37,
      slaString: "37 MINS",
      lastMileTravel: 4.300000190734863,
      slugs: {
        restaurant: "natural-ice-cream-mavoor-road-test-calicut",
        city: "kozhikode",
      },
      cityState: "61",
      address:
        "DOOR NO 28/236A 1, GKW BUILDING,MAVOOR ROAD, POTTAMAMAL,CALICUT ? 673017",
      locality: "Mavoor Road",
      parentId: 2093,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2400,
        message: "",
        title: "Delivery Charge",
        amount: "2400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6101465~p=4~eid=00000186-ff87-b27d-207f-4c1000ec042f",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "85442",
        deliveryTime: 37,
        minDeliveryTime: 37,
        maxDeliveryTime: 37,
        lastMileTravel: 4.300000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.6",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "464673",
      name: "Soofi Mandi",
      uuid: "1c6355cb-0112-4a08-9ba1-06e35989fa02",
      city: "61",
      area: "Vellayil",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "mkevcwbgxz9kzq7himtu",
      cuisines: ["Chinese", "South Indian"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 46,
      minDeliveryTime: 46,
      maxDeliveryTime: 46,
      slaString: "46 MINS",
      lastMileTravel: 1.399999976158142,
      slugs: {
        restaurant: "soofi-mandi-beach-road-beach-road",
        city: "kozhikode",
      },
      cityState: "61",
      address:
        "61/201 KURRIAL LINE, NEAR BEACH FIRE STATION, , Kozhikkode South Circle, Kozhikode, Kerala, 673032",
      locality: "Mananchira",
      parentId: 20530,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "10% off",
        shortDescriptionList: [
          {
            meta: "10% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "10% off up to ₹40 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "10% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "10% off up to ₹40 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 1900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 1900,
        message: "",
        title: "Delivery Charge",
        amount: "1900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "464673",
        deliveryTime: 46,
        minDeliveryTime: 46,
        maxDeliveryTime: 46,
        lastMileTravel: 1.399999976158142,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "153273",
      name: "Hotel Sagar (Old Sagar)",
      uuid: "9509010d-581d-4758-933d-6f0fbaf26870",
      city: "61",
      area: "Kuttichira",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "rapy3ovwlb9rp5udsvcr",
      cuisines: [
        "Chinese",
        "North Indian",
        "South Indian",
        "Ice Cream",
        "Biryani",
      ],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 45,
      minDeliveryTime: 45,
      maxDeliveryTime: 45,
      slaString: "45 MINS",
      lastMileTravel: 0.8999999761581421,
      slugs: {
        restaurant: "hotel-sagar-mavoor-road-mavoor",
        city: "kozhikode",
      },
      cityState: "61",
      address:
        "Mavoor Road Near KSRTC Bus Stand, Mavoor Road Junction, Kozhikode, Kerala 673001",
      locality: "Mavoor Road",
      parentId: 20206,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 1900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 1900,
        message: "",
        title: "Delivery Charge",
        amount: "1900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "153273",
        deliveryTime: 45,
        minDeliveryTime: 45,
        maxDeliveryTime: 45,
        lastMileTravel: 0.8999999761581421,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.3",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "230155",
      name: "Sagar Restaurant (New Sagar)",
      uuid: "cb7b1b5c-cc06-4da5-8f46-367499f80c04",
      city: "61",
      area: "Palayam",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "sfazfve7qn0ybwbgrrhj",
      cuisines: [
        "Chinese",
        "North Indian",
        "South Indian",
        "Ice Cream",
        "Biryani",
      ],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 42,
      minDeliveryTime: 42,
      maxDeliveryTime: 42,
      slaString: "42 MINS",
      lastMileTravel: 1.899999976158142,
      slugs: {
        restaurant: "hotel-sagar-mavoor-mavoor",
        city: "kozhikode",
      },
      cityState: "61",
      address:
        "Mavoor Rd, Opp Big Bazar, Arayidathupalam, Kozhikode, Kerala 673004",
      locality: "Mavoor Road",
      parentId: 20195,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 1900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 1900,
        message: "",
        title: "Delivery Charge",
        amount: "1900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6180072~p=7~eid=00000186-ff87-b27d-207f-4c1100ec077a",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "230155",
        deliveryTime: 42,
        minDeliveryTime: 42,
        maxDeliveryTime: 42,
        lastMileTravel: 1.899999976158142,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.2",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "160737",
      name: "Zam Zam Restaurant",
      uuid: "b645916c-7981-4178-a364-e5597dfff40e",
      city: "61",
      area: "Vellayil",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "20c867a00224918971fbcd92583190fe",
      cuisines: [
        "Pastas",
        "Chinese",
        "North Indian",
        "South Indian",
        "Ice Cream",
        "Biryani",
      ],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 47,
      minDeliveryTime: 47,
      maxDeliveryTime: 47,
      slaString: "47 MINS",
      lastMileTravel: 1,
      slugs: {
        restaurant: "zam-zam-restaurant-beach-road-beach-road",
        city: "kozhikode",
      },
      cityState: "61",
      address:
        "Red Cross Rd, Opposite Tagore Hall, Vellayil, Kozhikode, Kerala 673032, India",
      locality: "Beach Road",
      parentId: 8883,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 1900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 1900,
        message: "",
        title: "Delivery Charge",
        amount: "1900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "160737",
        deliveryTime: 47,
        minDeliveryTime: 47,
        maxDeliveryTime: 47,
        lastMileTravel: 1,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.7",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
];

const RestuarantCard = () => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          restaurantList[0].data.cloudinaryImageId
        }
        alt="restuarant"
      />
      <h2>{restaurantList[0].data.name}</h2>
      <h3>{restaurantList[0].data.cuisines?.join(", ")}</h3>
      <h4>{restaurantList[0].data.avgRating} stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      <RestuarantCard />
      <RestuarantCard />
      <RestuarantCard />
      <RestuarantCard />
      <RestuarantCard />
      <RestuarantCard />
      <RestuarantCard />
    </div>
  );
};

const Footer = () => {
  return <h1>Footer</h1>;
};

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
