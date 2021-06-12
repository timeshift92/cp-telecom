<section class ="ip-telephone__video">
  <video autoplay loop >
    <source src="/video/ip-phone.mp4">
  </video>
</section>
<style>
  .ip-telephone__video{
    margin: 0 auto;
    width:80% ;
    height: 100%;
    margin-top: 50px;
    object-fit: cover;
    object-position: 100% 50%;
  }
  .ip-telephone__video > video{
    height: 500px;
    width: 1200px;
    object-fit: cover;
    object-position: 100% 50%;
  }
  @media (min-width:1024px) and (max-width:1500px){
    .ip-telephone__video > video{
    height: 400px;
    width: 800px;
    object-fit: cover;
    object-position: 100% 50%;
  }
  }
  @media (min-width:320px) and (max-width:768px){
    .ip-telephone__video{
    margin: 0 auto;
    width:100%;
    height: 100%;
    margin-top: 0px;

  }
  .ip-telephone__video > video{
    height: 250px;
    width: 100%;
    margin: 0 auto;
    object-fit: cover;
    object-position: 100%;
  }
  }
  @media (min-width:769px) and (max-width:1023px){
    .ip-telephone__video{
    margin: 0 auto;
    width:100%;
    height: 100%;
    margin-top: 0px;

  }
  .ip-telephone__video > video{
    height: 300px;
    width: 100%;
    margin: 0 auto;
    object-fit: cover;
    object-position: 100%;
  }
  }
</style>
