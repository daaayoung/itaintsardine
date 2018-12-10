$(document).ready(function() {

        $(window).scroll(function() {

          if($(this).scrollTop() > 550) { 
              $('.navbar').addClass('solid');
              $('.back-to-top').addClass('visible'); 
          } else {
              $('.navbar').removeClass('solid');
              $('.back-to-top').removeClass('visible');  
          }

        });


        $("#scrollIcon").click(function(e) {
            e.preventDefault();
            $.scrollTo($("#step1"), 1000);
        });
        $("#nav-step1").click(function(e) {
            e.preventDefault();
            $.scrollTo($("#step1"), 1000);
        });
        $("#nav-step2").click(function(e) {
            e.preventDefault();
            $.scrollTo($("#step2"), 1000);
        });
        $("#nav-step3").click(function(e) {
            e.preventDefault();
            $.scrollTo($("#step3"), 1000);
        });
        $(".navbar-brand").click(function(e) {
            e.preventDefault();
            $.scrollTo(0, 1000);
        });
          
      });

<script>
function myFunction() {
  var x =document.getElementById("myText").value;
  document.getElemenybyId("demo").innerHTML = x;
}
<script>