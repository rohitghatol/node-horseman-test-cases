var async = require('async');
var index = 0;
var Horseman = require('node-horseman');
var debug = require('debug')('horseman');

var printPage = function (callback) {


    var horseman = new Horseman({timeout: 20000, injectJquery: false});


    var fname = 'test' + index + '.pdf';
    index++;
    debug('printing ' + fname);

    horseman
        //.userAgent("Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0")
        .open('http://rohitghatol.github.io/pdf-print-server/login.html')
        .waitForSelector("#LoginID")
        .type("#LoginID", "admin")
        .type("#Password", "admin")
        .click("#Login")
        .waitForNextPage()
        .open('http://rohitghatol.github.io/pdf-print-server/print.html')
        //.waitFor(function () {
        //    return document.title;
        //}, 'done')
        .wait(20000)
        .pdf(fname, {
            width: '2400px',
            height: '1600px',
            margin: '0px'
        })
        .finally(function () {
            horseman.close();
            debug('closed');
            //callback(null,true);
        });

}


//async.parallel([printPage,printPage,printPage],function(){
//    console.log('done');
//    process.exit(0);
//})

//
setTimeout(printPage, 0);
//setTimeout(printPage,0);
//setTimeout(printPage,0);
//setTimeout(printPage,0);
//
