<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
</script>

<style  global>
  @import "../assets/global.css";
  #routify-app{
    /* display:grid;
    grid-template-rows:2fr 5fr 1fr;
    grid-template-columns: 100%; */
    display:flex;
    flex-direction:column;
    justify-content: flex-start;
    margin: 0;
    position: relative;
    }
    html{
      scroll-behavior: smooth;
    }
    body{ padding:0;
      scroll-behavior: smooth;}
      @media (min-width:320px) and (max-width:1023px){
      .fade{
        visibility: hidden;
        opacity:0;
        display:block;
        width:100%;
        height:100vh;
        background-color:rgb(70, 63, 50);
        transition:all 1s ease;
        /* transition-delay: 1s; */
  }
  .change{
    transform: rotate(45deg) !important;
    transition: all 1s ease;
  }
  .change-2{
    opacity:0;
    transition: all 1s ease;
  }
  .change-3{
    transform: rotate(-45deg) !important;
    margin-top: -8px !important;
    transition: all 1s ease;
  }}
</style>

<Router {routes} />
