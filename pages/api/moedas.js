async function moedas(request,response){
    const apiSecret = process.env.CONVERTKIT_API_SECRET;
    const dynamicDate = new Date();

    const moneyResponse = await fetch(`https://www.freeforexapi.com/api/live?pairs=${apiSecret}`);
    const moneyResponseJson = await moneyResponse.json();
    const moneyValor = moneyResponseJson.rates;

    response.json({
        date:dynamicDate.toGMTString(),
        money: moneyValor
    });
}
export default moedas;