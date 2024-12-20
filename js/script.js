$(document).ready(function() {
    $('.ico-bars').click(function(){
        $('.ico-bars').toggleClass('fa-xmark');
        $('.nav-menu ul').slideToggle();
    });
    $(window).resize(function(){
        if($(document).width()<=991){
            $('.nav-menu ul').hide();
        }
        if($(document).width()>991){
            $('.nav-menu ul').show();
        }
    });
});


















<div class="col25">
<div class="serv-card-layout">
  <div class="card">
    <figure>
      <img src="./img/im6.jpg" alt="">
      </figure>
      <h3>gardening news</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum sunt esse maxime alias eos. Quam veritatis rerum nemo aut tempora.
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet ab iste tempore delectus! Est iure repudiandae, consequuntur, 
         dignissimos amet architecto sunt vitae culpa eaque fugiat, ad repellat labore? Dolore consequuntur earum rem quae impedit
          ullam minima excepturi incidunt qui hic.</p>
    
      <a href="button" target="_blank">Read more</a>
  </div>

</div>
</div>