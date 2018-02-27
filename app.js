//Init GitHub
const github = new Github;
//Init UI
const ui = new UI;

const searchUser = document.querySelector('#searchUser');
searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value;

  if(userText !== '') {
//Make HTTP call
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found') {
        //Show Alert
      } else {
        //Show Profile
        ui.showProfile(data.profile);
      }
    })
  } else {
    // Clear Profile
  }
});
