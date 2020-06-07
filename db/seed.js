const { Product, User } = require('./schema.js')

// var productArr = [
//   {
//     id: 1,
//     name: "BEAR LOVER SHIRT",
//     category: "cat",
//     description: "Lorem ipsum dolor sit amet, nam no lorem ludus dicunt, purto natum idque eu qui. Ad partem commodo cum, labore mollis ut sed, eos atqui legimus accusamus id. Eu melius probatus inimicus nec. Wisi inermis delectus at qui, vix ea putent tacimates. Eam eu illum solet officiis, ius adhuc consequuntur ea, labore verear luptatum in mei. In vis verterem laboramus assentior, ius quod impetus praesent no.",
//     images: ["https://petfashion.s3.us-east-2.amazonaws.com/cat01-1.png", "https://petfashion.s3.us-east-2.amazonaws.com/cat01-2.png", "https://petfashion.s3.us-east-2.amazonaws.com/cat01-3.png", "https://petfashion.s3.us-east-2.amazonaws.com/product01-front.png", "https://petfashion.s3.us-east-2.amazonaws.com/product01-back.png"],
//     price: 69,
//     sizes: ["xs", "s", "m", "l", "xl"],
//   },
//   {
//     id: 2,
//     name: "BEAR LOVER SHIRT",
//     category: "dog",
//     description: "Lorem ipsum dolor sit amet, nam no lorem ludus dicunt, purto natum idque eu qui. Ad partem commodo cum, labore mollis ut sed, eos atqui legimus accusamus id. Eu melius probatus inimicus nec. Wisi inermis delectus at qui, vix ea putent tacimates. Eam eu illum solet officiis, ius adhuc consequuntur ea, labore verear luptatum in mei. In vis verterem laboramus assentior, ius quod impetus praesent no.",
//     images: ["https://petfashion.s3.us-east-2.amazonaws.com/dog01-1.png", "https://petfashion.s3.us-east-2.amazonaws.com/dog01-2.png", "https://petfashion.s3.us-east-2.amazonaws.com/dog01-3.png","https://petfashion.s3.us-east-2.amazonaws.com/product01-front.png", "https://petfashion.s3.us-east-2.amazonaws.com/product01-back.png"],
//     price: 69,
//     sizes: ["xs", "s", "m", "l", "xl"],
//   },
//   {
//     id: 3,
//     name: "GOOD LUCK SHIRT",
//     category: "cat",
//     description: "Lorem ipsum dolor sit amet, nam no lorem ludus dicunt, purto natum idque eu qui. Ad partem commodo cum, labore mollis ut sed, eos atqui legimus accusamus id. Eu melius probatus inimicus nec. Wisi inermis delectus at qui, vix ea putent tacimates. Eam eu illum solet officiis, ius adhuc consequuntur ea, labore verear luptatum in mei. In vis verterem laboramus assentior, ius quod impetus praesent no.",
//     images: ["https://petfashion.s3.us-east-2.amazonaws.com/cat02-1.png","https://petfashion.s3.us-east-2.amazonaws.com/cat02-2.png","https://petfashion.s3.us-east-2.amazonaws.com/cat02-3.png", "https://petfashion.s3.us-east-2.amazonaws.com/product02-back.png","https://petfashion.s3.us-east-2.amazonaws.com/product02-front.png"],
//     price: 89,
//     sizes: ["xs", "s", "m", "l", "xl"],
//   },
//   {
//     id: 4,
//     name: "GOOD LUCK SHIRT",
//     category: "dog",
//     description: "Lorem ipsum dolor sit amet, nam no lorem ludus dicunt, purto natum idque eu qui. Ad partem commodo cum, labore mollis ut sed, eos atqui legimus accusamus id. Eu melius probatus inimicus nec. Wisi inermis delectus at qui, vix ea putent tacimates. Eam eu illum solet officiis, ius adhuc consequuntur ea, labore verear luptatum in mei. In vis verterem laboramus assentior, ius quod impetus praesent no.",
//     images: ["https://petfashion.s3.us-east-2.amazonaws.com/dog02-1.png","https://petfashion.s3.us-east-2.amazonaws.com/dog02-2.png","https://petfashion.s3.us-east-2.amazonaws.com/dog02-3.png","https://petfashion.s3.us-east-2.amazonaws.com/product02-back.png","https://petfashion.s3.us-east-2.amazonaws.com/product02-front.png"],
//     price: 89,
//     sizes: ["xs", "s", "m", "l", "xl"],
//   },
//   {
//     id: 5,
//     name: "BLACK TREE SHIRT",
//     category: "cat",
//     description: "Lorem ipsum dolor sit amet, nam no lorem ludus dicunt, purto natum idque eu qui. Ad partem commodo cum, labore mollis ut sed, eos atqui legimus accusamus id. Eu melius probatus inimicus nec. Wisi inermis delectus at qui, vix ea putent tacimates. Eam eu illum solet officiis, ius adhuc consequuntur ea, labore verear luptatum in mei. In vis verterem laboramus assentior, ius quod impetus praesent no.",
//     images: [  "https://petfashion.s3.us-east-2.amazonaws.com/cat03-1.png",
//     "https://petfashion.s3.us-east-2.amazonaws.com/cat03-2.png",
//     "https://petfashion.s3.us-east-2.amazonaws.com/cat03-3.png",  "https://petfashion.s3.us-east-2.amazonaws.com/product03-back.png",
//     "https://petfashion.s3.us-east-2.amazonaws.com/product03-front.png",],
//     price: 109,
//     sizes: ["xs", "s", "m", "l", "xl"],
//   },
//   {
//     id: 6,
//     name: "BLACK TREE SHIRT",
//     category: "dog",
//     description: "Lorem ipsum dolor sit amet, nam no lorem ludus dicunt, purto natum idque eu qui. Ad partem commodo cum, labore mollis ut sed, eos atqui legimus accusamus id. Eu melius probatus inimicus nec. Wisi inermis delectus at qui, vix ea putent tacimates. Eam eu illum solet officiis, ius adhuc consequuntur ea, labore verear luptatum in mei. In vis verterem laboramus assentior, ius quod impetus praesent no.",
//     images: [  "https://petfashion.s3.us-east-2.amazonaws.com/dog03-1.png",
//     "https://petfashion.s3.us-east-2.amazonaws.com/dog03-2.png",
//     "https://petfashion.s3.us-east-2.amazonaws.com/dog03-3.png", "https://petfashion.s3.us-east-2.amazonaws.com/product03-back.png",
//     "https://petfashion.s3.us-east-2.amazonaws.com/product03-front.png",],
//     price: 109,
//     sizes: ["xs", "s", "m", "l", "xl"],
//   },
//   {
//     id: 7,
//     name: "MERRY ME SHIRT",
//     category: "cat",
//     description: "Lorem ipsum dolor sit amet, nam no lorem ludus dicunt, purto natum idque eu qui. Ad partem commodo cum, labore mollis ut sed, eos atqui legimus accusamus id. Eu melius probatus inimicus nec. Wisi inermis delectus at qui, vix ea putent tacimates. Eam eu illum solet officiis, ius adhuc consequuntur ea, labore verear luptatum in mei. In vis verterem laboramus assentior, ius quod impetus praesent no.",
//     images: [ "https://petfashion.s3.us-east-2.amazonaws.com/cat04-1.png",
//     "https://petfashion.s3.us-east-2.amazonaws.com/cat04-2.png",
//     "https://petfashion.s3.us-east-2.amazonaws.com/cat04-3.png", "https://petfashion.s3.us-east-2.amazonaws.com/product04-back.png",
//     "https://petfashion.s3.us-east-2.amazonaws.com/product04-front.png"],
//     price: 129,
//     sizes: ["xs", "s", "m", "l", "xl"],
//   },
//   {
//     id: 8,
//     name: "MERRY ME SHIRT",
//     category: "dog",
//     description: "Lorem ipsum dolor sit amet, nam no lorem ludus dicunt, purto natum idque eu qui. Ad partem commodo cum, labore mollis ut sed, eos atqui legimus accusamus id. Eu melius probatus inimicus nec. Wisi inermis delectus at qui, vix ea putent tacimates. Eam eu illum solet officiis, ius adhuc consequuntur ea, labore verear luptatum in mei. In vis verterem laboramus assentior, ius quod impetus praesent no.",
//     images: [ "https://petfashion.s3.us-east-2.amazonaws.com/dog04-1.png",
//     "https://petfashion.s3.us-east-2.amazonaws.com/dog04-2.png",
//     "https://petfashion.s3.us-east-2.amazonaws.com/dog04-3.png","https://petfashion.s3.us-east-2.amazonaws.com/product04-back.png",
//     "https://petfashion.s3.us-east-2.amazonaws.com/product04-front.png"],
//     price: 129,
//     sizes: ["xs", "s", "m", "l", "xl"],
//   },

//   {
//     id: 9,
//     name: "JAPAN CRUSH SHIRT",
//     category: "cat",
//     description: "Lorem ipsum dolor sit amet, nam no lorem ludus dicunt, purto natum idque eu qui. Ad partem commodo cum, labore mollis ut sed, eos atqui legimus accusamus id. Eu melius probatus inimicus nec. Wisi inermis delectus at qui, vix ea putent tacimates. Eam eu illum solet officiis, ius adhuc consequuntur ea, labore verear luptatum in mei. In vis verterem laboramus assentior, ius quod impetus praesent no.",
//     images: ["https://petfashion.s3.us-east-2.amazonaws.com/cat05-1.png",  "https://petfashion.s3.us-east-2.amazonaws.com/cat05-2.png", "https://petfashion.s3.us-east-2.amazonaws.com/cat05-3.png", "https://petfashion.s3.us-east-2.amazonaws.com/product05-back.png",
//     "https://petfashion.s3.us-east-2.amazonaws.com/product05-front.png"],
//     price: 89,
//     sizes: ["xs", "s", "m", "l", "xl"],
//   },

//   {
//     id: 10,
//     name: "JAPAN CRUSH SHIRT",
//     category: "cat",
//     description: "Lorem ipsum dolor sit amet, nam no lorem ludus dicunt, purto natum idque eu qui. Ad partem commodo cum, labore mollis ut sed, eos atqui legimus accusamus id. Eu melius probatus inimicus nec. Wisi inermis delectus at qui, vix ea putent tacimates. Eam eu illum solet officiis, ius adhuc consequuntur ea, labore verear luptatum in mei. In vis verterem laboramus assentior, ius quod impetus praesent no.",
//     images: ["https://petfashion.s3.us-east-2.amazonaws.com/cat05-1white.png",     "https://petfashion.s3.us-east-2.amazonaws.com/cat05-3white.png", "https://petfashion.s3.us-east-2.amazonaws.com/product05-back.png",
//     "https://petfashion.s3.us-east-2.amazonaws.com/product05-front.png"],
//     price: 89,
//     sizes: ["xs", "s", "m", "l", "xl"],
//   },

//   {
//     id: 11,
//     name: "COCACOLA SPIRIT SHIRT",
//     category: "cat",
//     description: "Lorem ipsum dolor sit amet, nam no lorem ludus dicunt, purto natum idque eu qui. Ad partem commodo cum, labore mollis ut sed, eos atqui legimus accusamus id. Eu melius probatus inimicus nec. Wisi inermis delectus at qui, vix ea putent tacimates. Eam eu illum solet officiis, ius adhuc consequuntur ea, labore verear luptatum in mei. In vis verterem laboramus assentior, ius quod impetus praesent no.",
//     images: [  "https://petfashion.s3.us-east-2.amazonaws.com/cat06-1.png",
//     "https://petfashion.s3.us-east-2.amazonaws.com/cat06-2.png",
//     "https://petfashion.s3.us-east-2.amazonaws.com/cat06-3.png", "https://petfashion.s3.us-east-2.amazonaws.com/product06-back.png",
//     "https://petfashion.s3.us-east-2.amazonaws.com/product06-front.png",],
//     price: 99,
//     sizes: ["xs", "s", "m", "l", "xl"],
//   },
//   {
//     id: 12,
//     name: "COCACOLA SPIRIT SHIRT",
//     category: "dog",
//     description: "Lorem ipsum dolor sit amet, nam no lorem ludus dicunt, purto natum idque eu qui. Ad partem commodo cum, labore mollis ut sed, eos atqui legimus accusamus id. Eu melius probatus inimicus nec. Wisi inermis delectus at qui, vix ea putent tacimates. Eam eu illum solet officiis, ius adhuc consequuntur ea, labore verear luptatum in mei. In vis verterem laboramus assentior, ius quod impetus praesent no.",
//     images: [  "https://petfashion.s3.us-east-2.amazonaws.com/dog06-1.png",
//     "https://petfashion.s3.us-east-2.amazonaws.com/dog06-2.png",
//     "https://petfashion.s3.us-east-2.amazonaws.com/dog06-3.png", "https://petfashion.s3.us-east-2.amazonaws.com/product06-back.png",
//     "https://petfashion.s3.us-east-2.amazonaws.com/product06-front.png",],
//     price: 99,
//     sizes: ["xs", "s", "m", "l", "xl"],
//   },

//   {
//     id: 13,
//     name: "PIKACHU GO! SHIRT",
//     category: "cat",
//     description: "Lorem ipsum dolor sit amet, nam no lorem ludus dicunt, purto natum idque eu qui. Ad partem commodo cum, labore mollis ut sed, eos atqui legimus accusamus id. Eu melius probatus inimicus nec. Wisi inermis delectus at qui, vix ea putent tacimates. Eam eu illum solet officiis, ius adhuc consequuntur ea, labore verear luptatum in mei. In vis verterem laboramus assentior, ius quod impetus praesent no.",
//     images: [   "https://petfashion.s3.us-east-2.amazonaws.com/cat07-1.png",
//     "https://petfashion.s3.us-east-2.amazonaws.com/cat07-2.png",
//     "https://petfashion.s3.us-east-2.amazonaws.com/cat07-3.png","https://petfashion.s3.us-east-2.amazonaws.com/product07-back.png",
//     "https://petfashion.s3.us-east-2.amazonaws.com/product07-front.png"],
//     price: 109,
//     sizes: ["xs", "s", "m", "l", "xl"],
//   },

//   {
//     id: 14,
//     name: "PIKACHU GO! SHIRT",
//     category: "dog",
//     description: "Lorem ipsum dolor sit amet, nam no lorem ludus dicunt, purto natum idque eu qui. Ad partem commodo cum, labore mollis ut sed, eos atqui legimus accusamus id. Eu melius probatus inimicus nec. Wisi inermis delectus at qui, vix ea putent tacimates. Eam eu illum solet officiis, ius adhuc consequuntur ea, labore verear luptatum in mei. In vis verterem laboramus assentior, ius quod impetus praesent no.",
//     images: [  "https://petfashion.s3.us-east-2.amazonaws.com/dog07-1.png",
//     "https://petfashion.s3.us-east-2.amazonaws.com/dog07-2.png",
//     "https://petfashion.s3.us-east-2.amazonaws.com/dog07-3.png", "https://petfashion.s3.us-east-2.amazonaws.com/product07-back.png",
//     "https://petfashion.s3.us-east-2.amazonaws.com/product07-front.png"],
//     price: 109,
//     sizes: ["xs", "s", "m", "l", "xl"],
//   },
  

// ];

// Product.insertMany(productArr, (err, result) => {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log('data array saved')
//   }
// });

const user = new User({
  name: 'Tina Xing',
  email: 'tinaxingtest@gmail.com',
  password: 'testpassword',
  cart: []
})


user.save((err, result) => {
  if(err) {
    console.log(err);
  } else {
    console.log(result)
  }
})
