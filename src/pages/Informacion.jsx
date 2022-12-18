import React from 'react'
import plato from '../images/plato-de-harvard.jpeg'
const styles = {
  imgPlato: {
    width: '50%'
  }
}

function Informacion() {
  return (
    <>
      <div>
        <h2 className='text-center mt-3' >Plato de Harvard</h2>
        <img className='mt-3 rounded mx-auto d-block' src={plato} style={styles.imgPlato} alt='Icono con un plato, un cuchillo y un tenedor' />
        <br />
        <h2 className='text-center mt-3' >Nutrientes básicos</h2>
        <p className='m-4' >Los nutrientes básicos son sustancias químicas que el cuerpo necesita para funcionar de manera óptima. Estos incluyen macronutrientes (proteínas, grasas y carbohidratos) y micronutrientes (vitaminas y minerales).<br/>Los macronutrientes son necesarios en grandes cantidades para proporcionar energía y mantener el cuerpo funcionando correctamente. Las proteínas son necesarias para el crecimiento y reparación de los tejidos del cuerpo, las grasas son importantes para la absorción de vitaminas y minerales y para la producción de hormonas, y los carbohidratos proporcionan energía para el cuerpo y el cerebro.<br/>Los micronutrientes son necesarios en cantidades más pequeñas, pero son igualmente importantes para la salud. Las vitaminas y los minerales desempeñan una variedad de funciones en el cuerpo, como ayudar a mantener la piel sana, fortalecer los huesos y los dientes, y regular el funcionamiento del sistema nervioso y el sistema inmunológico.<br/>Es importante obtener una variedad de alimentos que proporcionen todos los nutrientes necesarios para mantener una buena salud y prevenir enfermedades. Los alimentos que son ricos en nutrientes incluyen frutas, verduras, granos enteros, proteínas y grasas saludables.</p>
        <h2 className='text-center mt-3' >Proporción idónea de nutrientes básicos</h2>
        <p className='m-4' >La proporción correcta de proteínas, grasas y carbohidratos en la dieta depende de muchos factores, como el sexo, la edad, el peso, la actividad física y los objetivos nutricionales.<br/>En general, se recomienda que la mayoría de las personas obtengan una cantidad adecuada de proteínas, grasas y carbohidratos en sus dietas para mantener una buena salud.Las recomendaciones nutricionales variarán dependiendo del país o región, pero en general se suele recomendar que las personas obtengan al menos el 50% de sus calorías diarias de los carbohidratos, el 20-35% de las grasas y el 10-35% de las proteínas.<br/>Es importante recordar que estas son solo pautas generales y que es posible que se necesite ajustar estas proporciones en función de las necesidades individuales.Es importante tener en cuenta que la calidad de los alimentos que se consumen es igualmente importante como la cantidad. Es importante elegir alimentos saludables y nutritivos en lugar de alimentos procesados ​y altos en azúcares añadidos y grasas saturadas.<br/>También es importante recordar que es necesario obtener una variedad de alimentos para obtener una dieta equilibrada y completa.</p>
        <h2 className='text-center mt-3' >Mejores carbohidratos</h2>
        <p className='m-4' >Los carbohidratos son una fuente importante de energía y son esenciales en una dieta saludable. Sin embargo, no todos los carbohidratos son iguales. Algunos tipos de carbohidratos son más saludables que otros y pueden tener beneficios adicionales para la salud.

Los mejores carbohidratos son aquellos que son ricos en nutrientes y bajos en grasas y azúcares añadidos. Estos incluyen:

Vegetales: son ricos en fibra, vitaminas y minerales y tienen un bajo contenido calórico. Los vegetales son una excelente fuente de carbohidratos y deben ser una parte importante de cualquier dieta.

Legumbres: son una buena fuente de proteínas, fibra y nutrientes. Las legumbres también tienen un bajo contenido de grasas y son una excelente opción para aquellas personas que siguen una dieta vegetariana o vegana.

Granos integrales: incluyen arroz integral, avena, quinua y otros granos enteros. Estos son ricos en fibra, proteínas y nutrientes y pueden ayudar a controlar el nivel de azúcar en la sangre y a mantener un peso saludable.

Frutas: son una buena fuente de carbohidratos, fibra y nutrientes. Las frutas también contienen antioxidantes y compuestos que pueden ayudar a proteger contra enfermedades.

En general, es importante elegir carbohidratos de fuentes saludables y variadas y limitar el consumo de carbohidratos refinados y azúcares añadidos. Es recomendable hablar con un profesional de la salud para obtener más información sobre cómo incluir carbohidratos saludables en su dieta.</p>
      </div>
    </>
  )
}

export default Informacion