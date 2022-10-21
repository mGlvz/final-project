var MODEL = (function(){
    var _homeContent = `<div class="home">
    <section class="hero">
      <div class="callout-container">
        <div class="callout">Header goes here</div>
        <div class="extraText">Less important text goes here</div>
        <div class="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
          aliquid minus nemo sed est.
        </div>
        <div class="read-more">
          <div class="read-more-text">READ MORE</div>
        </div>
      </div>
    </section>
    <div class="homeDescription">
      <div class="textBox">
        <div class="textContent">
          “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium totam rem aperiam eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Iste natus error sit voluptatem accusantium
          doloremque laudantium totam rem aperiam eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo”
        </div>
      </div>
      <div class="name">John Smith</div>
      <div class="nameTitle">Corporation CEO, books author.</div>
    </div>
    <div class="upcomingEvents">
      <div class="eventsTitle">
        <div class="title">UPCOMING EVENTS:</div>
      </div>
      <div class="eventsBox">
        <div class="event">
          <div class="date-container">
            <div class="date-box">
              <div class="date-day">06</div>
              <div class="date-month">JUN</div>
            </div>
          </div>
          <div class="textContainer">
            <div class="whiteText">
              Sed et persipiatis unde omnis iste natus
            </div>
            <div class="pinkText">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aliquid temporibus quos aspernatur
            </div>
          </div>
        </div>
        <div class="event">
          <div class="date-container">
            <div class="date-box">
              <div class="date-day">30</div>
              <div class="date-month">JUL</div>
            </div>
          </div>
          <div class="textContainer">
            <div class="whiteText">
              Sed et persipiatis unde omnis iste natus
            </div>
            <div class="pinkText">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aliquid temporibus quos aspernatur
            </div>
          </div>
        </div>
        <div class="event">
          <div class="date-container">
            <div class="date-box">
              <div class="date-day">30</div>
              <div class="date-month">AUG</div>
            </div>
          </div>
          <div class="textContainer">
            <div class="whiteText">
              Sed et persipiatis unde omnis iste natus
            </div>
            <div class="pinkText">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aliquid temporibus quos aspernatur
            </div>
          </div>
        </div>
        <div class="event">
          <div class="date-container">
            <div class="date-box">
              <div class="date-day">23</div>
              <div class="date-month">NOV</div>
            </div>
          </div>
          <div class="textContainer">
            <div class="whiteText">
              Sed et persipiatis unde omnis iste natus
            </div>
            <div class="pinkText">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aliquid temporibus quos aspernatur
            </div>
          </div>
        </div>
        <div class="event">
          <div class="date-container">
            <div class="date-box">
              <div class="date-day">23</div>
              <div class="date-month">DEC</div>
            </div>
          </div>
          <div class="textContainer">
            <div class="whiteText">
              Sed et persipiatis unde omnis iste natus
            </div>
            <div class="pinkText">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aliquid temporibus quos aspernatur
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
    var _aboutContent = `<div class="about">
    <section class="about-hero">
      <div class="hero-image"></div>
    </section>
    <div class="aboutTitle">
      <div class="titleWords">OUR HISTORY:</div>
    </div>
    <div class="aboutContainer">
      <div class="aboutText">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem.
      </div>
    </div>
  </div>`;
    var _galleryContent = `<div class="gallery">
    <div class="galleryContainer">
      <div class="galleryTitle">
        <div class="titleWords">GALLERY:</div>
      </div>
      <div class="row-one">

        <div id="gallery1" class="pic1"></div>
        
        <div class="pic2"></div>
        <div class="pic3"></div>
      </div>
      <div class="row-two">
        <div class="pic4"></div>
        <div class="pic5"></div>
      </div>
    </div>
  </div>`;
    var _gallery1Content = `<div class="gallery1">
    <section class="about-hero">
      <div class="hero-image"></div>
    </section>

    <div class="galleryTitle">
      <div class="titleNumber">1.</div>
      <div class="titleWords">food festival</div>
    </div>

    <div class="aboutContainer">
      <div class="aboutText">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt.
      </div>
      <div class="aboutText2">
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </div>
    </div>
  </div>`;
    var _gallery2Content = `<div class="gallery2">
    <section class="about-hero">
      <div class="hero-image"></div>
    </section>

    <div class="galleryTitle">
      <div class="titleNumber">2.</div>
      <div class="titleWords">dee-jay</div>
    </div>

    <div class="aboutContainer">
      <div class="aboutText">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt.
      </div>
      <div class="aboutText2">
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </div>
    </div>
  </div>`;
    var _gallery3Content = `<div class="gallery3">
    <section class="about-hero">
      <div class="hero-image"></div>
    </section>

    <div class="galleryTitle">
      <div class="titleNumber">3.</div>
      <div class="titleWords">speech</div>
    </div>

    <div class="aboutContainer">
      <div class="aboutText">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt.
      </div>
      <div class="aboutText2">
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </div>
    </div>
  </div>`;
    var _gallery4Content = `<div class="gallery4">
    <section class="about-hero">
      <div class="hero-image"></div>
    </section>

    <div class="galleryTitle">
      <div class="titleNumber">4.</div>
      <div class="titleWords">open foodfest</div>
    </div>

    <div class="aboutContainer">
      <div class="aboutText">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt.
      </div>
      <div class="aboutText2">
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </div>
    </div>
  </div>`;
    var _gallery5Content = `<div class="gallery5">
    <section class="about-hero">
      <div class="hero-image"></div>
    </section>

    <div class="galleryTitle">
      <div class="titleNumber">5.</div>
      <div class="titleWords">international</div>
    </div>

    <div class="aboutContainer">
      <div class="aboutText">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt.
      </div>
      <div class="aboutText2">
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </div>
    </div>
  </div>`;
    var _blogContent = `<div class="blog">
    <div class="blogContainer">
      <div class="blogTitle">
        <div class="titleWords">BLOG:</div>
      </div>
      <div class="postContainer">
        <div class="blog-post">
          <div class="date-container">
            <div class="date-box">
              <div class="date-day">06</div>
              <div class="date-month">JUN</div>
            </div>
          </div>
          <div class="content-container">
          <a id="blog1" href="#">
          <div class="post-image"></div>
        </a>
            <div class="post-title">
              <p>Sed et persipiatis unde omnis iste natus</p>
            </div>
            <div class="post-content">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et
                quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
        </div>
        <div class="blog-post">
          <div class="date-container">
            <div class="date-box">
              <div class="date-day">30</div>
              <div class="date-month">JUL</div>
            </div>
          </div>
          <div class="content-container">
            <a id="blog2" href="#">
          <div class="post-image"></div>
            </a>
            <div class="post-title">
              <p>Sed et persipiatis unde omnis iste natus</p>
            </div>
            <div class="post-content">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et
                quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
        </div>
        <div class="blog-post">
          <div class="date-container">
            <div class="date-box">
              <div class="date-day">30</div>
              <div class="date-month">AUG</div>
            </div>
          </div>
          <div class="content-container">
          <a id="blog3" href="#">
          <div class="post-image"></div>
        </a>
            <div class="post-title">
              <p>Sed et persipiatis unde omnis iste natus</p>
            </div>
            <div class="post-content">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et
                quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
        </div>
        <div class="blog-post">
          <div class="date-container">
            <div class="date-box">
              <div class="date-day">23</div>
              <div class="date-month">NOV</div>
            </div>
          </div>
          <div class="content-container">
          <a id="blog4" href="#">
          <div class="post-image"></div>
        </a>
            <div class="post-title">
              <p>Sed et persipiatis unde omnis iste natus</p>
            </div>
            <div class="post-content">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et
                quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
        </div>
        <div class="blog-post">
          <div class="date-container">
            <div class="date-box">
              <div class="date-day">23</div>
              <div class="date-month">DEC</div>
            </div>
          </div>
          <div class="content-container">
          <a id="blog5" href="#">
          <div class="post-image"></div>
        </a>
            <div class="post-title">
              <p>Sed et persipiatis unde omnis iste natus</p>
            </div>
            <div class="post-content">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et
                quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
    var _blog1Content = `<div class="blogPost">
    <section class="blog-post-hero">
      <div class="hero-image"></div>
    </section>

    <div class="date-container">
      <div class="date-box">
        <div class="date-day">06</div>
        <div class="date-month">JUN</div>
      </div>
    </div>

    <div class="blogPostContainer">
      <div class="postHeader">Header #1:</div>
      <div class="postText">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt.
      </div>
      <div class="postText2">
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </div>
      <div class="postHeader">Header #2:</div>
      <div class="postText3">
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </div>
    </div>
  </div>`;
    var _blog2Content = `<div class="blogPost">
    <section class="blog-post-hero">
      <div class="hero-image"></div>
    </section>

    <div class="date-container">
      <div class="date-box">
        <div class="date-day">30</div>
        <div class="date-month">JUL</div>
      </div>
    </div>

    <div class="blogPostContainer">
      <div class="postHeader">Header #1:</div>
      <div class="postText">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt.
      </div>
      <div class="postText2">
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </div>
      <div class="postHeader">Header #2:</div>
      <div class="postText3">
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </div>
    </div>
  </div>`;
    var _blog3Content = `<div class="blogPost">
    <section class="blog-post-hero">
      <div class="hero-image"></div>
    </section>

    <div class="date-container">
      <div class="date-box">
        <div class="date-day">30</div>
        <div class="date-month">AUG</div>
      </div>
    </div>

    <div class="blogPostContainer">
      <div class="postHeader">Header #1:</div>
      <div class="postText">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt.
      </div>
      <div class="postText2">
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </div>
      <div class="postHeader">Header #2:</div>
      <div class="postText3">
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </div>
    </div>
  </div>`;
    var _blog4Content = `<div class="blogPost">
    <section class="blog-post-hero">
      <div class="hero-image"></div>
    </section>

    <div class="date-container">
      <div class="date-box">
        <div class="date-day">23</div>
        <div class="date-month">NOV</div>
      </div>
    </div>

    <div class="blogPostContainer">
      <div class="postHeader">Header #1:</div>
      <div class="postText">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt.
      </div>
      <div class="postText2">
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </div>
      <div class="postHeader">Header #2:</div>
      <div class="postText3">
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </div>
    </div>
  </div>`;
    var _blog5Content = `<div class="blogPost">
    <section class="blog-post-hero">
      <div class="hero-image"></div>
    </section>

    <div class="date-container">
      <div class="date-box">
        <div class="date-day">23</div>
        <div class="date-month">DEC</div>
      </div>
    </div>

    <div class="blogPostContainer">
      <div class="postHeader">Header #1:</div>
      <div class="postText">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt.
      </div>
      <div class="postText2">
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </div>
      <div class="postHeader">Header #2:</div>
      <div class="postText3">
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </div>
    </div>
  </div>`;
    var _contactContent = `<div class="contact">
    <div class="contact-container">
      <div class="contact-title">CONTACT US:</div>
      <div class="contact-box">
        <div class="input-box">
          <div class="input1">
            <label for="your name"></label>
            <input type="text" placeholder="    Your name..." />
          </div>
          <div class="input2">
            <label for="email address"></label>
            <input type="text" placeholder="    Email Address..." />
          </div>
          <div class="input3">
            <label for="company"></label>
            <input type="text" placeholder="    Company..." />
          </div>
          <div class="input4">
            <label for="message"></label>
            <input type="text" placeholder="    Message..." />
          </div>
          <div class="message-button">
            <div class="send-message">SEND MESSAGE</div>
          </div>
        </div>
        <div class="map-box">
          <div class="map-image"></div>
        </div>
      </div>
    </div>
  </div>`;
  

  function initListeners(){
    $("a").click(function(e){
        // this stores the id from the anchor tag
        let aID = e.currentTarget.id
        let contentID = aID + "Content";

        MODEL.updateView(contentID);
    })
}
    
    var _updateView = function(pageName){
        console.log("model " + pageName);
        var pageContent = "_" + pageName;
        $("#app").html(eval(pageContent));

        if (pageContent == "_homeContent"){
          $("#nav").removeClass("dark");
        }else{
          $("#nav").addClass("dark");
        }

        initListeners();
    }

    return{
        updateView: _updateView,
    }
})();