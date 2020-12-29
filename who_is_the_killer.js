// Some people have been killed!
// You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the murders.
// Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:
// {'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle']}
// and also a list of the names of the dead people: ['Lucas', 'Bill']
// return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'

function killer(suspectInfo, dead) {
    const lengthArray = [];
    const getKiller = {};
    for (const [key, value] of Object.entries(suspectInfo)) {
      const victims = [];
      for (const v of value) {
        for (const victim of dead) {
          if (v === victim) {
            victims.push(victim);
          }
        }
      }
      getKiller[key] = victims.length;
      console.log("suspect : ", suspectInfo[key], "victims : ", victims.length)
    }
      killerSorted = Object.keys(getKiller).sort(function(a,b){return getKiller[b]-getKiller[a]})
      return killerSorted[0];
  }

  console.log(killer({'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill']));