let URL = "https://dog.ceo/api/breeds/image/random"
let request = new XMLHttpRequest()


request.onreadystatechange = ()=>{
    if(request.readyState === 4){
        if(request.status === 200){
            var resultado = request.responseText
            var resultado_en_objeto = JSON.parse(resultado)
            const botoncuatro = document.getElementById('boton1');
            const botonocho = document.getElementById('boton2');
            const botondoce = document.getElementById('boton3');
            const botontodas = document.getElementById('boton4');
            const section= document.querySelector('#section');
        
           
            const fragment = document.createDocumentFragment()

            dogs = Object.values(resultado_en_objeto)
            let cantidad = 0;
            botoncuatro.addEventListener('click', e=>{
                cantidad = 4;
                create_card(cantidad);
            });
            botonocho.addEventListener('click', e=>{
                cantidad = 8;
                create_card(cantidad);
            });
            botondoce.addEventListener('click', e=>{
                cantidad = 12;
                create_card(cantidad);
            });
            botontodas.addEventListener('click', e=>{
                cantidad = 24;
                create_card(cantidad);
            });
            
            function create_card(cantidad){
                console.log(dogs)
                //for (const key in dogs) {
                //    if (Object.hasOwnProperty.call(dogs, key)) {
                //        //const element = object[key];
                //        const card=document.createElement('div');
                //        const img_card=document.createElement('img');
                //        card.classList.add('card');
                //        img_card.setAttribute('id', 'image');
                //        img_card.setAttribute('src', dogs[0]);
                //        card.appendChild(img_card);
                //    
                //        fragment.appendChild(card)
                        
                 //   }
                //}
                
                
                for (let index = 0; index < cantidad; index++) {
                
                    const card=document.createElement('div');
                    const img_card=document.createElement('img');
                    card.classList.add('card');
                    img_card.setAttribute('class', 'card-img');
                    img_card.setAttribute('src', dogs[0]);
                    card.appendChild(img_card);
                    
                    fragment.appendChild(card)
                }
                section.appendChild(fragment);
            }    
        }
    }
};
request.open("GET",URL)
request.send()