document.addEventListener('DOMContentLoaded',function(){

    let button = document.createElement('button');
    let buttonText = document.createTextNode('Add Square');
    button.appendChild(buttonText);
    document.body.appendChild(button);

    let idNo = 0;
    function square(){
        idNo++;
        let div = document.createElement('div');
        div.className = 'divStyle';
        div.id = idNo;
        let p = document.createElement('p');
        let text = document.createTextNode(idNo);
        p.appendChild(text);
        div.appendChild(p);
        document.body.appendChild(div);
        p.style.opacity = '0';
        div.addEventListener('mouseenter', hover);
        function hover(){
            p.style.opacity = '1';
        }
        div.addEventListener('mouseleave',hoverstop);
        function hoverstop(){
            p.style.opacity = '0';
        }
        //array of random colors
        let colors = ['red','blue','green','yellow','brown']
        function randomColors(){
            let randomColors = colors[Math.floor(Math.random()*colors.length)];
            return randomColors;
        }
        div.addEventListener('click',function(){
            let randColors = randomColors();
            div.style.backgroundColor = randColors;
        })

        // If the id of the square is even:
        // The square after the clicked square should be removed from the page
        // If there isn't a square after the clicked square, display an alert indicating
        
        div.addEventListener('dblclick',removeFun);
        function removeFun(){
            let id = div.id;
            if(id % 2 === 0){
                this.remove();
            } else if (id % 2 != 0){
                alert('no even id')
            }
        }

    }
    button.addEventListener('click',square);
    
})