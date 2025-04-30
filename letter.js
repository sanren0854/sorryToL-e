let heart = document.querySelector('.heart')
let card = document.querySelector('.card')
let box = document.querySelector('#box')
heart.addEventListener('click', function () {
    card.setAttribute("style", "opacity:0");
    let x = document.createElement("audio");
    x.setAttribute("src", "Jurrivh - Lonely Day.mp3");
    x.setAttribute("autoplay", "autoplay");

    let i = 0
    let str = '悦悦大王对不起，昨晚是我不对a我不应该没有祝你晚安a对不起原谅我好不好a不要和我绝交好不好a我以后一定天天晚上都跟你说晚安的aa-----散人'
    let strp = ''

    function print() {
        if (str[i] == 'a') {
            document.getElementById("box").innerHTML = strp + "<br><br>+'|'";
            strp += "<br><br>";
        }
        else {
            strp += str[i];
            box.innerHTML = strp + '|';
        }
        i++;
    }
    setTimeout(() => {
        let printid = setInterval(() => {
            print();
            if (i == str.length) {
                strp[i - 1] = '';
                document.getElementById("box").innerHTML = strp
                clearInterval(printid);
            }
        }, 190);
    }, 5500);
    function appearBackground() {
        setTimeout(() => {
            box.style.opacity = 1
        }, 1500)
    }
    appearBackground()

})
