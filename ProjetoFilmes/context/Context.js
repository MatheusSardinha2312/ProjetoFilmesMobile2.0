import { createContext, useState } from "react";

const Context = createContext({});

export function AuthProvider({ children }){
    
    const [logado, setLogado] = useState(false);
    const [loading, setLoading] = useState(false);

    function signIn(){
        return new Promise(resolve => {
            setLoading(true);
            setTimeout(function(){setLogado(true); setLoading(false)}, 2000)
        })
    }
    return(
        <Context.Provider value = {{logado, signIn} }>
            { children }
        </Context.Provider>
    );
}

export function useAuth(){

    const context = useContext(Context);
    return context;
}

export default Context;