
let menus = document.getElementById("menu_bar")

let close = document.getElementById("close")

let menu = document.getElementById("menu")

function sting(page) {
  window.location.href = page;
}

function venom(page1) {
  window.location.href = page1;
}

function abigail(page2) {
  window.location.href = page2;
}

function listOFseries(page3) {
  window.location.href = page3;
}



menus.addEventListener("click", () => {
  menu.classList.remove("hide")
  menus.classList.add("hide")
  close.classList.remove("hide")
})

close.addEventListener("click", () => {
  menu.classList.add("hide")
  menus.classList.remove("hide")
  close.classList.add("hide")
})


const shareButton = document.getElementById("my_list_section2");

if (navigator.share) {
    
shareButton.addEventListener("click", async () => {
      try {
        
await navigator.share({
          title: 'Check this out!',
          text: 'share',
          url: window.location.href  
        });
        console.log('share successful');
      } catch (error) {
        console.error('share failed', error);
      }
    });
  } else {
    console.log('Something wrong');
  }


const shareButton1 = document.getElementById("my_list_section3");

if (navigator.share) {
    
shareButton1.addEventListener("click", async () => {
      try {
        
await navigator.share({
          title: 'Check this out!',
          text: 'share',
          url: window.location.href  
        });
        console.log('share successful');
      } catch (error) {
        console.error('share failed', error);
      }
    });
  } else {
    console.log('Something wrong');
  }


const shareButton2 = document.getElementById("my_list_section4");

if (navigator.share) {
    
shareButton2.addEventListener("click", async () => {
      try {
        
await navigator.share({
          title: 'Check this out!',
          text: 'share',
          url: window.location.href  
        });
        console.log('share successful');
      } catch (error) {
        console.error('share failed', error);
      }
    });
  } else {
    console.log('Something wrong');
  }


const shareButton3 = document.getElementById("my_list_section5");

if (navigator.share) {
    
shareButton3.addEventListener("click", async () => {
      try {
        
await navigator.share({
          title: 'Check this out!',
          text: 'share',
          url: window.location.href  
        });
        console.log('share successful');
      } catch (error) {
        console.error('share failed', error);
      }
    });
  } else {
    console.log('Something wrong');
  }


const shareButton4 = document.getElementById("my_list_section6");

if (navigator.share) {
    
shareButton4.addEventListener("click", async () => {
      try {
        
await navigator.share({
          title: 'Check this out!',
          text: 'share',
          url: window.location.href  
        });
        console.log('share successful');
      } catch (error) {
        console.error('share failed', error);
      }
    });
  } else {
    console.log('Something wrong');
  }


const shareButton5 = document.getElementById("my_list_section7");

if (navigator.share) {
    
shareButton5.addEventListener("click", async () => {
      try {
        
await navigator.share({
          title: 'Check this out!',
          text: 'share',
          url: window.location.href  
        });
        console.log('share successful');
      } catch (error) {
        console.error('share failed', error);
      }
    });
  } else {
    console.log('Something wrong');
  }


