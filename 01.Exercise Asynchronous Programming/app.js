function getInfo() {
    let myData = [];
    let stopIdInput = document.getElementById('stopId');
    let stopNameDiv = document.getElementById('stopName');
    let busesUl = document.getElementById('buses');

    let stopId = stopIdInput.value;
    fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`)
        .then(body => body.json())
        .then(stopInfo => {    
            stopNameDiv.textContent = stopInfo.name;

            deleteLiElements();
            Object.keys(stopInfo.buses).forEach(key => {
                let bussInfoLi = document.createElement('li');
                bussInfoLi.textContent = `Bus ${key} arrives in ${stopInfo.buses[key]}`;
                busesUl.appendChild(bussInfoLi);
            })
            stopIdInput.value='';

        })
        .catch(err=>{
            stopNameDiv.textContent='Error';
            deleteLiElements();
        });
        function deleteLiElements(){
            Array.from(busesUl.querySelectorAll('li')).forEach(li=>li.remove());
        
        }

}
