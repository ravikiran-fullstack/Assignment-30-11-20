const div = document.createElement('div');
const p1 = document.createElement('p');
p1.id = 'count';

const p2 = document.createElement('p');
p2.id = 'info';
div.append(p1,p2)
document.body.append(div);