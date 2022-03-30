import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fgig4-1.fna.fbcdn.net/v/t1.18169-9/26991758_1631971790217624_1094585374192413743_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_eui2=AeEIUd7RI-BDKXyY2c7vVjegHGtgD0sDWIAca2APSwNYgMKT4GxWK2k4HJqyK1lvaTS2pOs2B4MfEMqDqDO9Guqw&_nc_ohc=4ZPq3zx7EN0AX9r41Uf&tn=vO-HcPVlZxrDML7e&_nc_ht=scontent.fgig4-1.fna&oh=00_AT9taxaFQd1tj0eJBg179R8qpLRqEuyA7VG8QgWA705UZA&oe=6202A5F5" 
          nome="Rodrigo Kord" 
          descricao="Oi, sou Rodrigo Kord, o ariano mais irritado do mundo e engraçado também, hahaha."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
