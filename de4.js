// Koden kopiret fra console

let placesToVisit = ["Los Angeles", "New York", "Chicago", "Washington, D.C", "San Francisco"];
undefined
for (var i = 0; i < placesToVisit.length; i++) {
  document.write(`<p> ${placesToVisit[i]}</p>`);

}
VM462:2 [Violation] Avoid using document.write(). https://developers.google.com/web/updates/2016/08/removing-document-write
(anonymous) @ VM462:2
VM462:2 [Violation] Avoid using document.write(). https://developers.google.com/web/updates/2016/08/removing-document-write
(anonymous) @ VM462:2
VM462:2 [Violation] Avoid using document.write(). https://developers.google.com/web/updates/2016/08/removing-document-write
(anonymous) @ VM462:2
VM462:2 [Violation] Avoid using document.write(). https://developers.google.com/web/updates/2016/08/removing-document-write
(anonymous) @ VM462:2
VM462:2 [Violation] Avoid using document.write(). https://developers.google.com/web/updates/2016/08/removing-document-write
(anonymous) @ VM462:2
undefined
placesToVisit.push("Jackson")
6
function outputArray(theArray) {
  console.log(theArray)
};
undefined
outputArray(placesToVisit);
VM587:2 (6) ["Los Angeles", "New York", "Chicago", "Washington, D.C", "San Francisco", "Jackson"]
undefined
placesToVisit.splice(0,2);
(2) ["Los Angeles", "New York"]
outputArray(placesToVisit);
VM587:2 (4) ["Chicago", "Washington, D.C", "San Francisco", "Jackson"]
undefined
placesToVisit.sort();
(4) ["Chicago", "Jackson", "San Francisco", "Washington, D.C"]
