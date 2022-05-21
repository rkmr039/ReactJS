const jsClock = document.getElementById("jsClock");
const reactClock = document.getElementById("reactClock");

function jsTick() {
    const time = new Date().toLocaleTimeString();
    const jsClockTemplate = `
    <div>
        <span>${time}</span>
    </div>
    `;

    jsClock.innerHTML = jsClockTemplate;
}
setInterval(jsTick, 1000);
function reactTick() {
    const time = new Date().toLocaleTimeString();
    const reactClockTemplate = (
        <div><span>{time}</span></div>
    );

    ReactDOM.render(reactClockTemplate,reactClock);
}

setInterval(reactTick, 1000);

