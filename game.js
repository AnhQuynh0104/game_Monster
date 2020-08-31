window.onload = function(){
    let groupButton = document.querySelector(".group-button"),
        startButton = document.getElementById("start"),
        resetButton = document.getElementById("giveup"),
        attackButton = document.getElementById("attack"),
        specialAttack = document.getElementById("special-attack"),
        healButton = document.getElementById("heal"),
        table = document.getElementById("content"),
        isRunning  = false,
        // statusYou = document.getElementById("statusYou"),
        // statusMonster = document.getElementById("statusMonster"),
        // active = document.getElementById("active"),
        // status = document.getElementById("status"),
        widthYou = 100,
        widthEnemy = 100;

    startButton.onclick = function(){
        startButton.style.display = "none";
        groupButton.style.display = "flex";
        isRunning = true;
    }

    resetButton.onclick = function(){
        startButton.style.display = "block";
        groupButton.style.display = "none";
        table.style.display = "none";
        enemyHealth.style.width = 100 + "%";
        enemyHealth.innerHTML = 100;
        yourHealth.style.width = 100 + "%";
        yourHealth.innerHTML = 100;
        isRunning = false;
    }

    let enemyHealth = document.getElementById("enemyHealth"),
        yourHealth = document.getElementById("yourHealth");
    attackButton.onclick = function(){
        table.style.display = "block";
        let damageYou = Math.floor(Math.random()*10),
            damageEnemy = Math.floor(Math.random()*10);
        widthEnemy -= damageEnemy;
        enemyHealth.style.width = widthEnemy + "%";
        enemyHealth.textContent = widthEnemy;
        add(damageYou, "pink", "red", "Monster hit you for " + damageYou);

        widthYou -= damageYou;
        yourHealth.style.width = widthYou + "%";
        yourHealth.innerHTML = widthYou;
        add(damageEnemy, "rgb(146, 190, 204)", "blue", "You hit monster for " + damageEnemy);
        
        if(widthYou < 0) alert("You lose");
        else if(widthEnemy < 0) alert("You win");
    }
    function add(damageYou, background, color, text){
        let ul = document.getElementById("status");
        let li = document.createElement("li");
        li.style.background = background;
        li.style.color = color;
        li.innerHTML = text;
        ul.appendChild(li);
    

    healButton.onclick = function(){
        let heal = Math.floor(Math.random()*10);
        widthYou += heal;
        yourHealth.style.width = widthYou + "%";
        yourHealth.innerHTML = widthYou;
        add(heal, "rgb(146, 190, 204)", "blue","You heal yourself for " + heal);
    }
    specialAttack.onclick = function(){
        let damage = Math.floor(Math.random()*30);
        widthEnemy -= damage;
        enemyHealth.style.width = widthEnemy + "%";
        enemyHealth.innerHTML = widthEnemy;
        let damageYou = Math.floor(Math.random()*30);
        widthYou -= damageYou;
        yourHealth.style.width = widthYou + "%";
        yourHealth.innerHTML = widthYou;
        if(widthYou < 0) alert("You lose");
        else if(widthEnemy < 0) alert("You win");
    }
}
