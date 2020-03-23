let Cat = function (name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;

    this.sound = function () {
        alert("Meo")
    }

    this.chasing = function (rat) {
        if (this.speed > rat.speed){
            console.log(this.name + " bắt được chuột " + rat.name)
        }
    }
}
