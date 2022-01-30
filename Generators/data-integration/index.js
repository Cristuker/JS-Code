import axios from 'axios';

const myDB = async () => Array.from({ length: 1000 }, (v, index) => `${index}--cellphone`);

const PRODUCT_URL='http://localhost:3000/products';
const CART_URL='http://localhost:4000/cart';

async function processDBData() {
    const products = await myDB();
    const responses = [];
    for (const product of products) {
        const { data: productInfo } = await axios.get(`${PRODUCT_URL}?productName=${product}`)
        const { data: cartData } = await axios.post(`${CART_URL}`, productInfo)
        console.log('productInfo', productInfo)
        console.log('cartData', cartData)
        responses.push(cartData)
    }
    return responses
}

// const result = await processDBData();
// console.table(result)

async function* processDBDataGen() {
    const products = await myDB();
    for (const product of products) {
        const { data: productInfo } = await axios.get(`${PRODUCT_URL}?productName=${product}`)
        const { data: cartData } = await axios.post(`${CART_URL}`, productInfo)
        console.log('productInfo', productInfo)
        console.log('cartData', cartData)
        yield cartData
    }
}

for await (const data of processDBDataGen()) {
    console.log('generator',data)   
}