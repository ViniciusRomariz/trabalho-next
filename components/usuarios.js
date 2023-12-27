import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export const logarSistema = (usuario, setUsuario, setErro) => {
    signInWithEmailAndPassword(auth, usuario.email, usuario.senha)
        .then(async (credenciais) => {
            setUsuario((objetoAtual) => {
                const retorno = {
                    ...objetoAtual, 
                    ["id"]:credenciais.user.uid,  
                    ["email"]:credenciais.user.email
                };
                return retorno;
            });
        })
        .catch((error) => {
            console.log(`${error.code} = ${error.message}`);
            setErro("Login Inválido");
        });
}