import Header from '../../components/Header/index.js';

import './styles.css';

function Cadastro() {
  return (
    <div className="App">
      <div className="container">
        <div  className="container-form">
          <div className="warp-login">
            <form className="login-form" align="left">
            <span className="form-title"><b>Cadastro</b><p/></span>
               <div className="form-group">
                <div className="input-box">
                    <label htmlFor="text">Nome de Úsuario</label>
                    <input
                    type="name"
                    id="name"
                    className="form-control"
                    required/>
                </div>
                <div className="input-box">
                    <label htmlFor="email">Email</label>
                    <input
                    type="email"
                    id="email"
                    className="form-control"
                    required/>
                </div>
              </div>
              <div className="form-group">
                <div className="input-box">
                    <label htmlFor="password">Senha</label>
                    <input
                    type="password"
                    id="password"
                    className="form-control"
                    required/>
                </div>
                <div className="input-box">
                    <label htmlFor="Confirmpassword">Repita a Senha</label>
                    <input
                    type="password"
                    id="Confirmpassword"
                    className="form-control"
                    required/>
                </div>
              </div>
              <div className="form-group">
                <div className="input-box">
                    <label htmlFor="text">Categoria de Serviço</label>
                    <input
                    type="text"
                    id="text"
                    className="form-control"
                    placeholder='Escolha uma categoria'
                    required/>
                </div>
                <div className="input-box">
                    <label htmlFor="number">Telefone</label>
                    <input
                    type="number"
                    id="number"
                    className="form-control"
                    placeholder='(99)99999-9999'
                    required/>
                </div>
              </div>
              <div className="form-group">
                <div className="input-box">
                    <label htmlFor="text">Estado</label>
                    <input
                    type="text"
                    id="text"
                    className="form-control"
                    required/>
                </div>
                <div className="input-box">
                    <label htmlFor="text">Cidade</label>
                    <input
                    type="text"
                    id="text"
                    className="form-control"
                    required/>
                </div>
              </div>
              <div className="form-group">
                <div className="input-box">
                    <label htmlFor="text">Descrição</label>
                    <input
                    type="text"
                    id="text"
                    className="form-control-des"/>
                </div>
              </div>
              <div className="login-form-btn">
                <button type="submit" className="form-btn">Cadastrar</button>
             </div>
              <div className="text-center">
                <span className="txt1">Ainda não possui conta? </span>
                <a className="txt2" href="#">Cadastre-se</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;