const axios = require('axios');
dadosDeCadastro();
function Home(){
    return <div>
                <h1>Hello</h1>
            </div>
}
async function dadosDeCadastro(){
    const response = await axios.get('https://andersongabriel.ga/api/consulta/mongoDB');
    return { dados : response.data};
}
export default Home