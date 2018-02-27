class Github {
  constructor() {
    this.client_id = 'db50f0e70c8574138397',
    this.client_secret = '92c8069532c00c7b52dc50414e3802fa2f76ad87';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile,
    }
  }
}
