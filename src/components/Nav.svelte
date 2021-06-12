  <div on:click={openMenu} class="burger">
  <span class="unchange"  bind:this={f_line}></span>
  <span class="unchange" bind:this={s_line}></span>
  <span class="unchange" bind:this={th_line}></span>
</div>
<ul class="fade"  bind:this={menuElem}>

  <li on:click={closeMenu}>
    <a href="/">Главная</a>
  </li>
  <li on:click={closeMenu}>
    <a href="/internet">Интернет</a>
  </li>
  <li on:click={closeMenu}>
    <a href="/public-offer">Публичная оферта</a>
  </li>
  <li on:click={closeMenu}>
    <a href="/about-us">О нас</a>
  </li>
  <li on:click={closeMenu}>
    <a href="/ip-tv">IP TV</a>
  </li>
  <li on:click={closeMenu}>
    <a href="/ip-telephone">IP телефония</a>
  </li>
</ul>

<style>

  .burger{display:none}
ul{
  box-sizing: border-box;
  padding: 20px 0px ;
  display:flex;
  flex-direction: row;
  margin-left: 50%;
  margin-top: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid white;
  border-top: 1px solid white;
}  
li{
  text-decoration: none;
  list-style: none;
  margin: 0 20px;
  font-size: 18px;
  line-height: 58px;
}
a{
  color: gray;
}
a:hover{
  text-decoration: none;
  color: rgba(83, 75, 59, 0.9);
  transition: all .3s ease
}
a:focus{
  text-decoration: none;
  color: rgba(83, 75, 59, 0.9);
  transition: all .3s ease
}
a:active{
  text-decoration: none;
  color: rgba(83, 75, 59, 0.9);
  transition: all .3s ease
}
@media (min-width:1024px) and (max-width:1500px){
  ul{
  padding: 30px 0px ;
  margin-left: 48%;
  margin-top: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
}  
li{
  text-decoration: none;
  list-style: none;
  margin: 0 10px;
  font-size: 14px;
  line-height: 48px;
}
}
@media (min-width:320px) and (max-width:1023px){
  .burger{
    display:flex;
    flex-direction: column;
    margin-top: 80px;
    margin-left: 85%;
    color: white;
    width: 30px;
    cursor: pointer;
    z-index: 1;

  }
  .unchange{
    width: 100%;
    height:2px;
    background-color:white;
    margin-top: 4px;
    transition: all 1s ease;
  }
  ul{
    /* display:none; */
    display:flex;
  flex-direction: column;
    opacity:1;
    visibility: visible;
    width:100%;
    height:100vh;
    background-color:rgb(109, 94, 65);
    position: absolute;
    margin: 0;
    padding: 0;
    text-align: center;
    color: white;
    padding-top: 20px;
    transition:all .5s ease;
    /* transition-delay: 1s; */
    /* transform: translateX(-100px); */
  }
  a{
  color: rgb(255, 255, 255);
}
li{
  text-decoration: none;
  list-style: none;
  margin: 0 20px;
  font-size: 18px;
  line-height: 48px;
}
.fade{
  visibility: hidden !important;
    opacity:0 !important;
    display:block;
    width:100%;
    height:100vh;
    background-color:rgb(70, 63, 50);
    transition:all 1s ease;
    /* transition-delay: 1s; */
  }
  .change{
    transform: rotate(45deg);
    transition: all 1s ease;
  }
  .change-2{
    opacity:0;
    transition: all 1s ease;
  }
  .change-3{
    transform: rotate(-45deg);
    margin-top: -8px;
    transition: all 1s ease;
  }
}
</style>
<script>
  let menuElem;
  let menuToggle,
      f_line,
      s_line,
      th_line;
  // function toggleMenu() {
  //   if(menuToggle.classList.value.indexOf('openToggle') == -1){
  //     menuToggle.classList.add("openToggle");     
  //   }
 
  //   else {  
  //     menuToggle.classList.remove("openToggle");  
  //   }

  // }
  function closeMenu(){
    menuElem.classList.add("fade");
    f_line.classList.remove("change");
    s_line.classList.remove("change-2");
    th_line.classList.remove("change-3");

  }
  function openMenu() {
    if(menuElem.classList.value.indexOf('fade') == -1){
      menuElem.classList.add("fade");
      // menuElem.classList.remove("fade");
      f_line.classList.remove("change");
      s_line.classList.remove("change-2");
      th_line.classList.remove("change-3");
}
    else {  
      // menuElem.classList.add("fade");
    menuElem.classList.remove("fade");
    f_line.classList.add("change");
    s_line.classList.add("change-2");
    th_line.classList.add("change-3");
}
  }
</script>
