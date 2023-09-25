import React from 'react'

function AboutPage() {
  return (
    <div className='m-5 md:px-10 px-4'>
      <h1 className='text-3xl font-semibold text-center'>Calculadora Mathjs</h1>
      <p className='text-sm text-center italic mb-8'>Descripción de la Calculadora</p>
      <div className='text-sm md:text-base'>
        <p className='mb-4'>
          La calculadora es una aplicación web diseñada para realizar cálculos matemáticos simples y avanzados. Está construida utilizando la biblioteca React.js y utiliza la biblioteca Math.js para evaluar expresiones matemáticas. La calculadora tiene las siguientes características:
        </p>
        <ol className='gap-y-4 flex flex-col text-justify pr-8'>
          <li><span className='font-semibold'>Interfaz de Usuario Intuitiva</span>
            <p>La interfaz de usuario está organizada de manera clara y ordenada, con dos campos de entrada: uno para mostrar la operación actual y otro para mostrar el resultado. Los números y operadores se muestran en botones que el usuario puede hacer clic.</p>
          </li>
          <li><span className='font-semibold'>Entrada de Números y Operadores</span>
            <p>El usuario puede ingresar números simplemente haciendo clic en los botones numéricos. También puede ingresar operadores matemáticos como suma (+), resta (-), multiplicación (*), y división (/). Además, se incluye el botón de la raíz cuadrada (√).</p>
          </li>
          <li><span className='font-semibold'>Botones de Control</span>
            <p>La calculadora proporciona botones de control para borrar un dígito (botón "C") o borrar completamente la operación (botón "CE"). Estos botones también manejan errores y restablecen la calculadora al estado inicial.</p>
          </li>
          <li><span className='font-semibold'>Cálculo de Resultados</span>
            <p>Cuando se hace clic en el botón igual (=), la calculadora evalúa la expresión matemática ingresada y muestra el resultado en el campo de resultado. Si se produce un error durante la evaluación, se muestra un mensaje de error en rojo.</p>
          </li>
          <li><span className='font-semibold'>Manejo de Errores</span>
            <p>Se ha implementado un manejo de errores para capturar cualquier excepción que pueda ocurrir durante el cálculo. Si se produce un error, se muestra un mensaje claro para informar al usuario.</p>
          </li>
          <li><span className='font-semibold'>Funcionalidad de Borrar</span>
            <p>Los botones "C" y "CE" permiten al usuario borrar números o la operación completa según sea necesario, lo que facilita la corrección de errores.</p>
          </li>
        </ol>
        <p className='mt-5'>En resumen, esta calculadora es una herramienta versátil que proporciona una forma conveniente de realizar cálculos matemáticos, con una interfaz de usuario amigable y un manejo de errores eficaz.</p>
      </div>
    </div>
  )
}

export default AboutPage