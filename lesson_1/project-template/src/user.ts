import { renderBlock } from "./lib.js";

interface User {
  username: string;
  avatarUrl: string;
}

export function renderUserBlock(
  userName: string,
  avatar: string,
  favoriteItemsAmount?: number
) {
  const user: User = {
    username: userName,
    avatarUrl: avatar,
  };

  const favoritesCaption = favoriteItemsAmount
    ? favoriteItemsAmount
    : "ничего нет";

  const hasFavoriteItems = favoriteItemsAmount ? true : false;

  localStorage.setItem(
    "user",
    JSON.stringify({
      username: userName,
      avatarUrl: avatar,
    })
  );

  const localfavoriteItemsAmount: void =
    favoriteItemsAmount !== undefined
      ? localStorage.setItem(
        "favoriteItemsAmount",
        favoriteItemsAmount.toString()
      )
      : localStorage.setItem("favoriteItemsAmount", "");

  function getUserData() {
    const store = JSON.parse(localStorage.getItem("user")) as unknown;
    if (
      typeof store === "object" &&
      "username" in store &&
      "avatarUrl" in store
    ) {
      return store;
    }
    console.log(store);
  }

  function getFavoritesAmount() {
    const favorites = JSON.parse(
      localStorage.getItem("favoriteItemsAmount")
    ) as unknown;
    if (typeof favorites === "number") {
      return favorites;
    }
    console.log(favorites);
  }

  getUserData();
  getFavoritesAmount();

  renderBlock(
    "user-block",
    `
    <div class="header-container">
      <img class="avatar" src=${avatar} alt=${userName} />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? " active" : ""
    }"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  );
}

