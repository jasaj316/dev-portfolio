<template>
  <main>
    <div>
      <h1>About Me</h1>
      <h3>A short biography</h3>
    </div>

    <article class="about">
      <p> Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice.
      </p>
      <p>a fost macheta standard a industriei încă din secolul al XVI-lea,
        când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru.
      </p>
      <p>
        a crea o carte demonstrativă pentru literele respective. Nu doar că a supravieţuit
        timp de cinci secole, dar şi a facut saltul în tipografia electronică practic neschimbată.
        A fost popularizată în anii '60 odată
      </p>
      <p> făcându-l să arate ca o engleză citibilă:
        <br /><br />
        - demonstrativă <br />
        - pentru <br />
        - tipografia <br />
        - făcând-o<br />
        - căutând<br />
        - Bonorum <br />
        - odată
      </p>
      <p>Nimeni nu iubeşte durerea, nimeni nu o caută sau vrea să o aibă!</p>
    </article>
  </main>
</template>
<style scoped>
.about {
  display: flex;
  flex-direction: column;
  background: #1718217d;
  border-radius: 0.1rem;
  padding: 1vw;
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
    max-width: 92vw;
  }
}
</style>