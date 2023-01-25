/* ---------------------------------------------------------------------- */
/* Event bubbling & capturing                                             */
/* ---------------------------------------------------------------------- */

/* 버블링 ----------------------------------------------------------------- */
const vasual = getNode(".visual");
const news = getNode(".news");
const desc = getNode(".desc");

vasual.addEventListener("click", (e) => {
  // console.log("target : ", e.target);
  // console.log("currentTarget : ", e.currentTarget);
  // console.log(this === e.currentTarget);
  // console.log(this)
  console.log("%c visual", "background:dodgerblue");
  css(".pop", "display", "block");
});

getNode(".pop").addEventListener("click", (e) => {
  e.stopPropagation();
  css(".pop", "display", "none");
});

// news.addEventListener("click", () => {
//   console.log("%c visual", "background:coral");
// });
// desc.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("%c visual", "background:hotpink");
// });

/* 캡처링 ----------------------------------------------------------------- */
