let bombRow = Math.floor(4*Math.random());//random row 1,2,3,4
let bombColumn = Math.floor(4*Math.random());//random column 1,2,3,4

console.log('the bomb is in tile ' +bombRow+'-'+bombColumn);

function doClick(id) {
    let bomb = 'tile-' +bombRow+'-'+bombColumn;
    console.log('clicked on '+ id.id);
    if(bomb == id.id) {
        id.style.backgroundImage = "url('oui.png')";
        id.style.backgroundSize = 'cover';
    }
    else{
        id.style.backgroundImage = "url('non.jpg')";
        id.style.backgroundSize = 'cover';
    }
}
