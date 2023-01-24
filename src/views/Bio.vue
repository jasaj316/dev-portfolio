<template>
  <main>
    <div>
      <h1>About Me</h1>
      <h3>A short biography</h3>
    </div>
    <article class="about">
      <p>
        &nbsp;&nbsp;I grew up in Muskoka, ON, and after graduating high school,
        I studied Game Development at Durham College. This allowed me to obtain a
        Texture Artist position at Guru Studio in Toronto, to work on the television series 'Paw Patrol'.
      </p>
      <p>
        &nbsp;&nbsp;Working in a large team allowed me to hone my communication skills, helping me
        collaborate, troubleshoot, and share solutions among team members.
        Deadlines were often very tight,
        which required me limit the amount of time spent on individual tasks in order to complete assignments on
        schedule.
        I left that field due to the fact that creating 3d Art requires very little
        problem-solving, which I enjoy greatly.
      </p>
      <p>
        &nbsp;&nbsp;I've recently graduated from Georgian College's 'Interactive Media Design-Web' program, recieving
        Honours.
        The program covered client-side web technologies such as HTML, CSS, and Vanilla JS,
        design skills such as UI, UX, and graphic design, and server-side technologies such as PHP,
        relational database management using MySQL, and NoSQL MongoDB.
        I've learned the Javascript frameworks Vue and React, as well as various small libraries.
      </p>
      <p> My other passions (in no particular order) include:
        <br><br>
        -&nbsp;Cooking<br>
        -&nbsp;Spicy food<br>
        -&nbsp;Composing electronic music<br>
        -&nbsp;Cross-country road trips<br>
        -&nbsp;Cats<br>
        -&nbsp;Typography
      </p>
      <p>Thank you for taking the time to review my biography. I hope to hear from you soon!</p>
    </article>
  </main>
</template>
<style scoped>
.about {
  display: flex;
  flex-direction: column;
  background: #10111a;
  background-image: linear-gradient(#0f111a 0%, #11121d 100%);
  border-radius: 3px;
  padding: 1vw 1.4vw 1vw 1.4vw;
  margin-bottom: 1rem;
}

.about p {
  font-size: 1.3rem;
  margin-bottom: 0.2rem;
  max-width: 60vw;
}

.about p:first-of-type {
  margin-block-start: 0;
}

/* Media generals */
@media only screen and (max-width: 890px) {
  .about p {
    max-width: 75vw;
  }
}

/* Tiny screens */
@media only screen and (max-width: 400px) {
  .about p {
    max-width: 90vw;
  }
}
</style>