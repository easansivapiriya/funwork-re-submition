SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});
$(document).ready(function() {
 SC.stream('tracks/580908972',function(sound){
$('#start0').click(function(e) {
           e.preventDefault();
           sound.start();
         });
$('#stop0').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
 });

SC.stream('tracks/349457705',function(sound){
$('#start1').click(function(e) {
           e.preventDefault();
           sound.start();
         });
$('#stop1').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
 });

SC.stream('tracks/695864335',function(sound){
$('#start2').click(function(e) {
           e.preventDefault();
           sound.start();
         });
$('#stop2').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
 });

SC.stream('tracks/624412443',function(sound){
$('#start3').click(function(e) {
           e.preventDefault();
           sound.start();
         });
$('#stop3').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
 });

SC.stream('tracks/573195732',function(sound){
$('#start4').click(function(e) {
           e.preventDefault();
           sound.start();
         });
$('#stop4').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
 });

  }); 
