const { Product } = require('./schema.js')

var productArr = [
  {
    id: 1,
    name: "I love bears",
    category: "cat",
    description: "Lorem ipsum dolor sit amet, nam no lorem ludus dicunt, purto natum idque eu qui. Ad partem commodo cum, labore mollis ut sed, eos atqui legimus accusamus id. Eu melius probatus inimicus nec. Wisi inermis delectus at qui, vix ea putent tacimates. Eam eu illum solet officiis, ius adhuc consequuntur ea, labore verear luptatum in mei. In vis verterem laboramus assentior, ius quod impetus praesent no.",
    images: ["https://petfashion.s3.us-east-2.amazonaws.com/cat01-1.png", "https://petfashion.s3.us-east-2.amazonaws.com/cat01-2.png", "https://petfashion.s3.us-east-2.amazonaws.com/cat01-3.png","https://petfashion.s3.us-east-2.amazonaws.com/cat01-large.png", "https://petfashion.s3.us-east-2.amazonaws.com/product01-front.png", "https://petfashion.s3.us-east-2.amazonaws.com/product01-back.png"],
    price: 69,
    sizes: ["xs", "s", "m", "l", "xl"],
  },
  {
    id: 2,
    name: "I love bears",
    category: "dog",
    description: "Lorem ipsum dolor sit amet, nam no lorem ludus dicunt, purto natum idque eu qui. Ad partem commodo cum, labore mollis ut sed, eos atqui legimus accusamus id. Eu melius probatus inimicus nec. Wisi inermis delectus at qui, vix ea putent tacimates. Eam eu illum solet officiis, ius adhuc consequuntur ea, labore verear luptatum in mei. In vis verterem laboramus assentior, ius quod impetus praesent no.",
    images: ["https://petfashion.s3.us-east-2.amazonaws.com/dog01-1.png", "https://petfashion.s3.us-east-2.amazonaws.com/dog01-2.png", "https://petfashion.s3.us-east-2.amazonaws.com/dog01-3.png", "https://petfashion.s3.us-east-2.amazonaws.com/dog01-large.png","https://petfashion.s3.us-east-2.amazonaws.com/product01-front.png", "https://petfashion.s3.us-east-2.amazonaws.com/product01-back.png"],
    price: 69,
    sizes: ["xs", "s", "m", "l", "xl"],
  },
  {
    id: 3,
    name: "Good luck hooman",
    category: "cat",
    description: "Lorem ipsum dolor sit amet, nam no lorem ludus dicunt, purto natum idque eu qui. Ad partem commodo cum, labore mollis ut sed, eos atqui legimus accusamus id. Eu melius probatus inimicus nec. Wisi inermis delectus at qui, vix ea putent tacimates. Eam eu illum solet officiis, ius adhuc consequuntur ea, labore verear luptatum in mei. In vis verterem laboramus assentior, ius quod impetus praesent no.",
    images: ["https://petfashion.s3.us-east-2.amazonaws.com/cat02-1.png","https://petfashion.s3.us-east-2.amazonaws.com/cat02-2.png","https://petfashion.s3.us-east-2.amazonaws.com/cat02-3.png","https://petfashion.s3.us-east-2.amazonaws.com/cat02-large.png",  "https://petfashion.s3.us-east-2.amazonaws.com/product02-back.png","https://petfashion.s3.us-east-2.amazonaws.com/product02-front.png"],
    price: 89,
    sizes: ["xs", "s", "m", "l", "xl"],
  },
  {
    id: 4,
    name: "Good luck hooman",
    category: "dog",
    description: "Lorem ipsum dolor sit amet, nam no lorem ludus dicunt, purto natum idque eu qui. Ad partem commodo cum, labore mollis ut sed, eos atqui legimus accusamus id. Eu melius probatus inimicus nec. Wisi inermis delectus at qui, vix ea putent tacimates. Eam eu illum solet officiis, ius adhuc consequuntur ea, labore verear luptatum in mei. In vis verterem laboramus assentior, ius quod impetus praesent no.",
    images: ["https://petfashion.s3.us-east-2.amazonaws.com/dog02-1.png","https://petfashion.s3.us-east-2.amazonaws.com/dog02-2.png","https://petfashion.s3.us-east-2.amazonaws.com/dog02-3.png","https://petfashion.s3.us-east-2.amazonaws.com/dog02-large.png","https://petfashion.s3.us-east-2.amazonaws.com/product02-back.png","https://petfashion.s3.us-east-2.amazonaws.com/product02-front.png"],
    price: 89,
    sizes: ["xs", "s", "m", "l", "xl"],
  },
];

Product.insertMany(productArr, (err, result) => {
  if(err) {
    console.log(err)
  } else {
    console.log('data array saved')
  }
})
