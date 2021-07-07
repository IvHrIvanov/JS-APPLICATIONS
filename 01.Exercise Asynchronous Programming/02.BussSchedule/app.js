function solve() {
    let departButtonElement = document.getElementById('depart');
    let arriveButtonElement = document.getElementById('arrive');
    let nextStopId = 'depot';
    let stopInfoSpan = document.querySelector('#info .info');
    function depart() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`)
            .then(body => body.json())
            .then(stopInfo => {
                nextStopId = stopInfo.next;
                stopInfoSpan.setAttribute('data-next-stop-name', stopInfo.name);
                stopInfoSpan.setAttribute('data-next-stop-id', stopInfo.next);
                stopInfoSpan.textContent = `Next stop ${stopInfo.name}`;
                departButtonElement.disabled = true;
                arriveButtonElement.disabled = false;

            })
            .catch(error=>{
                stopInfoSpan.textContent='Error';
                departButtonElement.disabled=true;
                arriveButtonElement.disabled=true;
            })

    }

    function arrive() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`)
            .then(body => body.json())
            .then(arriveInfo => {
                stopInfoSpan.textContent = `Arriving at ${arriveInfo.name}`
                departButtonElement.disabled = false;
                arriveButtonElement.disabled = true;
            })
    }

    return {
        depart,
        arrive
    };
}

let result = solve();