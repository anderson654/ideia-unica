async function moedas(request,response){
    const apiSecret = process.env.CONVERTKIT_API_SECRET;
    const dynamicDate = new Date();

    const moneyResponse = await fetch(`https://fxmarketapi.com/apilive?api_key=${apiSecret}&currency=EURUSD`);
    const moneyResponseJson = await moneyResponse.json();
    const moneyValor = moneyResponseJson.price;
    //controle de atualização em cache não colocar em informaçoes sensiveis
    response.setHeader('Cache-Control','s-maxage=10 , stale-while-revalidate');

    response.json({
        date:dynamicDate.toGMTString(),
        money: moneyValor
    });
}
export default moedas;