const URL = "https://dog.ceo/api/breeds/image/random"
const request = new XMLHttpRequest()
request.onreadystatechange = ()=>{
    if(request.readyState === 4){
        if(request.status === 200){
            var resultado = request.responseText
            var resultado_en_objeto = JSON.parse(resultado)
            //console.log(resultado_en_objeto)
            
            const section= document.querySelector('#section');
        
           
            const fragment = document.createDocumentFragment()


            dogs = Object.values(resultado_en_objeto)
            create_card();
            function create_card(){
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
                for (let index = 0; index < dogs.length; index++) {
                    const element = dogs[index];
                    const card=document.createElement('div');
                        const img_card=document.createElement('img');
                        card.classList.add('card');
                        img_card.setAttribute('id', 'image');
                        img_card.setAttribute('src', dogs[0]);
                        card.appendChild(img_card);
                    
                        fragment.appendChild(card)
                }
            }
            section.appendChild(fragment);
        }
    }
};
request.open("GET",URL)
request.send()