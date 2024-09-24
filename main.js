let fructis = ["olma", "banan", "shaftoli", "gilos"]

console.log(fructis);

alert(`Mevalar savatda: ${fructis.length} ta`)

let q = confirm('Siz savatdan mevalar olishni hohlaysizmi')

if(q == true) {
    fructis.pop()
    alert(`Mevalar savatda: ${fructis.length} ta`)
    console.log(fructis);
} else {
    alert(`Mevalar savatda: ${fructis.length} ta`)
    console.log(fructis);
}