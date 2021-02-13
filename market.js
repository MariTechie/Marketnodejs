var csv = require("csvtojson");

const csvFilePath = 'C:\\Users\\Crayonte001\\Desktop\\RELIANCE.NS.csv' //file path of csv
csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        console.log(jsonObj);
        var date = '2/12/2021'
        var total = 0.0
        var tp = 30
        console.log(date);
        console.log(tp);
        console.log(jsonObj.length);

        for (var i = 0; i < jsonObj.length; i++) {
            var date1 = jsonObj[i].Date;


            if (date1 == date) {
                console.log("inside date loop");
                console.log(date1);
                for (var j = i; j > i - tp; j--) {
                    total = parseFloat(total) + (parseFloat(jsonObj[j].Open) + parseFloat(jsonObj[j].High) + parseFloat(jsonObj[j].Low) + parseFloat(jsonObj[j].Close));

                }

                console.log(parseFloat(total) / 30);

            }
        }

    })