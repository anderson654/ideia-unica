import '../public/estilo.css';
import '../public/normalize.css'
import '../public/responsividade.css'
export default function MyApp({Component,pageProps}){
    return <Component{...pageProps} />
};