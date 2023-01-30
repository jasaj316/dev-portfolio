<template>
  <main>
    <div>
      <h1>About Me</h1>
      <h3>A short biography</h3>
    </div>
    <article class="about">
      <p>
        &nbsp;&nbsp;I grew up in beautiful Muskoka, ON, and after high school, I achieved an Advanced Diploma with
        Honours in 'Game Development' at Durham College. Quickly recruited as a Texture Artist at Guru Studio in
        Toronto, I worked on the popular childrens' television series 'Paw Patrol'.
      </p>
      <p>
        &nbsp;&nbsp;Working in that large team environment allowed me to hone my communication skills, in order to
        collaborate,troubleshoot, and share solutions among my team members.
        Deadlines were often very tight, which required me to limit the amount of time spent on individual tasks to
        complete assignments on schedule.
      </p>
      <p>
        &nbsp;&nbsp;In pursuit of my strong interest in web development, I left Guru Studio,
        and have recently graduated with Honours from Georgian College's 'Interactive Media Design-Web' program.
        This taught me client-side web technologies such as HTML, CSS, and Vanilla JS,
        as well as the JavaScript frameworks Vue and React. The program also included design skills
        such as UI, UX, and graphic design, back-end technologies such as PHP,
        and relational database management using MySQL and MongoDB.
      </p>
      <p> My other passions (in no particular order) include:
        <br><br>
        &#x2713;&nbsp;Cooking<br>
        &#x2713;&nbsp;Spicy food<br>
        &#x2713;&nbsp;Cross-country road trips<br>
        &#x2713;&nbsp;Cats<br>
        &#x2713;&nbsp;Typography
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
  background-image: linear-gradient(#0d0e1b 20%, #0e0f1b 100%);
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