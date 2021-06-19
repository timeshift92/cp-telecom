<script>
   export let vacancyItem; 
</script>
{#if (vacancyItem.name)}
 <h1>
  {vacancyItem.name}
</h1>
{#if (vacancyItem.additional)}
<h3>{vacancyItem.additional}</h3>
{/if}
{/if}
{#if vacancyItem.items}
{#each vacancyItem.items as item}
<h1>{item.name}</h1>
<ul>
  {#if item.items}
  {#each item.items as item}
<li>{item.liName}</li>
{/each}
{/if}
</ul>


<!-- <h1>Должностные обязанности:</h1>
<ul>
  <li></li>
</ul>
<h1>Условия:</h1>
<ul>
  <li></li>
</ul> -->
{/each}
{/if}
<style>
 h1{
    margin:0;
  }
  h3{
    font-weight:500;
    font-size: 24px;
  }
  ul{
    margin:0;
  }
  @media (min-width:320px) and (max-width:1023px){
    h1{
   font-size:16px;
  }
    h3{
    font-weight:500;
    font-size: 16px;
  }
  li{
    font-size: 16px;
  }
  }
</style>
