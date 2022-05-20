import React from 'react'  //SIEMPRE SE VA A UTILIZAR
import { Text, Image } from 'react-native'  //CUANDO USAMOS COMPONENTE TEXTO E IMAGEN


// FUNCIÓN DE FLECHA
export const CatComponent = (props) => {
  return (
   <view>
        <Text>Hola soy un gato y mi nombre es {props.nombre} y mi raza es {props.raza}</Text>
        <Image
            source={{uri: props.foto}}
            style={{width: 200, height: 200}}
        ></Image> 
   </view>
  )

}

//PARA QUE PUEDA IMPORTARSE
export default CatComponent