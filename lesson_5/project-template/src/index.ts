import { renderSearchFormBlock } from "./search-form.js";
import {
  // renderSearchResultsBlock,
  renderSearchStubBlock,
} from "./search-results.js";
import { getFavoritesAmount, renderUserBlock } from "./user.js";
// import { renderToast } from "./lib.js";
declare const window: Window;
if (typeof window !== undefined && window && window.addEventListener) {
  window.addEventListener("DOMContentLoaded", () => {
    const today = new Date();
    const dateIn = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 1
    );
    const dateOut = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 3
    );

    renderUserBlock("Anton Pryakhin", "/img/avatar.png", getFavoritesAmount());
    renderSearchFormBlock(dateIn, dateOut);
    renderSearchStubBlock();

  });
} else {
  console.log("This is not browser!");
}

// console.log('Hello World!')



