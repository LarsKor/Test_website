// Kleine interacties: navigatie toggle en formulierverwerking
document.addEventListener('DOMContentLoaded',function(){
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if(toggle && nav){
    toggle.addEventListener('click',()=>{
      nav.classList.toggle('open');
      const open = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      // Simuleer succesvolle verzending (hier kun je fetch gebruiken naar een API)
      const name = form.name.value.trim();
      if(!name){
        status.textContent = 'Vul je naam in.';
        return;
      }
      status.textContent = 'Bericht verzonden. Dank je!';
      form.reset();
      setTimeout(()=>status.textContent='',4000);
    });
  }
});
