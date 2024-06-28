
function openDialPad() {
  var phoneNumber = "tel:+917494825854";
  window.location.href = phoneNumber;
}





document.addEventListener("DOMContentLoaded", function() {
  const paragraphs = document.querySelectorAll('.read-p');
  paragraphs.forEach(paragraph => {
      const text = paragraph.innerHTML;
      const words = text.split(' ');

      if (words.length > 40) {
          const lessText = words.slice(0, 40).join(' ');
          const moreText = words.slice(40).join(' ');

          paragraph.innerHTML = `<span>${lessText}</span> <span class="more" style="display:none;">${moreText}</span>`;

          const button = document.createElement('button');
          button.textContent = 'Read More';
          button.classList.add('read-more');
          paragraph.appendChild(button);
      }
  });

  document.querySelectorAll('.read-more').forEach(button => {
      button.addEventListener('click', function() {
          const moreSpan = button.previousElementSibling;
          if (moreSpan.style.display === 'none') {
              moreSpan.style.display = 'inline';
              button.textContent = 'Read Less';
          } else {
              moreSpan.style.display = 'none';
              button.textContent = 'Read More';
          }
      });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const spiceimg = document.querySelectorAll('.spice-img');
  const productDetail = document.querySelectorAll('.product-detail-div1');

  function handleImageClick(event) {
      const target = event.target.getAttribute('data-target');
      productDetail.forEach(detail => {
        console.log('detail.id', detail.id, target)
          if (detail.id === target) {
              detail.classList.add('active');
          } else {
              detail.classList.remove('active');
          }
      });
  }

  spiceimg.forEach(img => {
      img.onclick = handleImageClick;
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const fruimg = document.querySelectorAll('.frui-img');
  const productDetail1 = document.querySelectorAll('.product-detail-div');

  function handleImageClick(event) {
      const target = event.target.getAttribute('data-target');
      productDetail1.forEach(detail => {
          if (detail.id === target) {
              detail.classList.add('active');
          } else {
              detail.classList.remove('active');
          }
      });
  }

  fruimg.forEach(img => {
      img.onclick = handleImageClick;
  });
});


document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
        .active-link {
            font-weight: 700;
            color: #000 !important;
        }
    `;
    document.head.appendChild(style);

    const header = document.querySelector('header ul');

    header.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            
            const links = header.querySelectorAll('a');
            links.forEach(link => link.classList.remove('active-link'));

         
            event.target.classList.add('active-link');
        }
    });
});
 document.addEventListener("DOMContentLoaded",function(){
    const frui = document.getElementById("ex1-tab-1");
    const veg = document.getElementById("ex1-tab-2");
    const fridetail = document.getElementById("pomo-detail");
    const vegdetail = document.getElementById("lemon-detail");
    veg.addEventListener("click", function(){
        console.log("clicked vegg") 
        if(vegdetail){
            vegdetail.classList.add("active"); 
        }
        if(fridetail){
            fridetail.classList.remove("active");
        }
    });
    frui.addEventListener("click", function(){
        fridetail.classList.add("active"); 
        vegdetail.classList.remove("active"); 
    console.log("clicked fruid") 
    });

    
 })
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const closeBtn = document.getElementById("closeBtn");
    const middleSec = document.getElementById("middleSec");

    hamburger.addEventListener("click", function() {
        middleSec.classList.toggle("show");
    });

    closeBtn.addEventListener("click", function() {
        middleSec.classList.remove("show");
    });
});

