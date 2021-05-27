var audio = document.getElementById('audio');
var audio2 = document.getElementById('audio2');
var audio3 = document.getElementById('audio3');
var totalProgress = $('.totalProgress');
var currentProgress = $('.currentProgress');
var currentProgress = $('.currentProgress2');
var currentProgress = $('.currentProgress3');
var currentTime = $('.currentTime');
var currentTime = $('.currentTime2');
var currentTime = $('.currentTime3');
var totalTime = $('.totalTime');
var totalTime = $('.totalTime2');
var totalTime = $('.totalTime3');
var timer;//��ʱ��
var timer2;//��ʱ��
var timer3;//��ʱ��

/*��ť����ʱ*/
$('.btn').on('click', function () {
    //�����Ƶ��ͣ
    if (audio.paused) {
        audio.play();//������Ƶ
        //���Ĳ��Ű�ť
        $('.play').css({'display': 'none'});
        $('.pause').css({'display': 'block'});
        //��ʱ��ʵʱ���Ľ���
        timer = setInterval(function () {
            if (audio.ended) {
                //�����Ƶ���Ž���
                $('.play').css({'display': 'block'});
                $('.pause').css({'display': 'none'});
            } else {
                //����ʱ��
                currentTime.text(formatTime(audio.currentTime));
                totalTime.text(formatTime(audio.duration));
                //���Ľ�����
                var ratio = audio.currentTime / audio.duration;
                currentProgress.css({'width': ratio * 100 + '%'});
            }
        }, 100)
    } else {
        audio.pause();
        $('.play').css({'display': 'block'});
        $('.pause').css({'display': 'none'});
    }
});
$('.btn1').on('click', function () {
    //�����Ƶ��ͣ
    if (audio2.paused) {
        audio2.play();//������Ƶ
        //���Ĳ��Ű�ť
        $('.play').css({'display': 'none'});
        $('.pause').css({'display': 'block'});
        //��ʱ��ʵʱ���Ľ���
        timer2 = setInterval(function () {
            if (audio2.ended) {
                //�����Ƶ���Ž���
                $('.play').css({'display': 'block'});
                $('.pause').css({'display': 'none'});
            } else {
                //����ʱ��
                currentTime2.text(formatTime(audio2.currentTime2));
                totalTime2.text(formatTime(audio2.duration));
                //���Ľ�����
                var ratio = audio2.currentTime2 / audio2.duration;
                currentProgress2.css({'width': ratio * 100 + '%'});
            }
        }, 100)
    } else {
        audio2.pause();
        $('.play').css({'display': 'block'});
        $('.pause').css({'display': 'none'});
    }
});
$('.btn2').on('click', function () {
    //�����Ƶ��ͣ
    if (audio3.paused) {
        audio3.play();//������Ƶ
        //���Ĳ��Ű�ť
        $('.play').css({'display': 'none'});
        $('.pause').css({'display': 'block'});
        //��ʱ��ʵʱ���Ľ���
        timer3 = setInterval(function () {
            if (audio3.ended) {
                //�����Ƶ���Ž���
                $('.play').css({'display': 'block'});
                $('.pause').css({'display': 'none'});
            } else {
                //����ʱ��
                currentTime3.text(formatTime(audio3.currentTime3));
                totalTime3.text(formatTime(audio3.duration));
                //���Ľ�����
                var ratio = audio3.currentTime3 / audio3.duration;
                currentProgress3.css({'width': ratio * 100 + '%'});
            }
        }, 100)
    } else {
        audio3.pause();
        $('.play').css({'display': 'block'});
        $('.pause').css({'display': 'none'});
    }
});

/*�������������Ľ���*/
totalProgress.on('click', function (ev) {
    //��ȡ�ٷֱ�
    var ratio = getRatio(ev);
    currentProgress.css({'width': ratio * 100 + '%'});
    //������Ƶ����
    audio.currentTime = audio.duration * ratio;
});

function getRatio(ev) {
    //�ܽ�������ʵ�ʿ���
    var totalWidth = totalProgress[0].offsetWidth;
    //�ܽ�������X����
    var totalX = totalProgress.offset().left;
    //����X����
    var mouseX = ev.clientX;
    //����ٷֱ�
    var ratio = (mouseX - totalX) / totalWidth;
    return ratio;
}

//��ʽ��ʱ��
function formatTime(time) {
    //ȡ��
    time = ~~time;
    var formatTime;
    if (time < 10) {
        formatTime = '00:0' + time;
    } else if (time < 60) {
        formatTime = '00:' + time;
    } else {
        var m = ~~(time / 60);
        if (m < 10) {
            m = '0' + m;
        }
        var s = time % 60;
        if (s < 10) {
            s = '0' + s;
        }
        formatTime = m + ':' + s;
    }
    return formatTime;
}