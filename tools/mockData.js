const arts = [
  {
    id: 1,
  name: "Together Is Beautiful",
    medium: "Acrylic Art",
    price: 545,
    description:"Experience the beauty of unity and collaboration in the 'Together is Beautiful' artwork, crafted with vibrant acrylic hues",
    photo: "277667"
  },
  {
    id: 2,
    name: "We Stick Together",
    medium: "Acrylic Art",
    price: 445,
    description:"We Stick Together artwork celebrates unity and resilience through vibrant colors and interconnected shapes",
    photo: "462358"
  },
{
id: 3,
name: "A Rainy Day",
medium: "Acrylic Art",
price: 445,
description:"A Rainy Day captures the tranquility and beauty of nature as raindrops dance upon the earth, evoking a sense of peace and nostalgia",
photo: "259600"
},
{
id: 4,
name: "A Sunset At Sea",
medium: "Acrylic Art",
price: 445,
description:"Experience the tranquil beauty of A Sunset at Sea, an acrylic masterpiece capturing the serene hues of dusk over the ocean.",
photo: "534182"
},
{
id: 5,
name: "A Soul",
medium: "Acrylic Art",
price: 445,
description:"A captivating portrayal of feminine strength and grace, evoking emotions with every stroke",
photo: "164558"
}
];

const user=[
  {
    id: "lav@gmail.com",
  email: "lav@gmail.com",
  password:"lavs",
  username:"lavanya"
  }

];

const bids = [
  {
    id: 1,
    artId: 1,
    bidder: "Sonia Reading",
    amount: 200000
  },
  {
    id: 2,
    artId: 1,
    bidder: "Dick Johnson",
    amount: 202400
  },
  {
    id: 3,
    artId: 2,
    bidder: "Mohammed Vahls",
    amount: 302400
  },
  {
    id: 4,
    artId: 2,
    bidder: "Jane Williams",
    amount: 310500
  },
  {
    id: 5,
    artId: 2,
    bidder: "John Kepler",
    amount: 315400
  },
  {
    id: 6,
    artId: 3,
    bidder: "Bill Mentor",
    amount: 201000
  },
  {
    id: 7,
    artId: 4,
    bidder: "Melissa Kirk",
    amount: 410000
  },
  {
    id: 8,
    artId: 4,
    bidder: "Scott Max",
    amount: 450000
  },
  {
    id: 9,
    artId: 4,
    bidder: "Christine James",
    amount: 470000
  },
  {
    id: 10,
    artId: 5,
    bidder: "Omesh Carim",
    amount: 450000
  },
  {
    id: 11,
    artId: 5,
    bidder: "Charlotte Max",
    amount: 150000
  },
  {
    id: 12,
    artId: 5,
    bidder: "Marcus Scott",
    amount: 170000
  },
  {
    artId: 1,
    bidder: "Roland",
    amount: 203000,
    id: 13
  }
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};


// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  arts,
  bids,
  user
};
