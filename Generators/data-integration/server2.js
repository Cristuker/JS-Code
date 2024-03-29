// curl -X POST "localhost:4000/cart" --data '{"id": "123"}'

import { createServer } from 'http';

const PORT = 4000;
async function handler(request, response) {
    if(
        request.method === 'POST' &&
        request.url.includes('cart')
    ){
        for await (const data of request) {
            const item = JSON.parse(data);
            console.log(item);
            return response.end('Process suceeded for '+ item.id)
        }
    }

    return response.end('hey')
}

createServer(handler)
.listen(PORT, () => console.log(`API Cart running on PORT ${PORT}`))