const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);

    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

function createUserCard(user) {
  const cardHTML = `
<div class="card">
<div>
<img class="avatar" src="https://randomuser.me/api/portraits/women/30.jpg" alt="">
</div>
<div class="user-info">
<h2>Emily Green</h2>
<p>Adipisicing consequatur tempora expedita suscipit elit perferendis. Quasi facilis laborum</p>

<ul>
  <li>300 <strong>Followers</strong></li>
  <li>100 <strong>Following</strong></li>
  <li>30 <strong>Repos</strong></li>
</ul>

<div class="repos">
<a class="repo" href="#">Repo 1</a>
<a class="repo" href="#">Repo 2</a>
<a class="repo" href="#">Repo 3</a>
</div>
</div>
</div>


  `;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);

    search.value = "";
  }
});
