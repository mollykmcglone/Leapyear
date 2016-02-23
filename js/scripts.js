// var leapYear = function(year) {
//   if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
//     return true;
//   } else {
//     return false;
//   }
// };
//
// $(document).ready(function() {
//   $("form#leap-year").submit(function(event) {
//     var year = parseInt($("input#year").val());
//     var result = leapYear(year);
//
//     $(".year").text(year);
//
//     if (!result) {                 // same as writing if (result === false)
//       $(".not").text("not");
//     } else {
//       $(".not").text("");
//     }
//
//     $("#result").show();
//     event.preventDefault();
//   });
// });

var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    var year = parseInt($("input#year").val());

    $(".year").text(year);



    var result = leapYear(year);

    if ((year < 0) || (isNaN(year)) || (year === "")) {
      $("#error").show();
      $("#result").hide();

    } else if (result) {
      $(".not").text("");
      $("#result").show();
      $("#error").hide();

    } else {
      $(".not").text("not");
      $("#result").show();
      $("#error").hide();
    }


    event.preventDefault();
  });
});
