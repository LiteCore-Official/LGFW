// Fizik motoru ayarları
var gravity = 10



// Fizik sınıfları belirleme
var has_gravity = document.querySelectorAll('.has_gravity')
var has_collision = document.querySelectorAll('.has_collision')




has_gravity.forEach(function(object) {
    var position = object_getPosition(object.id)
    object_setPosition(object.id, position.x+gravity, position.y+gravity)
})