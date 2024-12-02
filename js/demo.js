//domcontentloaded na ennana, full html doc load aana aprm thaan event animation lam start aagum
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#5cbdaa', //dot color mathalam
    lineColor: '#5cbdaa' //dot ah connect panura line color mathalam
  });

  //particle.js file anegama explain pana sola matanga, yen na athu oru framework madhiri dhaan, so namma adhu use panurom avalo thaan
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false); //idhu fullave particle.js documentation la potrukum, ena panraga na margin ah manipulate panraga, adha normal dom manipulation.

//INORU VISAYAM ENNA NA, PARTICLE.JS IPDI MATTUM ILLA, INUM NERAYA DESIGN, NERAYA ANIMATIONS IRKU,
//IPO NAMMA CHOOSE PANADHU ONLY ONE IN A MILLION

