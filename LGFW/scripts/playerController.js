// Başlangıç değişken atamalarını burada gerçekleştiriniz
spawnObject("cube", "cube1")
spawnObject("cube", "cube2")
spawnObject("cube", "cube3")
spawnObject("cube", "cube4")
spawnObject("cube", "cube5")

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