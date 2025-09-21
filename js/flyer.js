var windowObjectReference;
var strWindowFeatures = "menubar=no,location=yes,resizable=yes,scrollbars=yes,status=yes,width=700,height=700";
function popflyer() {
  windowObjectReference = window.open('docs/Flyer-Music_Dance.jpg','flyer',strWindowFeatures);
  try {
       windowObjectReference.focus();
   } catch (e) {
       alert("Website Admin: You cannot see the flyer as your Pop-up blocker is enabled! Please add this site to your exception list.");
   }
}
