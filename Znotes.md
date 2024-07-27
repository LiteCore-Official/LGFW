# Varsayışam script.js kullanıcı dostu
```
// Başlangıç değişken atamalarını burada gerçekleştiriniz

function _onStart() {
    // Oyun başlatıldığında bir kez çalışır
    // Gerekli ayarlamaları atamaları bu alanda gerçekleştiriniz
    
}

function _everyTick() {
// Saniyede 30 kere çalıştırılır
// Oyunun genel döngüsünü ve fizik sistemini bu alanda gerçekleştiriniz
    
}

function _everyFrame() {
    // Kullanıcının aldığı fps sayısı kadar saniyede çalıştırılır
    // Client tarafıyla alakalı örn mouse hareketi takibi gibi sistemleri bu alanda gerçekleştiriniz
    countFPS++; // Fps değerini elde etmek için

}

function _onPressed(key) {
    // Bir klavye tuşuna basılınca tetiklenir
    // Kontrol sistemleri örn hareket kodu gibi sistemleri bu alanda gerçekleştiriniz 
        
}
```
# Debug modundaysa konsol log vermek
```
if (debug) {console.log("")}
```

# Örnek character controller scripti
```
// Başlangıç değişken atamalarını burada gerçekleştiriniz
var player_x = 520
var player_y = 680
var player_speed = 10
var player_jump = 85
var player_acceleration = 0
var gravity = 8


spawnObject("player", "player")
spawnObject("cube","floor") 
function _onStart() {
    // Oyun başlatıldığında bir kez çalışır
    // Gerekli ayarlamaları atamaları bu alanda gerçekleştiriniz

    object_setSize("floor","500px", "50px")
    object_setPosition("floor", "500px", "900px")
    object_setBackgroundColor("floor", "gray")  
}


function _everyTick() {
// Saniyede 30 kere çalıştırılır
// Oyunun genel döngüsünü ve fizik sistemini bu alanda gerçekleştiriniz
    

    if (!isCollide("player","floor")) {
        player_y += gravity
    }



    if (pressedKeys.has("a")) {
        player_x -= player_speed
            if (player_acceleration <= 10) {
                player_acceleration = -10   
            }
    }
    if (pressedKeys.has("d")) {
        player_x += player_speed
            if (player_acceleration >= -10) {
                player_acceleration = 10
            }
    }
    if (pressedKeys.has("w")) {
        if (isCollide("player","floor")) {
            player_y -= player_jump    
        }
    }
    
    if (player_acceleration != 0) {
            player_x += player_acceleration
        if (player_acceleration < 0) {
            player_acceleration += 0.5    
            }
        else{
            player_acceleration -= 0.5
        }
    }
    object_setPosition("player", player_x, player_y)
}

function _everyFrame() {
    // Kullanıcının aldığı fps sayısı kadar saniyede çalıştırılır
    // Client tarafıyla alakalı örn mouse hareketi takibi gibi sistemleri bu alanda gerçekleştiriniz
    countFPS++; // Fps değerini elde etmek için
    gameBoard = "\nplayer_x: "+player_x+"\nplayer_y:"+player_y+"\nplayer_acceleration:"+player_acceleration

}

function _onPressed() {
    // Bir klavye tuşuna basılınca tetiklenir

}

```