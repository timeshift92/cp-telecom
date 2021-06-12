<div class="public__content">
  <div class="public__content__img">
    <img src="/images/public-offer.webp" alt="публичная оферта">
  </div>
  <div class="public__content__text"><p>Публичная оферта</p></div>
</div>

<style>
  .public__content{
    text-align: center;
    display:flex;
    justify-content: center;
    margin: 120px auto;
  }
  .public__content__text{
    font-size:24px;
    font-weight:500;
    margin-left: 20px;
    margin-top: 50px;
  }
  @media (min-width:1024px) and (max-width:1500px){
    .public__content__img > img{
      width: 10vw;
      height: 150px;
  }
  .public__content__text{
    font-size:20px;
  }
  }
  @media (min-width:320px) and (max-width:768px){
    .public__content{
    text-align: center;
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin: 120px auto;
  }
  .public__content__img > img{
      width: 40vw;
      height: 200px;
  }
  .public__content__text{
    font-size:20px;
    margin-top: 10px;
  }
  }
  @media (min-width:769px) and (max-width:1023px){
    .public__content{
    text-align: center;
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin: 120px auto;
  }
  .public__content__img > img{
      width: 40vw;
      height: 350px;
  }
  .public__content__text{
    font-size:20px;
    margin-top: 10px;
  }
  }
</style>
