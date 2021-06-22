import * as types from "./../Constant/ActionTypes";

var inititalState = [
  {
    imageXL:
      "https://www.aorus.com/image/banner/Performance%20Above%20All-1620383654.jpg",
    image:
      "https://www.aorus.com/image/banner/Performance%20Above%20All-1620383663.jpg",
    positionCaption: "caption-center text-center",
    title: "Performance above All",
    description: "AORUS & AERO Laptop With 11th Gen Intel Core H-series",
  },
  {
    imageXL: "https://www.aorus.com/image/banner/Model%20X-1620613780.jpg",
    image: "https://www.aorus.com/image/banner/Model%20X-1620613784.jpg",
    positionCaption: "caption-right text-center",
    title: "Model X",
    description: "Ultimate AORUS",
  },
  {
    imageXL:
      "https://www.aorus.com/image/banner/Outriders-bundle-1620200415.jpg",
    image: "https://www.aorus.com/image/banner/Outriders-bundle-1620192485.jpg",
    positionCaption: "caption-center text-center",
    title: "GEAR UP WITH AORUS",
    description: "BUY an AORUS MONITOR OR MOTHERBOARD, GET OUTRIDERS FOR FREE*",
  },
  {
    imageXL:
      "https://www.aorus.com/image/banner/4K%20Pro%20Gaming%20On!-1618310720.jpg",
    image:
      "https://www.aorus.com/image/banner/4K%20Pro%20Gaming%20On!-1618278432.jpg",
    positionCaption: "caption-center text-center",
    title: "4K Pro Gaming On!",
    description: "GIGABYTE AORUS 4K Monitors - Ready for New-Gen Console",
  },
  {
    imageXL:
      "https://www.aorus.com/image/banner/How%20to%20build%20a%20PC-1616999865.jpg",
    image:
      "https://www.aorus.com/image/banner/How%20to%20build%20a%20PC-1617271762.jpg",
    positionCaption: "caption-left text-center",
    title: "HOW TO BUILD A PC",
    description: "BUILDING YOUR OWN PC IS THAT SIMPLE",
  },
  {
    imageXL:
      "https://www.aorus.com/image/banner/AORUS%20Gallery-1617163008.jpg",
    image: "https://www.aorus.com/image/banner/AORUS%20Gallery-1617163014.jpg",
    positionCaption: "caption-left text-center",
    title: "AORUS  Gallery",
    description: "#PoweredbyAORUS",
  },
  {
    imageXL:
      "https://www.aorus.com/image/banner/Z590_THE_BEST_FOR_THE_PRO-1616039837.jpg",
    image:
      "https://www.aorus.com/image/banner/Z590_THE_BEST_FOR_THE_PRO-1616053366.jpg",
    positionCaption: "caption-center text-center",
    title: "THE BEST FOR THE PRO",
    description: "AORUS Z590  GAMING MOTHERBOARDS",
  },
];

const slider = (state = inititalState, action) => {
  switch (action.type) {
    case types.BANNER_SLIDES:
      return [...state];
    default:
      return [...state];
  }
};
export default slider;
