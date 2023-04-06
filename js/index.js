window.onload = function () {
    var box = document.querySelector('.box')
    var xj = document.querySelector('.xj')
    var abi = document.getElementsByClassName('abi')
    var oneee = true,twooo = true,threeee = true,fourrr = true
    var gezi = document.querySelector('.gezi')
    var gz = document.querySelector('.gezitu')
    // 第二段
    var load24 = document.querySelector('.load24')
    var dianhua = document.querySelector('.load27')
    // 第三段
    var load15 = document.querySelector('.load15')
    var load29 = document.querySelector('.load29')
    // 第四段
    var load31 = document.querySelector('.load31')
    var load30 = document.querySelector('.load30')
    var one1 = false,one2 = false,one3 = false,one4 = false

    var phone = document.querySelector('.phone')
    var wifi = document.querySelector('.wifi')
    var moon = document.querySelector('.moon')
    var shouji = document.querySelector('.shouji')
    
    var s_top = document.querySelector('.s-top')
    var s_center = document.querySelector('.s-center')
    var jiantou = document.querySelector('.jiantou')

    var load32 = document.querySelector('.load32')
    // 获取音乐
    var mp1 = document.querySelector('.mp1')
    var mp2 = document.querySelector('.mp2')
    var mp3 = document.querySelector('.mp3')
    var mp4 = document.querySelector('.mp4')
    // 球
    var qiu = document.querySelector('.qiu')
    var zd = document.querySelector('.zd')
    var dibu = document.querySelector('.dibu')
    // 第一段路程显示
    var abc = document.getElementsByClassName('abc')
    var abd = document.getElementsByClassName('abd')
    var abe = document.getElementsByClassName('abe')
    var abf = document.getElementsByClassName('abf')
    var abg = document.getElementsByClassName('abg')
    var abh = document.getElementsByClassName('abh')
    // 向上滑动
    mp1.play()
    var startY, endY;
    box.addEventListener('touchstart', function (e) {
        startY = e.touches[0].pageY;
    })
    box.addEventListener('touchend', tops)
    function tops(e) {
        endY = e.changedTouches[0].pageY
        // console.log(endY);
        uptop = startY - endY
        if (uptop > 0) {
            box.removeEventListener('touchend', tops)
            mp1.pause()     //停止mp1
            // 滑动后隐藏
            s_center.style.display = 'none'
            jiantou.style.display = 'none'
            // 滑动后显示
            load32.removeAttribute('style','display:none')   //摩天轮
            setTimeout(()=>{
                mp2.play()
            },1000)

            // 三个建筑加第一小段
            for(var i = 0; i<abc.length; i++){
                abc[i].style.display = 'block'
            }
            setTimeout(()=>{
                s_top.style.animation = 'stops 0.5s forwards'
                abg[0].style.animation = 'wz2 0.5s forwards'
                mp2.pause()
            },2700)
        }
    }
// 点击第一个柱子
    abh[0].onclick = function () {
        abh[0].style.display = 'none'
        mp4.play()
        // 设置按钮为false
        oneee = false
        gezi.setAttribute('class', 'gezi1')
        // 第一段
        var i = 1
        var a = setInterval(() => {
            if (i > 5) i = 1
            gz.setAttribute('src', '../suoyougezi/gz' + i + '.png')
            i++
        }, 100)
        // 第二段
        setTimeout(() => {
            var i = 11
            var num = 0
            clearInterval(a)
            var b = setInterval(() => {
                if (i > 15) i = 11
                gz.setAttribute('src', '../suoyougezi/gz' + i + '.png')
                i++
                num++
                if (num == 14) clearInterval(b)
            }, 100)
        }, 2000)
        // 第三段
        setTimeout(() => {
            var i = 1
            var num = 0
            var c = setInterval(() => {
                if (i > 5) i = 1
                gz.setAttribute('src', '../suoyougezi/gz' + i + '.png')
                i++
                num++
                if (num == 31) clearInterval(c)
            }, 100)
        }, 3310)
        // 第四段
        setTimeout(() => {
            var i = 11
            var num = 0
            var d = setInterval(() => {
                if (i > 15) i = 11
                gz.setAttribute('src', '../suoyougezi/gz' + i + '.png')
                i++
                num++
                if (num == 19) {
                    mp4.pause()
                    gz.setAttribute('src', '../suoyougezi/gz11.png')
                    clearInterval(d)
                    one1 = true
                    // 第一个升起的柱子和电话
                    mp2.play()
                    load24.style.display = 'block'
                    dianhua.style.display = 'block'
                    // 改变文字
                    setTimeout(() =>{
                        abg[0].style.animation = 'wz2s 0.5s forwards'
                        abg[1].style.animation = 'wz3s 0.5s forwards'
                    },1000)
                    setTimeout(() => {
                        phone.style.animation = 'xxxx 1s linear infinite'
                        for(var j = 0; j<abd.length;j++){
                            abd[j].style.display = 'block'
                        }
                    }, 1000)
                    setTimeout(() => {
                        mp2.pause()
                    }, 4000);
                }
            }, 100)
        }, 6370)
    }
// 第一次
    abi[0].onclick = function () {
        if (!oneee) {     // 如果不为true
            return     // 停止执行
        } else {
            if (one1) {     // 如果为false
                // 则瞬移
                gezi.setAttribute('class', 'gezi2s')
                abg[1].style.animation = 'wz3s 0.5s forwards'
                abg[2].style.animation = 'wz4 0.5s forwards'
                abg[3].style.animation = 'wz5 0.5s forwards'
                abg[0].style.animation = 'wz2s 0.5s forwards'
                return
            }
        }
    }
// 点击第二个柱子
    abh[1].onclick = function(){
        abh[1].style.display = 'none'
        mp4.play()
        oneee = false
        twooo = false
        gezi.setAttribute('class', 'gezi2')
        // 第一段
        var i = 1
        var e = setInterval(() => {
            if (i > 5) i = 1
            gz.setAttribute('src', '../suoyougezi/gz' + i + '.png')
            i++
        }, 100)
        // 第二段
        setTimeout(() => {
            var i = 11
            var num = 0
            clearInterval(e)
            var f = setInterval(() => {
                if (i > 15) i = 11
                gz.setAttribute('src', '../suoyougezi/gz' + i + '.png')
                i++
                num++
                if (num == 40) {
                    clearInterval(f)
                    mp4.pause()
                    gz.setAttribute('src', '../suoyougezi/gz21.png')

                    twooo = true
                    one2 = true
                    // 第二个柱子和wifi
                    mp2.play()
                    load15.style.display = 'block'
                    load29.style.display = 'block'
                    // 改变文字
                    setTimeout(()=>{
                        abg[1].style.animation = 'wz3 0.5s forwards'
                        abg[2].style.animation = 'wz4s 0.5s forwards'
                    },1000)
                    setTimeout(() => {
                        wifi.style.animation = 'vvvv 1s linear infinite'
                        for(var j = 0; j<abe.length; j++){
                            abe[j].style.display = 'block'
                        }
                    }, 1000)
                       setTimeout(()=>{
                        oneee = true
                    },4000)
                    // 停止音频
                    setTimeout(()=>{
                        mp2.pause()
                    },4000)
                }
            }, 100);
        }, 600)
    }
    // 第二次
    abi[1].onclick = function () {
        if (!twooo) {
            return
        } else {
            if (one2) {
                gezi.setAttribute('class', 'gezi3s')
                abg[2].style.animation = 'wz4s 0.5s forwards'
                abg[1].style.animation = 'wz3 0.5s forwards'
                abg[3].style.animation = 'wz5 0.5s forwards'
                abg[0].style.animation = 'wz2s 0.5s forwards'
                return
            }
        }
    }
    // 点击第三个柱子
    abh[2].onclick = function(){
        mp4.play()
        abh[2].style.display = 'none'
        oneee = false
        twooo = false
        threeee = false
        gezi.setAttribute('class', 'gezi3')
        // 第一段
        var i = 21
        var g = setInterval(() => {
            if (i > 25) i = 21
            gz.setAttribute('src', '../suoyougezi/gz' + i + '.png')
            i++
        }, 100);
        // 第二段
        setTimeout(() => {
            var i = 31
            var num = 0
            clearInterval(g)
            var h = setInterval(() => {
                if (i > 35) i = 31
                gz.setAttribute('src', '../suoyougezi/gz' + i + '.png')
                i++
                num++
                if (num == 13) clearInterval(h)
            }, 100);
        }, 1423)
        // 第三段
        setTimeout(() => {
            var i = 21
            var num = 0
            var m = setInterval(() => {
                if (i > 25) i = 21
                gz.setAttribute('src', '../suoyougezi/gz' + i + '.png')
                i++
                num++
                if (num == 23) {
                    mp4.pause()
                    clearInterval(m)
                    gz.setAttribute('src', '../suoyougezi/gz31.png')
                    threeee = true
                    one3 = true
                    // 柱子音频
                    mp2.play()
                    load31.style.display = 'block'
                    load30.style.display = 'block'
                    // 改变文字
                    setTimeout(() =>{
                        abg[2].style.animation = 'wz4 0.5s forwards'
                        abg[3].style.animation = 'wz5s 0.5s forwards'
                    },1000)
                    setTimeout(() => {
                        moon.style.animation = 'tttt 1s linear infinite'
                        for(var j = 0; j<abf.length; j++){
                            abf[j].style.display = 'block'
                        }
                    }, 1000)
                    setTimeout(()=>{
                        twooo = true
                        oneee= true
                    },4000)
                    // 音频
                    setTimeout(()=>{
                        mp2.pause()
                    },3000)
                }
            }, 100)
        }, 2742)
    }
    // 第三次
    abi[2].onclick = function () {
        if (!threeee) {
            return
        } else {
            if (one3) {
                gezi.setAttribute('class', 'gezi4s')
                abg[3].style.animation = 'wz5s 0.5s forwards'
                abg[2].style.animation = 'wz4 0.5s forwards'
                abg[1].style.animation = 'wz3 0.5s forwards'
                abg[0].style.animation = 'wz2s 0.5s forwards'
                return
            } 
        }
    }
    // 点击第四个柱子
    abh[3].onclick = function(){
        mp4.play()
        abh[3].style.display = 'none'
        oneee = false
        twooo = false
        threeee = false
        fourrr = false
        gezi.setAttribute('class', 'gezi4')
        // 第一段
        var i = 31
        var n = setInterval(() => {
            if (i > 35) i = 31
            gz.setAttribute('src', '../suoyougezi/gz' + i + '.png')
            i++
        }, 100)
        // 第二段
        setTimeout(() => {
            var i = 31
            var num = 0
            clearInterval(n)
            var o = setInterval(() => {
                if (i > 35) i = 31
                gz.setAttribute('src', '../suoyougezi/gz' + i + '.png')
                i++
                num++
                if (num == 11) clearInterval(o)
            }, 100)
        }, 1159)
        // 第三段
        setTimeout(() => {
            var i = 1
            var num = 0
            var p = setInterval(() => {
                if (i > 5) i = 1
                gz.setAttribute('src', '../suoyougezi/gz' + i + '.png')
                i++
                num++
                if (num == 12) {
                    // 柱子飞升，鸽子飞升
                    abi[3].setAttribute('style','animation:zzzz 3s linear forwards')
                    gz.setAttribute('style','animation:gezis 3s linear forwards')
                    // 背景上升，其他下降
                    box.style.animation = 'down 3s linear forwards'
                    xj.style.animation = 'box 3s linear forwards'
                    // 停止音频
                    mp4.pause()
                    mp3.play();
                    clearInterval(p)
                    gz.setAttribute('src', '../suoyougezi/gz31.png')
                    // 手机消失
                    setTimeout(()=>{
                        shouji.style.display = 'none'
                        abg[0].style.display = 'none'
                        abg[1].style.display = 'none'
                        abg[2].style.display = 'none'
                        abg[3].style.display = 'none'
                    },400)
                    // 球出现
                    setTimeout(()=>{
                        qiu.style.display = 'block'
                        zd.setAttribute('style','animation:zds 1s linear forwards')
                        dibu.setAttribute('style','animation:dibus 1s linear forwards')
                    },3000)
                    oneee = true
                    twooo = true
                    threeee = true
                    fourrr = true
                    one4 = true
                }
            }, 100)
        }, 2167);
    }
    // 第四次
    abi[3].onclick = function () {
        if (!fourrr) {    // 不为true
            return 
        } else { 
            if (one4) {    // 如果为false
                gezi.setAttribute('class', 'gezi5s')
                return 
            } 
        }  
    }
}