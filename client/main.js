/* global gsap */

import {
  joo,
  delayP,
  getNode,
  insertLast,
  changeColor,
  renderSpinner,
  renderUserCard,
  createEmptyCard,
  renderEmptyCard,
  attr,
} from "./lib/index.js";

// rendingUserList 함수 만들기
// ajax (joo) get user List

// 유저 카드 생성
// 생성된 카드로 랜더링

//  1. userList.js로 갑니다.
//  2. renderUserCard 함수를 만들기
//  3. 만들어진 함수 안에 createUserCard를 던지고,
//  4. renderUserCard함수를 사용했을 때  랜더링이 잘 될 수 있도록.

const userCardContainer = getNode(".user-card-inner");

async function rendingUserList() {
  renderSpinner(userCardContainer);

  try {
    await delayP(2000);

    getNode(".loadingSpinner").remove();

    let response = await joo.get("http://localhost:3000/users");
    let userData = response.data;
    // userData.forEach(data=> renderUserCard(userCardContainer,data))
    userData.forEach((data) => {
      renderUserCard(userCardContainer, data);
    });

    changeColor(".user-card");

    gsap.to(gsap.utils.toArray(".user-card"), {
      x: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.2,
    });
  } catch (err) {
    renderEmptyCard(userCardContainer);
  }
}

rendingUserList();

const handler = (e) => {
  let delteButton = e.target.closest("button");
  let article = e.target.closest("article");

  if (!delteButton || !article) return;

  let id = attr(article, "data-index").slice(5);

  joo.delete(`http://localhost:3000/users/${id}`).then(() => {
    userCardContainer.innerHTML = "";
    rendingUserList();
  });
};

userCardContainer.addEventListener("click", handler);
