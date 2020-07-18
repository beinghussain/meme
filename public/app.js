var app = new Vue({
   el: "#app",
   data: {
      tweet: "Some times I think I should create a meme page so that if I upload anything, no one is going to judge me!"
   },
   methods: {
      capture: () => {
         html2canvas(document.querySelector("#capture"), {
            allowTaint: false,
            background: "#ffffff"
         }).then(canvas => {
            var link = document.createElement("a");
            link.download = new Date() + ".jpeg";
            link.href = canvas.toDataURL();
            link.click();
         });
      }
   }
});
