<!-- routify:options preload="proximity" -->
<header>
  <div class="mobile__img"><img src="logo.webp"></div>
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


<style>
  .mobile__img,
.mobile__text{
  display:none
}
  header{
    background-color:rgb(58, 47, 26);
    /* height: 100%; */
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction:column;
    position: fixed;
    z-index: 999;
    border-top: 6px solid rgb(66, 66, 66);
    border-bottom: 6px solid rgb(66, 66, 66);
  }
 
  
  footer{
    height: 120px;
    width: 100%;
    background-color: rgb(255, 255, 255);
  
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
import Nav from '../components/Nav.svelte';

</script>
