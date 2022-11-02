var deptObject = {
  "Arabic": {
        "2021-22": ["SAMPLE1", "SAMPLE2", "SAMPLE3"],
        "2020-21": ["SAMPLE1", "SAMPLE2", "SAMPLE3"],
        "2019-20": ["SAMPLE1", "SAMPLE2", "SAMPLE3"],
        "2018-19": ["SAMPLE1", "SAMPLE2", "SAMPLE3"],
        "2017-18": ["SAMPLE1", "SAMPLE2", "SAMPLE3"]    
  },
  "Economics": {
      "2021-22": ["Dr. HARI KURUP K K", "Dr. REJUNA C A", "Mr. BALAKRISHNAN U", "Mr. SUBHASH P P", "Mr. ISMAYIL P", "Mr. ANOOPKUMAR M", "Mr. VINOD V"],
      "2020-21": ["Dr. HARI KURUP K K", "Dr. REJUNA C A", "Mr. BALAKRISHNAN U", "Mr. SUBHASH P P", "Mr. ISMAYIL P", "Mr. ANOOPKUMAR M", "Mr. VINOD V"],
      "2019-20": ["Dr. HARI KURUP K K", "Dr. REJUNA C A", "Mr. BALAKRISHNAN U", "Mr. SUBHASH P P", "Mr. ISMAYIL P", "Mr. ANOOPKUMAR M", "Mr. VINOD V"],
      "2018-19": ["Dr. HARI KURUP K K", "Dr. REJUNA C A", "Mr. BALAKRISHNAN U", "Mr. MANOJ CHATHOTH", "Mr. SUBHASH P P", "Mr. ISMAYIL P", "Mr. ANOOPKUMAR M"],
      "2017-18": ["Dr. HARI KURUP K K", "Dr. REJUNA C A", "Mr. BALAKRISHNAN U", "Mr. MANOJ CHATHOTH", "Mr. SUBHASH P P", "Mr. ISMAYIL P", "Mr. ANOOPKUMAR M"]
  }
}
window.onload = function() {
  var deptSel = document.getElementById("department");
  var yearSel = document.getElementById("year");
  var facultySel = document.getElementById("faculty");
  for (var x in deptObject) {
    deptSel.options[deptSel.options.length] = new Option(x, x);
  }
  deptSel.onchange = function() {
    //empty faculty- and year- dropdowns
    facultySel.length = 1;
    yearSel.length = 1;
    //display correct values
    for (var y in deptObject[this.value]) {
      yearSel.options[yearSel.options.length] = new Option(y, y);
    }
  }
  yearSel.onchange = function() {
    //empty faculty dropdown
    facultySel.length = 1;
    //display correct values
    var z = deptObject[deptSel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      facultySel.options[facultySel.options.length] = new Option(z[i], z[i]);
    }
  }
}
