<!-- routify:options preload="proximity" -->
<header>
  <div class="mobile__img"><img src="./images/logo.png"></div>
  <div class="mobile__text">CAPITAL TELECOM</div>
  <Nav/>
</header>
<main>
<slot />
</main>
<footer>
  <div class="contacts">
 <span>+998 99 8999994</span>
 <span>+998 99 0099707</span>
</div>
</footer>
<!-- <div id="preloader">
  <div class="preloader_img"><img src="./images/logo.png"></div>
</div> -->

<style>
  /* Preloader */
/* 
  .hide{
  opacity: 0;
  transition: all .1s ease;
} 
 #preloader{
  height: 100%;
  width: 100%;
  background: rgb(77, 205, 255);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5;
  transition: all .5s ease;
  z-index: 99;
  text-align: center;
}
.preloader_img{
  position: relative;
  margin: 0px auto;
  top:50% ;
}
.preloader_img > img{
  width: 100px ;
  height: 100px;
} */

/* end */
  .mobile__img,
.mobile__text{
  position:absolute;
  color: white;
}
.mobile__img{
  left: 100px;
  top: 20px;
}
.mobile__img > img{
  width: 80px;
  height: 80px;
}
.mobile__text{
  left: 220px;
  top: 50px;
  font-size:24px;
  font-family: "Oswald", sans-serif;
}

  header{
    background-color:rgb(58, 47, 26);
    /* height: 100%; */
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction:column;
    position: fixed;
    z-index: 10;
    border-top: 6px solid rgb(66, 66, 66);
    border-bottom: 6px solid rgb(66, 66, 66);
  }
 
  
  footer{
    height: 120px;
    width: 100%;
    background-color: rgb(255, 255, 255);
    font-family:"HELVETICA", sans-serif;
    color: rgb( 83,73,45);
  }
  .contacts > span{
  
    font-size:40px;
  }
  .contacts{
    width:60%;
    margin: 50px auto;
    display: flex;
    flex-direction:row;
    justify-content:space-around;
  }
  main{
    margin-top: 130px;
  }
  @media (min-width:1024px) and (max-width:1500px){
  .contacts > span{
  
    font-size:30px;
  }
}
  @media (min-width:320px) and (max-width:1023px){
    header{
    background-color:rgb(66, 66, 66);}
    .contacts > span{
  
  font-size:20px;
  
}
.mobile__img,
.mobile__text{
  display:block;
  color: white;
  position: absolute;
}
.mobile__img{
  top: 10px;
  left: 10px;
}
.mobile__text{
  left: 30%;
  top: 40%;
  font-size:16px;
}
.mobile__img > img{
  width: 50px;
  height: 50px;
}

.contacts{
  width:200px;
  margin: 50px auto;
  display: flex;
  flex-direction:column;
  justify-content:space-around;
}
}

</style>

<script>
import Nav from './components/Nav.svelte';

//  window.addEventListener("load", () => {
//    const preloaders = document.getElementById("preloader");

//    setTimeout(function () {
//      preloaders.style.opacity = "0";
//      preloaders.style.transform = "translateX(-100%)"
//    }, 500);
//    setTimeout(function () {
//      preloaders.style.display = "none";

//    }, 1000);
//    })
</script>
