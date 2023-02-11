let runScripts = () => {
 let chart_bars = document.getElementById( "chart-bars")
 console.log( chart_bars )
 let icons = document.getElementsByTagName( "i" )
 for (let icon of icons) {
    console.log( icon )
 }
 
 let cards = document.getElementsByClassName( "card" )
 for (let card of cards) {
    console.log( card )
 }
}

let modifyText = () => {
    let listOfP = document.getElementsByTagName( "p" )
    let elementP = listOfP[3]
    elementP.innerHTML = 'Dinero actual'

    let listOfH4 = document.getElementsByTagName( "h4" )
    let elementH4 = listOfH4[0]
    elementH4.innerHTML = '$301k'
}

let updateData = () => {
   let data = [{
      title: 'Usuarios actuales',
      value: '3,200'
    },
    {
      title: 'Nuevos clientes',
      value: '4,215'
    },
    {
      title: 'Ventas',
      value: '$121,520'
    }];  

    let [ users, clients, sales ] = data;
    let { title: title_users , value: value_users } = users;
    let { title: title_clients , value: value_clients } = clients;
    let { title: title_sales , value: value_sales } = sales;

    let message_users = `<p class="text-sm mb-0 text-capitalize">${title_users}</p><h4 class="mb-0">${value_users}</h4>`;
    let message_clients = `<p class="text-sm mb-0 text-capitalize">${title_clients}</p><h4 class="mb-0">${value_clients}</h4>`;
    let message_sales = `<p class="text-sm mb-0 text-capitalize">${title_sales}</p><h4 class="mb-0">${value_sales}</h4>`; 
    
    let listOfElements = document.getElementsByClassName('text-end pt-1') 

    let [ , second, third, fourth ] = listOfElements;

    second.innerHTML = message_users;
    third.innerHTML = message_clients;
    fourth.innerHTML = message_sales;

    
    //Cambios Indicador
    let cambios = [
      {
        valor_previo: 250,
        valor_actual: 301,
        mensaje_tiempo: 'que la semana anterior'
      },
      {
        valor_previo: 3510,
        valor_actual: 3200,
        mensaje_tiempo: 'que la semana anterior'
      },
      {
        valor_previo: 3920,
        valor_actual: 4215,
        mensaje_tiempo: 'que ayer'
      },
      {
        valor_previo: 110200,
        valor_actual: 121520,
        mensaje_tiempo: 'que ayer'
      }
    ]

    let [ primero, segundo, tercero, cuarto ] = cambios;
    let { valor_previo: valor_previo_primero , valor_actual: valor_actual_primero, mensaje_tiempo: mensaje_tiempo_primero } = primero;
    let { valor_previo: valor_previo_segundo , valor_actual: valor_actual_segundo, mensaje_tiempo: mensaje_tiempo_segundo  } = segundo;
    let { valor_previo: valor_previo_tercero , valor_actual: valor_actual_tercero, mensaje_tiempo: mensaje_tiempo_tercero  } = tercero;
    let { valor_previo: valor_previo_cuarto , valor_actual: valor_actual_cuarto, mensaje_tiempo: mensaje_tiempo_cuarto  } = cuarto;

    let porcentaje_de_cambio = (valor_actual, valor_previo) => {
     let valor = (valor_actual - valor_previo)*100/valor_previo;
     let valor_final = valor.toFixed(2)
     return valor_final
    } 
    let clase_cambio = (porcentaje) => {
      let clase = porcentaje > 0 ? 'text-success' : 'text-danger';
      return clase;
    }

    let message_primero = `<p class="mb-0">
    <span class="text-sm ${clase_cambio(porcentaje_de_cambio(valor_actual_primero, valor_previo_primero))} font-weight-bolder">
        ${porcentaje_de_cambio(valor_actual_primero, valor_previo_primero)}
    </span>
     ${mensaje_tiempo_primero} </p>`;

     let message_segundo = `<p class="mb-0">
     <span class="text-sm ${clase_cambio(porcentaje_de_cambio(valor_actual_segundo, valor_previo_segundo))} font-weight-bolder">
         ${porcentaje_de_cambio(valor_actual_segundo, valor_previo_segundo)}
     </span>
      ${mensaje_tiempo_segundo} </p>`;

      let message_tercero = `<p class="mb-0">
      <span class="text-sm ${clase_cambio(porcentaje_de_cambio(valor_actual_tercero, valor_previo_tercero))} font-weight-bolder">
          ${porcentaje_de_cambio(valor_actual_tercero, valor_previo_tercero)}
      </span>
       ${mensaje_tiempo_tercero} </p>`;
 
       let message_cuarto = `<p class="mb-0">
       <span class="text-sm ${clase_cambio(porcentaje_de_cambio(valor_actual_cuarto, valor_previo_cuarto))} font-weight-bolder">
           ${porcentaje_de_cambio(valor_actual_cuarto, valor_previo_cuarto)}
       </span>
        ${mensaje_tiempo_tercero} </p>`;
  
    let listOfCambios = document.getElementsByClassName('card-footer p-3') 

    listOfCambios[0].innerHTML = message_primero;
    listOfCambios[1].innerHTML = message_segundo;
    listOfCambios[2].innerHTML= message_tercero;
    listOfCambios[3].innerHTML = message_cuarto;
  }



runScripts ();
modifyText();
updateData();

