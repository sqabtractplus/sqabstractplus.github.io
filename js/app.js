$(document).ready(function () {
    //on scroll mainatin active links
    var addClassOnScroll = function () {
        var windowTop = $(window).scrollTop();
        $('section[id]').each(function (index, elem) {
            var offsetTop = $(elem).offset().top;
            var outerHeight = $(this).outerHeight(true);
            if( windowTop > (offsetTop - 91) && windowTop < ( offsetTop + outerHeight)) {
                var elemId = $(elem).attr('id');
                $("nav ul li a.active").removeClass('active fs_navAct');
                $("nav ul li a[href='#" + elemId + "']").addClass('active fs_navAct');
            }
        });
    };

    $(function () {
        $(window).on('scroll', function () {
            if(!navClicked){
                addClassOnScroll();
            }
        });
    });




    //Point always to top on refresh
    history.scrollRestoration = "manual";
    $(window).on('beforeunload', function(){
        $(window).scrollTop(0); //ensure always at the top
    });

  var previousScroll = 0;
  var modalData = {};
  //0->H->HEader,1->T->Title,2->ST->Sub title,3->topicData->body
  modalData.about = "H:About~T:SQAbstractPlus~ST:Creating emotional connnect~topicData:The impulsive power strokes create beautiful rhythmic forms and impactful patterns to catch visitors attention and make forever emotional bond.";
  modalData.abtme = "H:ME~T:Shamim Qureshi~ST:A passionate abstract artist.~topicData:Me,Me,Me,Me";
  modalData.prmWork = "H:MY PROMINENT WORK~topicData:gOOD WORKD, GOOD WORK, good work. good work";
  modalData.pd_n = "H:PD~T:Product Details~ST: ~topicData:pd_n"; //topic data don't use. instead use pd json for it
  
  //This is topic data for product description of paintings or what ever
        //contains NAME:SIZE:TYPE:MATERIAL:others. Raplace in template
  var pd = {};
  pd.pd_1 = 'Abstract 1:4\' 0" X 3\' 0" x 2":Framed:Oil paints gouche on canvas:Abstraction World Series';
  pd.pd_2 = 'Abstract 2:4\' 0" X 3\' 0" x 2":Framed:Oil paints gouche on canvas:Abstraction World Series';
  pd.pd_3 = 'Abstract 3:4\' 0" X 3\' 0" x 2":Framed:Oil paints gouche on canvas:Abstraction World Series';
  pd.pd_4 = 'Abstract 4:4\' 0" X 3\' 0" x 2":Framed:Oil paints gouche on canvas:Abstraction World Series';
  pd.pd_5 = 'Abstract 5:4\' 0" X 3\' 0" x 2":Framed:Oil paints gouche on canvas:Abstraction World Series';
  pd.pd_6 = 'Abstract 6:4\' 0" X 3\' 0" x 2":Framed:Oil paints gouche on canvas:Abstraction World Series';
  pd.pd_7 = 'Abstract 7:4\' 0" X 3\' 0" x 2":Framed:Oil paints gouche on canvas:Abstraction World Series';
  pd.pd_8 = 'Abstract 8:4\' 0" X 3\' 0" x 2":Framed:Oil paints gouche on canvas:Abstraction World Series';

  function hideNav() {
      $(".navbar").removeClass("is-visible").addClass("is-hidden");
    //   $(".navbar").removeClass("fs_LightBg").addClass("bg-transparent");
  }

  function showNav() {
      $(".navbar").removeClass("is-hidden").addClass("is-visible").addClass("scrolling");
    //   $(".navbar").removeClass("bg-transparent").addClass("fs_LightBg").addClass("scrolling");
  }

  function showTopNav(){
      
  }
   $(window).scroll(function () {
      var currentScroll = $(this).scrollTop();
      if (currentScroll < 50) {
             showNav(); //showTopNav();
      } else if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()) {
          if (currentScroll > previousScroll) {
              hideNav();
          } else {
              showNav();
          }
          previousScroll = currentScroll;
      }
  });

 

// Initializing our modal.- Modal starts
//https://stackoverflow.com/questions/38496434/multiple-bootstrap-modals-in-a-single-page [   ]
/*  $('#myModal').modal({
    backdrop: 'static',
    keyboard: false,
    show: false,
});
*/

    var divId;
    $('.nav-link').click(function(){    
        divId = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(divId).offset().top // - 91
        }, 100);
        setTimeout(() => {
            navClicked = false;    
        }, 1000);
    });

    var navClicked = false; 
$(document).on("click",  function(e) {        
    //handle navbar link click
    if($(e.target).attr("class").indexOf("nav-link") !== -1 ){
        navClicked = true;
        $("#logoNav").find(".active").removeClass("active fs_navAct"); //in children
        $(e.target).addClass("active fs_navAct"); //add to clicked
        //don't return false
        
    }

    if(!navClicked && $(e.target).attr("class").indexOf("modalButton") !== -1 ){
        //ELSE assume modal handle click
        //MODAL click handler
        var clickedKey = $(e.target).attr("modal-key");// modal-key is key for modal
        var origClicked = clickedKey;
        if(clickedKey.indexOf('pd_') !== -1 ){ 
            clickedKey = "pd_n"; //data use only for header 
        }
        
        var modalBodyData =  ''; //"H:About~topicData:TopicDetails,TopicDetails,TopicDetails,TopicDetails";
        var headerData = '';
        var subHeaderData = '';
        var bodyData = '';
        //get key value pair
        modalBodyData = modalData[clickedKey].split("~"); //about
        headerData = 	(modalBodyData[1].split(":"))[1];	 //take value - T title
        subHeaderData =  (modalBodyData[2].split(":"))[1];	 //take value - T
        bodyData = 	(modalBodyData[3].split(":"))[1]; //take value
        // You can make an ajax call here if you want. 
        // Get the data and append it to a modal body.
        //$(".modal-body").html("<h3>" + headerData + "</h3> <p>"+ bodyData +"</p> ");
        $("#modHeader").html('<div style="font-size:25px;">' + headerData+" " + '<span style="font-size: 19px;color: #79bed3;">' + subHeaderData + '</span></div>');
        var workBody = '<div class="fs_resp_Sub_Sub_SL mb-1 mt-2 font-weight-bold">THE CHILD ARTIST</div><div class="fs_bdyTxt">As a child I fell in love with paints and brushes. I started painting earlier in high school and continued painting throughtout my college life. These were hobby paintings, however passion for art was ignited. </div><div class="fs_resp_Sub_Sub_SL mb-1 mt-2 font-weight-bold">RETIREMENT & BIRTH OF PASSIONATE ABSTRACTION ARTIST.</div><div class="fs_bdyTxt">Nearly 30 years of extensive world travel as corporate professional provided exposure to diversity of life, beauty of nature and stunning diversity in world of arts. Thus I learnt the precious nuances of Art - my Inner Passion.</div><div class="mt-3 fs_bdyTxt">With exposure to richness of world art, passion for this fine art and having ample time post retirement I\'ve devoted last 20 years to painting and learning the craft fully. In this journey I did lot of realistic & creative landscape, cityscape, seascape etc. in watercolor and acrylic. </div><div class="mt-3 fs_bdyTxt">Today after mastering various forms, techniques and producing substantial international level work I\'ve adapted Action Painting and embraced \'Abstract Expressionism\' which me and patrons immensely enjoy.</div><div class="fs_resp_Sub_Sub_SL mb-1 mt-2 font-weight-bold">MY PAINTING PROCESS</div><div class="fs_bdyTxt">I start with just broad ideas in mind. Thereafter my inner impulses combines multilayered pigments and power strokes. The unpredicted forms by power strokes in messy paintings infuse life and create vibrations in minds of the viewers. </div><div class="mt-3 fs_bdyTxt">Deliberate choice to limit palettes produces richness and elegance. Similarly I avoid easel and my paintings come from canvas placed flat on plywood boards. The paintings are build-up by pouring fluid / heavy acrylic paints with spoiled brushes, sticks, plastic bottles, spoons, paper glasses, etc.</div> <div class="mt-3 fs_bdyTxt">Before every painting each canvas is thickly gessoed.</div><div class="fs_resp_Sub_Sub_SL mb-1 mt-2 font-weight-bold">EXHIBITIONS & MEDIA COVERAGE</div><div class="fs_bdyTxt">My work is exhibited at famous art galleries at Mumbai&  Pune (India), UK and Canada. And media testimonials coverage by prominent newspapers like Times of India, Indian Express.</div>';
        if(clickedKey == 'abtme'){ //bigger dialogue box
            $("#modBody").html( "<div style='font-size: 22px;padding: 15px;border: 20px solid #cfe8f0;'>" + workBody + "</div>");
            $("#dialogueWidth").removeClass("fs_modalWidth_Small").addClass("fs_modalWidth_Big");
        }else if(clickedKey.indexOf('pd_') !== -1){ 
            //find out product details and it's key
            var pdKey = bodyData;
            var pdData = pd[origClicked];
            pdData = pdData.split(":"); //NAME:SIZE:TYPE:MATERIAL:others
            var lProductDetailsTempl = productDetailsTempl;
            lProductDetailsTempl = lProductDetailsTempl.replace('${NAME}',pdData[0]);
            lProductDetailsTempl = lProductDetailsTempl.replace('${SIZE}',pdData[1]);
            lProductDetailsTempl = lProductDetailsTempl.replace('${TYPE}',pdData[2]);
            lProductDetailsTempl = lProductDetailsTempl.replace('${MATERIAL}',pdData[3]);
            lProductDetailsTempl = lProductDetailsTempl.replace('${OTHERS}',pdData[4]);
            //insert into template
            $("#modBody").html("<div style='font-size: 22px;padding: 15px;border: 20px solid #cfe8f0;'>" + lProductDetailsTempl + "</div>");
            $("#dialogueWidth").removeClass("fs_modalWidth_Big").addClass("fs_modalWidth_Small");
        }else{ //small modal dialogue box
            $("#modBody").html("<p class='fs_bdyTxt' style='padding: 15px;border: 20px solid #cfe8f0;'>"+ bodyData +"</p>");
            $("#dialogueWidth").removeClass("fs_modalWidth_Big").addClass("fs_modalWidth_Small");
        }
        $('#myModal').modal('show');
    } //!navClicked
});  //document clicked
 //Modal end

 //Carousel
 $('.carousel-v .vertical .item-v').each(function(){
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=1;i<2;i++) {
        next=next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        
        next.children(':first-child').clone().appendTo($(this));
    }                           
});
//     $('.carousel').carousel({
//    interval: 0
//  });
 $('.btn-next').click(function(){
   $('.carousel').carousel('next');
 });
 $('.btn-prev').click(function(){
   $('.carousel').carousel('prev');
 });
 
 var productDetailsTempl = '<div class="card-header bg-transparent fs_resp_SL fontW2 fs_lineHeight fs_GlassBg  a-left fsC_none_brdr p-0 mb-3">'
     +'<div class="d-block fs_card_HL mb-2"><span style="font-weight: bold;">Name:</span> ${NAME}</div>'
     + '<div class="d-block fs_card_HL mb-2"><span style="font-weight: bold;">SIZE:</span>${SIZE}</div>'
    + '<div class="d-block fs_card_HL mb-2"><span style="font-weight: bold;">FRAMED / UNFRAMED:</span> ${TYPE}</div>'
    + '<div class="d-block fs_card_HL mb-2"><span style="font-weight: bold;">MATERiAL:</span> ${MATERIAL}</div>'
    + '<div class="d-block fs_card_HL mb-2"><span style="font-weight: bold;">Others:</span> ${OTHERS}</div>'
    + '</div>';

}); //document ready