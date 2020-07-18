var app = new Vue({
   el: "#app",
   data: {
      tweet: "This is your tweet. Type to change",
      date: moment().format("DD/MM/yy"),
      time: moment().format("hh:mm A")
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
