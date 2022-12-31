function clicker(obj) {
   var title = document.getElementById("title").value;
   var image = document.getElementById("image").value;
   var size =  document.getElementById("size").value;
   var color = document.getElementById("color").value;
   var div = document.createElement("div");
    div.classList.add("cardContainer");

   var img = document.createElement("img");
   img.src = image;
   div.append(img);
   var headingtitle = document.createElement("h3");
   headingtitle.innerHTML = title;
   div.append(headingtitle);
   const statusheading = document.createElement("h4");
   statusheading.innerHTML = "STATUS : ORDERED" 
   div.append(statusheading);
   var headingsize = document.createElement("h4");
   headingsize.innerHTML = "Size : " + size; 
   div.append(headingsize);
   const headingcolor = document.createElement("h4");
   headingcolor.innerHTML = "Color : " + color; 
   div.append(headingcolor);

   document.body.append(div);
}