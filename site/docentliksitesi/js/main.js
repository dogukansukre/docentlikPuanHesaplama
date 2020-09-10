(function ($) {
    "use strict";

    /*==================================================================
    [ Load page ]*/
    try {
        $(".animsition").animsition({
            inClass: 'fade-in',
            outClass: 'fade-out',
            inDuration: 1500,
            outDuration: 800,
            linkElement: '.animsition-link',
            loading: true,
            loadingParentElement: 'html',
            loadingClass: 'animsition-loading-1',
            loadingInner: '<div class="loader05"></div>',
            timeout: false,
            timeoutCountdown: 5000,
            onLoadEvent: true,
            browser: ['animation-duration', '-webkit-animation-duration'],
            overlay: false,
            overlayClass: 'animsition-overlay-slide',
            overlayParentElement: 'html',
            transition: function (url) { window.location.href = url; }
        });
    } catch (er) { console.log(er); }


    /*==================================================================
    [ Back to top ]*/
    try {
        var windowH = $(window).height() / 2;

        $(window).on('scroll', function () {
            if ($(this).scrollTop() > windowH) {
                $("#myBtn").addClass('show-btn-back-to-top');
            } else {
                $("#myBtn").removeClass('show-btn-back-to-top');
            }
        });

        $('#myBtn').on("click", function () {
            $('html, body').animate({ scrollTop: 0 }, 300);
        });
    } catch (er) { console.log(er); }


    /*==================================================================
    [ Fixed menu ]*/
    try {
        var posNav = $('.wrap-main-nav').offset().top;
        var menuDesktop = $('.container-menu-desktop');
        var mainNav = $('.main-nav');
        var lastScrollTop = 0;
        var st = 0;

        $(window).on('scroll', function () {
            fixedHeader();
        });

        $(window).on('resize', function () {
            fixedHeader();
        });

        $(window).on('load', function () {
            fixedHeader();
        });

        var fixedHeader = function () {
            st = $(window).scrollTop();

            if (st > posNav + mainNav.outerHeight()) {
                $(menuDesktop).addClass('fix-menu-desktop');
            }
            else if (st <= posNav) {
                $(menuDesktop).removeClass('fix-menu-desktop');
            }

            if (st > lastScrollTop) {
                $(mainNav).removeClass('show-main-nav');
            }
            else {
                $(mainNav).addClass('show-main-nav');
            }

            lastScrollTop = st;
        };

    } catch (er) { console.log(er); }

    /*==================================================================
    [ Menu mobile ]*/
    try {
        $('.btn-show-menu-mobile').on('click', function () {
            $(this).toggleClass('is-active');
            $('.menu-mobile').slideToggle();
        });

        var arrowMainMenu = $('.arrow-main-menu-m');

        for (var i = 0; i < arrowMainMenu.length; i++) {
            $(arrowMainMenu[i]).on('click', function () {
                $(this).parent().find('.sub-menu-m').slideToggle();
                $(this).toggleClass('turn-arrow-main-menu-m');
            })
        }

        $(window).on('resize', function () {
            if ($(window).width() >= 992) {
                if ($('.menu-mobile').css('display') === 'block') {
                    $('.menu-mobile').css('display', 'none');
                    $('.btn-show-menu-mobile').toggleClass('is-active');
                }

                $('.sub-menu-m').each(function () {
                    if ($(this).css('display') === 'block') {
                        $(this).css('display', 'none');
                        $(arrowMainMenu).removeClass('turn-arrow-main-menu-m');
                    }
                });

            }
        });
    } catch (er) { console.log(er); }


    /*==================================================================
    [ Respon tab01 ]*/
    try {
        $('.tab01').each(function () {
            var tab01 = $(this);
            var navTabs = $(this).find('.nav-tabs');
            var dropdownMenu = $(tab01).find('.nav-tabs>.nav-item-more .dropdown-menu');
            var navItem = $(tab01).find('.nav-tabs>.nav-item');

            var navItemSize = [];
            var size = 0;
            var wNavItemMore = 0;

            $(window).on('load', function () {
                navItem.each(function () {
                    size += $(this).width();
                    navItemSize.push(size);
                });

                responTab01();
            });

            $(window).on('resize', function () {
                responTab01();
            })

            var responTab01 = function () {
                if (navTabs.width() <= navItemSize[navItemSize.length - 1] + 1) {
                    $(tab01).find('.nav-tabs>.nav-item-more').removeClass('dis-none');
                }
                else {
                    $(tab01).find('.nav-tabs>.nav-item-more').addClass('dis-none');
                }

                wNavItemMore = $(tab01).find('.nav-tabs>.nav-item-more').hasClass('dis-none') ? 0 : $(tab01).find('.nav-tabs>.nav-item-more').width();

                for (var i = 0; i < navItemSize.length; i++) {

                    if (navTabs.width() - wNavItemMore <= navItemSize[i] + 1) {
                        $(tab01).find('.nav-tabs .nav-item').remove();

                        for (var j = i - 1; j >= 0; j--) {
                            $(navTabs).prepend($(navItem[j]).clone());
                        }

                        for (var j = i; j < navItemSize.length; j++) {
                            $(dropdownMenu).append($(navItem[j]).clone());
                        }

                        break;
                    }
                    else {
                        $(tab01).find('.nav-tabs .nav-item').remove();

                        for (var j = i; j >= 0; j--) {
                            $(navTabs).prepend($(navItem[j]).clone());
                        }
                    }
                }
            };
        });
    } catch (er) { console.log(er); }


    /*==================================================================
    [ Play video 01 ]*/
    try {
        var srcOld = $('.video-mo-01').children('iframe').attr('src');

        $('[data-target="#modal-video-01"]').on('click', function () {
            $('.video-mo-01').children('iframe')[0].src += "&autoplay=1";

            setTimeout(function () {
                $('.video-mo-01').css('opacity', '1');
            }, 300);
        });

        $('[data-dismiss="modal"]').on('click', function () {
            $('.video-mo-01').children('iframe')[0].src = srcOld;
            $('.video-mo-01').css('opacity', '0');
        });
    } catch (er) { console.log(er); }


    /*==================================================================
    [ Tab mega menu ]*/
    try {
        $(window).on('load', function () {
            $('.sub-mega-menu .nav-pills > a').hover(function () {
                $(this).tab('show');
            });
        });
    } catch (er) { console.log(er); }

    /*==================================================================
    [ Slide100 txt ]*/

    try {
        $('.slide100-txt').each(function () {
            var slideTxt = $(this);
            var itemSlideTxt = $(this).find('.slide100-txt-item');
            var data = [];
            var count = 0;
            var animIn = $(this).data('in');
            var animOut = $(this).data('out');

            for (var i = 0; i < itemSlideTxt.length; i++) {
                data[i] = $(itemSlideTxt[i]).clone();
                $(data[i]).addClass('clone');
            }

            $(window).on('load', function () {
                $(slideTxt).find('.slide100-txt-item').remove();
                $(slideTxt).append($(data[0]).clone());
                $(slideTxt).find('.slide100-txt-item.clone').addClass(animIn + ' visible-true');
                count = 0;
            });

            setInterval(function () {
                $(slideTxt).find('.slide100-txt-item.ab-t-l.' + animOut).remove();
                $(slideTxt).find('.slide100-txt-item').addClass('ab-t-l ' + animOut);


                if (count >= data.length - 1) {
                    count = 0;
                }
                else {
                    count++;
                }

                console.log($(data[count]).text());

                $(slideTxt).append($(data[count]).clone());
                $(slideTxt).find('.slide100-txt-item.clone').addClass(animIn + ' visible-true');
            }, 5000);
        });
    } catch (er) { console.log(er); }


})(jQuery);


$(document).on('click', '.show-collapse', function () {

    $(this).next().collapse('toggle');

});

//konular


var docentPuan = new Array();
var normalPuan = new Array();
var count = 0;

$(document).on('click', '.show-add-model', function () {

    var puan = $(this).attr('data-point');
    var topic = $(this).attr('data-topic');
    var topicName = $(this).attr('data-topicname');
    var id = $(this).attr('data-id');
    var limit = $(this).attr('data-limit');

    $('#point-modal').val(puan);
    $('#modal-topic').val(topic);
    $('#modal-topicname').val(topicName);
    $('#id-modal').val(id);
    $('#modal-limit').val(limit);

    $('#exampleModal').modal('show');


});

function deleteRowArray(id, cevap) {

    var newArray = new Array();

    if (cevap == 'true') {

        $('#docent-sonra-table').html('');

        for (var k in docentPuan) {
            if (id != docentPuan[k].del) {
                var param = "'" + docentPuan[k].del + "','" + docentPuan[k].cevap + "'";
                var element = $('<tr>\
                <td>'+ docentPuan[k].id + '</td>\
                <td>'+ docentPuan[k].topicName + '</td>\
                <td>'+ docentPuan[k].kisi + '</td>\
                <td>'+ docentPuan[k].puan + '</td>\
                <td>'+ docentPuan[k].sonuc + '</td>\
                <td ><a class="btn btn-warning " onclick="deleteRowArray('+ param + ')">Sil</a></td>\
        </tr >');

                newArray.push(docentPuan[k]);
                $('#docent-sonra-table').append(element);

            }
        }

        docentPuan = newArray;

    }
    else {

        $('#docent-once-table').html('');

        for (var k in normalPuan) {
            if (id != normalPuan[k].del) {
                var param = "'" + normalPuan[k].del + "','" + normalPuan[k].cevap + "'";
                var element = $('<tr>\
                <td>'+ normalPuan[k].id + '</td>\
                <td>'+ normalPuan[k].topicName + '</td>\
                <td>'+ normalPuan[k].kisi + '</td>\
                <td>'+ normalPuan[k].puan + '</td>\
                <td>'+ normalPuan[k].sonuc + '</td>\
                <td><a class="btn btn-warning " onclick="deleteRowArray('+ param + ')">Sil</a></td>\
        </tr >');

                newArray.push(normalPuan[k]);

                $('#docent-once-table').append(element);

            }
        }

        normalPuan = newArray;
    }

    toplamPuanHesapla();

}

function modal_hesapla() {


    var topic = $('#modal-topic').val();
    var topicName = $('#modal-topicname').val();

    var limit = parseFloat($('#modal-limit').val()) ? parseFloat($('#modal-limit').val()) : 1000*1000 ;

    var topicPuan = 0;
   
    count++;
    $('#exampleModal').modal('hide');

    var kisi = $('#modal-kisi').val();
    var adet = $('#modal-adet').val();
    var cevap = $('#modal-cevap').val();
    var puan = $('#point-modal').val();
    var id = $('#id-modal').val();  
    
    var sonuc = (parseInt(puan) / parseInt(kisi)) * adet;

    var docAll = docentPuan.filter(x => x.topic == topic);
    var norAll = normalPuan.filter(x => x.topic == topic);

    for (var k in docAll) {
        topicPuan = topicPuan + parseInt(docAll[k].sonuc);
    }
    for (var k in norAll) {
        topicPuan = topicPuan + parseInt(norAll[k].sonuc);
    }

    if (limit < topicPuan + sonuc) {
        Swal.fire({
            icon: 'error',
            title: 'Islem basarisiz',
            text: 'Ust limiti astiniz!!',
            footer: '<a href>Ust Limit : ' + limit + '</a>'
        });
        return;
    }

    var del = count + id;
    var param = "'" + count + id + "','" + cevap + "'";
    var element = $('<tr>\
            <td>'+ id + '</td>\
            <td>'+ topicName + '</td>\
                <td>'+ kisi + '</td>\
                <td>'+ adet + '</td>\
                <td>'+ puan + '</td>\
                <td>'+ sonuc + '</td>\
                <td><a class="btn btn-warning " onclick="deleteRowArray('+ param + ')">Sil</a></td>\
        </tr >');

    if (cevap == 'true') {

        docentPuan.push({ id: id, topic: topic, topicName: topicName, cevap: cevap, kisi: kisi, puan: puan, sonuc: sonuc, del: del, limit: limit });


        $('#docent-sonra-table').append(element);

    } else {

        normalPuan.push({ id: id, topic: topic, topicName: topicName, cevap: cevap, kisi: kisi, puan: puan, sonuc: sonuc, del: del, limit: limit });

        $('#docent-once-table').append(element)
    }


    toplamPuanHesapla();


}

function toplamPuanHesapla() {

    var docOnce = 0;
    var docSonra = 0;
    var allTopic = [];

    for (var k in docentPuan) {
        docSonra = docSonra + docentPuan[k].sonuc;
        var find = allTopic.findIndex(x => x.topic === docentPuan[k].topic);
      
        if (find == -1) allTopic.push({ topic: docentPuan[k].topic, topicName: docentPuan[k].topicName, total: docentPuan[k].sonuc });
        else allTopic[find].total = allTopic[find].total + docentPuan[k].sonuc;
    }
    for (var k in normalPuan) {
        docOnce = docOnce + normalPuan[k].sonuc;
        var find = allTopic.findIndex(x => x.topic === normalPuan[k].topic);
        
        if (find == -1) allTopic.push({ topic: normalPuan[k].topic, topicName: normalPuan[k].topicName, total: normalPuan[k].sonuc });
        else allTopic[find].total = allTopic[find].total + normalPuan[k].sonuc;
    }
    
    $('#faliyet-hesap-table').html('');
   
    for (var k in allTopic) { 

        var element = $('<tr>\
            <td>'+ allTopic[k].topicName + '</td>\
            <td>'+ allTopic[k].total + '</td>\
        </tr >');

        $('#faliyet-hesap-table').append(element);       

    }
       
    $('#docent-once').text(docOnce);
    $('#docent-sonra').text(docSonra);
    $('#docent-toplam').text(docSonra + docOnce);

    if (docSonra >= 90 && (docSonra + docOnce) >= 100) {
        $('#basari-toplam').text("Basvurabilir").css('color','green');
    } else {
        $('#basari-toplam').text("Basvuramaz").css('color', 'red');;
    }

}