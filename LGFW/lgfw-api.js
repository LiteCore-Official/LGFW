// Başlangıç değişkenleri ataması
const version = 0
var debug = true
var engineTick = 33.33
var engineSpawnID = "none"
var engineLoop = false
var gameBoard = ""
const dir = "LGFW/"
let countFPS = 0;
let startTime = performance.now();
const fpsDisplay = document.getElementById('fpsDisplay');
const pressedKeys = new Set();
// Logomuz
document.body.style.backgroundColor = "#262626"
document.body.style.backgroundImage = 'url("lgfw/loading.png")';

// Gerekli motor fonksiyonları
function loadScript(url,id) {
    engineSpawnID = id
    var script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    document.head.appendChild(script);
}
function hesaplaFPS() {
    const now = performance.now();
    const elapsed = now - startTime;
    const fps = (countFPS / elapsed) * 1000; // Saniyede kaç kez çalıştığını hesaplar
    fpsDisplay.textContent = `FPS: ${fps.toFixed(2)} \n ${gameBoard}`;
    countFPS = 0; 
    startTime = now; 
}
function isCollide(objectID1, objectID2) {
            const a = document.getElementById(objectID1).getBoundingClientRect();
            const b = document.getElementById(objectID2).getBoundingClientRect();
            return !(
                ((a.bottom) < (b.top)) ||
                (a.top > (b.bottom)) ||
                ((a.right) < b.left) ||
                (a.left > (b.right))
            );
        }
let lastCallTime = 0;

function delayedFunction(fn, ...args) {
    const now = Date.now();
    const delay = Math.max(0, lastCallTime + 1000 - now);
    lastCallTime = now + delay;

    setTimeout(() => {
        fn(...args);
    }, delay);
}




// lgwf baslangıç kodları
console.log('lgfw (V'+ version +') starting')


// lgwf api fonksiyonları
function spawnObject(objectName, spawnID, spawnClass="") {
    delayedFunction(loadScript, dir+"/objects/"+objectName+".js", spawnID, spawnClass)
    
    if (debug) {console.log("~spawnObject")} 
}

function object_setSize(id, x, y) {
    var object = document.getElementById(id)
    object.style.width = x
    object.style.height = y
}

function object_setPosition(id, x, y) {
    var object = document.getElementById(id)
    object.style.left = x
    object.style.top = y
}

function object_setBackgroundColor(id, color) {
    var object = document.getElementById(id)
    object.style.backgroundColor = color
}

function object_setTextColor(id, color) {
    var object = document.getElementById(id)
    object.style.color = color
}




function object_getPosition(id) {
    var object = document.getElementById(id)
    var object = object.getBoundingClientRect()
    return {
        x: object.left,
        y: object.top
    };
}










function addClassToObject(id, className) {
    var object = document.getElementById(id)
    object.classList.add(className)
}






setTimeout(startEngine, 2000);


// Tetikleyici çağrımları
function startEngine() {
    document.body.style.backgroundColor = "black"
    document.body.style.backgroundImage = '';
    _onStart()                                             // başlangıçta bir kere çalışır
    setInterval(hesaplaFPS, 1000);
    setInterval(_everyTick, engineTick);       // tick kadar çalıştırır yani 30(varsayılan)
    setInterval(_everyFrame, 0);                // fps kadar çalıştırır

    document.addEventListener('keydown', function(event) {
        pressedKeys.add(event.key);
        _onPressed();
    });

    document.addEventListener('keyup', function(event) {
        pressedKeys.delete(event.key);
    });
}