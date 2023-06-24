import { useAuth } from "../context/Context";
import { ActivityIndicator, View } from "react-native/types";
import AuRotas from "./AuRotas";
import AppRotas from "./AppRotas";

export default function Rotas(){
    const {logado, loading} = useAuth;
    if(loading){

        return(

          <View style={{flex: 1, alignItems:'center'}}>
              <ActivityIndicator size={'large'}/>
          </View>
        )
    }
    
    return( 
       logado == true ? <AppRotas/> : <AuRotas/>
    );
}