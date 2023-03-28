function About() {
  return (
    <>
      <div>
        <h1>About</h1>
      </div>
    </>
  );
}

export default About;

// let today = new Date();
// let month = String(today.getMonth() + 1).padStart(2,'0');
// let day = String(today.getDate()).padStart(2,'0');
// let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`;

// let response = await fetch( url,
//     {
//         headers: {
//             'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
//             'Api-User-Agent': 'YOUR_APP_NAME (YOUR_EMAIL_OR_CONTACT_PAGE)'
//         }
//     }
// );
// response.json()
//     .then(console.log).catch(console.error);
